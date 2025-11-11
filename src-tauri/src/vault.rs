// @FILE: src-tauri/src/vault.rs
use serde::{Deserialize, Serialize};
use std::fs;
use std::io;
use std::path::{Path, PathBuf};

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct VaultEntry {
    pub name: String,
    pub path: PathBuf,
    pub is_dir: bool,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub children: Option<Vec<VaultEntry>>,
}

pub struct VaultManager;

impl VaultManager {
    pub fn scan_vault(path: &Path) -> io::Result<Vec<VaultEntry>> {
        let mut entries = Vec::new();
        Self::get_vault_entries(path, path, &mut entries)?;
        Ok(entries)
    }

    fn get_vault_entries(base: &Path, current: &Path, entries: &mut Vec<VaultEntry>) -> io::Result<()> {
        if current.is_dir() {
            let mut children_entries = Vec::new();
            for entry in fs::read_dir(current)? {
                let entry = entry?;
                let path = entry.path();

                if let Some(name) = path.file_name() {
                    if name.to_string_lossy().starts_with('.') {
                        continue;
                    }
                }

                if path.is_dir() {
                    let mut children = Vec::new();
                    Self::get_vault_entries(base, &path, &mut children)?;
                    children_entries.push(VaultEntry {
                        name: path.file_name().unwrap().to_string_lossy().to_string(),
                        path: path.clone(),
                        is_dir: true,
                        children: Some(children),
                    });
                } else if Self::is_markdown_file(&path) {
                    children_entries.push(VaultEntry {
                        name: path.file_name().unwrap().to_string_lossy().to_string(),
                        path: path.clone(),
                        is_dir: false,
                        children: None,
                    });
                }
            }
            // Sort directories first, then files, both alphabetically
            children_entries.sort_by(|a, b| {
                if a.is_dir && !b.is_dir {
                    std::cmp::Ordering::Less
                } else if !a.is_dir && b.is_dir {
                    std::cmp::Ordering::Greater
                } else {
                    a.name.cmp(&b.name)
                }
            });
            entries.extend(children_entries);
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
        if let Some(parent) = path.parent() {
            fs::create_dir_all(parent)?;
        }
        fs::write(path, content)
    }

    pub fn delete_note(path: &Path) -> io::Result<()> {
        fs::remove_file(path)
    }
}
