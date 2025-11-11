// @FILE: src-tauri/src/vault.rs
use std::fs;
use std::io;
use std::path::{Path, PathBuf};

pub struct VaultManager;

impl VaultManager {
    pub fn scan_vault(path: &Path) -> io::Result<Vec<String>> {
        let mut files = Vec::new();
        Self::scan_directory(path, path, &mut files)?;
        Ok(files)
    }

    fn scan_directory(base: &Path, current: &Path, files: &mut Vec<String>) -> io::Result<()> {
        if current.is_dir() {
            for entry in fs::read_dir(current)? {
                let entry = entry?;
                let path = entry.path();

                // Skip hidden files and directories
                if let Some(name) = path.file_name() {
                    if name.to_string_lossy().starts_with('.') {
                        continue;
                    }
                }

                if path.is_dir() {
                    Self::scan_directory(base, &path, files)?;
                } else if Self::is_markdown_file(&path) {
                    if let Ok(relative) = path.strip_prefix(base) {
                        files.push(relative.to_string_lossy().to_string());
                    }
                }
            }
        }
        Ok(())
    }

    fn is_markdown_file(path: &Path) -> bool {
        path.extension()
            .and_then(|s| s.to_str())
            .map(|ext| ext == "md" || ext == "markdown")
            .unwrap_or(false)
    }

    pub fn read_note(path: &Path) -> io::Result<String> {
        fs::read_to_string(path)
    }

    pub fn write_note(path: &Path, content: &str) -> io::Result<()> {
        // Create parent directories if they don't exist
        if let Some(parent) = path.parent() {
            fs::create_dir_all(parent)?;
        }
        fs::write(path, content)
    }

    pub fn delete_note(path: &Path) -> io::Result<()> {
        fs::remove_file(path)
    }
}
