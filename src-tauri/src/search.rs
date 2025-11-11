// @FILE: src-tauri/src/search.rs
use crate::commands::SearchResult;
use std::fs;
use std::path::{Path, PathBuf};

pub struct SearchEngine {
    vault_path: PathBuf,
}

impl SearchEngine {
    pub fn new(vault_path: PathBuf) -> Self {
        Self { vault_path }
    }

    pub fn search(&self, query: &str) -> Result<Vec<SearchResult>, std::io::Error> {
        let mut results = Vec::new();
        let query_lower = query.to_lowercase();

        self.search_directory(&self.vault_path, &query_lower, &mut results)?;

        // Sort by score (descending)
        results.sort_by(|a, b| b.score.partial_cmp(&a.score).unwrap());

        Ok(results)
    }

    fn search_directory(
        &self,
        path: &Path,
        query: &str,
        results: &mut Vec<SearchResult>,
    ) -> Result<(), std::io::Error> {
        if path.is_dir() {
            for entry in fs::read_dir(path)? {
                let entry = entry?;
                let entry_path = entry.path();

                // Skip hidden files
                if let Some(name) = entry_path.file_name() {
                    if name.to_string_lossy().starts_with('.') {
                        continue;
                    }
                }

                if entry_path.is_dir() {
                    self.search_directory(&entry_path, query, results)?;
                } else if self.is_markdown_file(&entry_path) {
                    if let Ok(content) = fs::read_to_string(&entry_path) {
                        if let Some(result) = self.match_content(&entry_path, &content, query) {
                            results.push(result);
                        }
                    }
                }
            }
        }
        Ok(())
    }

    fn match_content(&self, path: &Path, content: &str, query: &str) -> Option<SearchResult> {
        let content_lower = content.to_lowercase();

        if !content_lower.contains(query) {
            return None;
        }

        // Calculate score based on matches
        let matches = content_lower.matches(query).count();
        let title = Self::extract_title(content);
        let excerpt = Self::extract_excerpt(content, query);

        Some(SearchResult {
            path: path.to_string_lossy().to_string(),
            title,
            excerpt,
            score: matches as f32,
        })
    }

    fn extract_title(content: &str) -> String {
        content
            .lines()
            .next()
            .and_then(|line| {
                if line.starts_with('#') {
                    Some(line.trim_start_matches('#').trim().to_string())
                } else {
                    None
                }
            })
            .unwrap_or_else(|| "Untitled".to_string())
    }

    fn extract_excerpt(content: &str, query: &str) -> String {
        let query_lower = query.to_lowercase();

        for line in content.lines() {
            if line.to_lowercase().contains(&query_lower) {
                // Return up to 150 characters around the match
                let trimmed = if line.len() > 150 {
                    format!("...{}...", &line[..150])
                } else {
                    line.to_string()
                };
                return trimmed;
            }
        }

        // Fallback to first line
        content.lines().next().unwrap_or("").to_string()
    }

    fn is_markdown_file(&self, path: &Path) -> bool {
        path.extension()
            .and_then(|s| s.to_str())
            .map(|ext| ext == "md" || ext == "markdown")
            .unwrap_or(false)
    }
}
