use crate::vault::{VaultEntry, VaultManager};
use serde::{Deserialize, Serialize};
use std::collections::HashSet;
use std::fs;
use std::path::{Path, PathBuf};

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct GraphNode {
    pub id: String,
    pub label: String,
    pub path: PathBuf,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct GraphEdge {
    pub from: String,
    pub to: String,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct NoteGraph {
    pub nodes: Vec<GraphNode>,
    pub edges: Vec<GraphEdge>,
}

pub struct GraphManager;

impl GraphManager {
    pub fn generate_graph(vault_path: &Path) -> Result<NoteGraph, String> {
        let all_entries = VaultManager::scan_vault(vault_path).map_err(|e| e.to_string())?;
        let mut notes = Vec::new();
        Self::collect_notes(&all_entries, &mut notes);

        let mut nodes = Vec::new();
        let mut edges = Vec::new();
        let mut note_paths = HashSet::new();

        for note in &notes {
            let note_path_str = note.path.to_string_lossy().to_string();
            note_paths.insert(note_path_str.clone());
            nodes.push(GraphNode {
                id: note_path_str.clone(),
                label: note.name.clone().replace(".md", ""),
                path: note.path.clone(),
            });
        }

        for note in &notes {
            let content = fs::read_to_string(&note.path).map_err(|e| e.to_string())?;
            let from_node_id = note.path.to_string_lossy().to_string();

            for (i, _) in content.match_indices("[[") {
                if let Some(end) = content[i + 2..].find("]]") {
                    let link_name = &content[i + 2..i + 2 + end];
                    let to_note_path = vault_path.join(format!("{}.md", link_name));
                    let to_note_id = to_note_path.to_string_lossy().to_string();

                    if note_paths.contains(&to_note_id) {
                        edges.push(GraphEdge {
                            from: from_node_id.clone(),
                            to: to_note_id,
                        });
                    }
                }
            }
        }

        Ok(NoteGraph { nodes, edges })
    }

    fn collect_notes<'a>(entries: &'a [VaultEntry], notes: &mut Vec<&'a VaultEntry>) {
        for entry in entries {
            if entry.is_dir {
                if let Some(children) = &entry.children {
                    Self::collect_notes(children, notes);
                }
            } else {
                notes.push(entry);
            }
        }
    }
}
