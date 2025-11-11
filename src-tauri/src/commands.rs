// @FILE: src-tauri/src/commands.rs
use crate::graph::{GraphManager, NoteGraph};
use crate::plugins::{Plugin, PluginManager};
use crate::search::SearchEngine;
use crate::vault::{VaultEntry, VaultManager};
use std::path::PathBuf;
use std::sync::Mutex;
use tauri::State;

#[tauri::command]
pub async fn get_note_graph(vault_path: String) -> Result<NoteGraph, String> {
    let vault_path = PathBuf::from(vault_path);
    GraphManager::generate_graph(&vault_path)
}

#[tauri::command]
pub async fn open_vault(path: String) -> Result<Vec<VaultEntry>, String> {
    let vault_path = PathBuf::from(path);

    if !vault_path.exists() {
        return Err("Vault path does not exist".to_string());
    }

    VaultManager::scan_vault(&vault_path).map_err(|e| e.to_string())
}

#[tauri::command]
pub async fn read_note_content(path: String) -> Result<String, String> {
    let note_path = PathBuf::from(path);
    VaultManager::read_note(&note_path).map_err(|e| e.to_string())
}

#[tauri::command]
pub async fn write_note_content(path: String, content: String) -> Result<(), String> {
    let note_path = PathBuf::from(path);
    VaultManager::write_note(&note_path, &content).map_err(|e| e.to_string())
}

#[tauri::command]
pub async fn search_notes(query: String, vault_path: String) -> Result<Vec<SearchResult>, String> {
    let engine = SearchEngine::new(PathBuf::from(vault_path));
    engine.search(&query).map_err(|e| e.to_string())
}

#[tauri::command]
pub async fn load_plugin(
    plugin_path: String,
    state: State<'_, Mutex<PluginManager>>,
) -> Result<(), String> {
    state
        .lock()
        .unwrap()
        .load_plugin(PathBuf::from(plugin_path))
        .map_err(|e| e.to_string())
}

#[tauri::command]
pub async fn list_plugins(state: State<'_, Mutex<PluginManager>>) -> Result<Vec<Plugin>, String> {
    Ok(state.lock().unwrap().list_plugins())
}

#[tauri::command]
pub async fn load_theme(_theme_path: String) -> Result<(), String> {
    // Implementation for loading themes
    Ok(())
}

#[tauri::command]
pub async fn list_themes() -> Result<Vec<Theme>, String> {
    // Implementation for listing themes
    Ok(vec![])
}

#[derive(serde::Serialize)]
pub struct SearchResult {
    pub path: String,
    pub title: String,
    pub excerpt: String,
    pub score: f32,
}

#[derive(serde::Serialize)]
pub struct Theme {
    pub id: String,
    pub name: String,
    pub author: String,
}
