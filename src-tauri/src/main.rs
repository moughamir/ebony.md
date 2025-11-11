// @FILE: src-tauri/src/main.rs
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod commands;
mod graph;
mod plugins;
mod search;
mod vault;

use commands::*;

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_store::Builder::new().build())
        .plugin(tauri_plugin_sql::Builder::new().build())
        .plugin(tauri_plugin_single_instance::init(|app, args, cwd| {}))
        .plugin(tauri_plugin_shell::init())
        .plugin(tauri_plugin_os::init())
        .plugin(tauri_plugin_opener::init())
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_dialog::init())
        .invoke_handler(tauri::generate_handler![
            get_note_graph,
            open_vault,
            read_note_content,
            write_note_content,
            search_notes,
            load_plugin,
            list_plugins,
            load_theme,
            list_themes,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
