// @FILE: src-tauri/src/commands.rs
use crate::graph::{GraphManager, NoteGraph};
use crate::plugins::{Plugin, PluginManager};
use crate::search::SearchEngine;
use crate::vault::{VaultEntry, VaultManager};
use git2::Repository;
use std::path::PathBuf;
use std::sync::Mutex;
use tauri::State;

#[tauri::command]
pub async fn initialize_git_repo(path: String) -> Result<(), String> {
    let repo_path = PathBuf::from(path);
    git2::Repository::init(&repo_path)
        .map(|_| ())
        .map_err(|e| format!("Failed to initialize git repository: {}", e))
}

#[tauri::command]
pub async fn git_add_all(path: String) -> Result<(), String> {
    let repo = Repository::open(&path).map_err(|e| format!("Failed to open repository: {}", e))?;
    let mut index = repo.index().map_err(|e| format!("Failed to get index: {}", e))?;
    index.add_all(["."], git2::IndexAddOption::DEFAULT, None)
        .map_err(|e| format!("Failed to add all files: {}", e))?;
    index.write().map_err(|e| format!("Failed to write index: {}", e))?;
    Ok(())
}

#[tauri::command]
pub async fn git_commit(path: String, message: String) -> Result<(), String> {
    let repo = Repository::open(&path).map_err(|e| format!("Failed to open repository: {}", e))?;
    let mut index = repo.index().map_err(|e| format!("Failed to get index: {}", e))?;
    let tree_id = index.write_tree().map_err(|e| format!("Failed to write tree: {}", e))?;
    let tree = repo.find_tree(tree_id).map_err(|e| format!("Failed to find tree: {}", e))?;

    let signature = repo.signature().map_err(|e| format!("Failed to get signature: {}", e))?;
    let parent_commit = find_last_commit(&repo)?;

    repo.commit(
        Some("HEAD"),
        &signature,
        &signature,
        &message,
        &tree,
        &[&parent_commit],
    )
    .map_err(|e| format!("Failed to commit: {}", e))?;

    Ok(())
}

fn find_last_commit(repo: &Repository) -> Result<git2::Commit, String> {
    let obj = repo.head().map_err(|e| format!("Failed to get HEAD: {}", e))?.resolve().map_err(|e| format!("Failed to resolve HEAD: {}", e))?.peel(git2::ObjectType::Commit).map_err(|e| format!("Failed to peel HEAD: {}", e))?;
    obj.into_commit().map_err(|_| "Couldn't find commit".to_string())
}

#[tauri::command]
pub async fn git_push(path: String) -> Result<(), String> {
    let repo = Repository::open(&path).map_err(|e| format!("Failed to open repository: {}", e))?;
    let mut remote = repo.find_remote("origin").map_err(|e| format!("Failed to find remote 'origin': {}", e))?;
    remote.push(&["refs/heads/main:refs/heads/main"], None)
        .map_err(|e| format!("Failed to push: {}", e))?;
    Ok(())
}

#[tauri::command]
pub async fn git_pull(path: String) -> Result<(), String> {
    let repo = Repository::open(&path).map_err(|e| format!("Failed to open repository: {}", e))?;
    let mut remote = repo.find_remote("origin").map_err(|e| format!("Failed to find remote 'origin': {}", e))?;
    remote.fetch(&["main"], None, None)
        .map_err(|e| format!("Failed to fetch: {}", e))?;

    let fetch_commit = repo.find_reference("FETCH_HEAD").map_err(|e| format!("Failed to find FETCH_HEAD: {}", e))?.peel_to_commit().map_err(|e| format!("Failed to peel FETCH_HEAD to commit: {}", e))?;
    let (analysis, _) = repo.merge_analysis(&fetch_commit).map_err(|e| format!("Failed to analyze merge: {}", e))?;

    if analysis.is_up_to_date() {
        Ok(())
    } else if analysis.is_fast_forward() {
        let mut reference = repo.find_reference("refs/heads/main").map_err(|e| format!("Failed to find main branch: {}", e))?;
        reference.set_target(fetch_commit.id(), "Fast-Forward").map_err(|e| format!("Failed to set target: {}", e))?;
        repo.set_head("refs/heads/main").map_err(|e| format!("Failed to set HEAD: {}", e))?;
        repo.checkout_head(Some(git2::build::CheckoutBuilder::default().force())).map_err(|e| format!("Failed to checkout HEAD: {}", e))?;
        Ok(())
    } else {
        Err("Fast-forward merge not possible. Please resolve conflicts manually.".to_string())
    }
}

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
