// @FILE: src/lib/tauri.ts
import { invoke } from "@tauri-apps/api/core";
import { readDir, readTextFile, writeTextFile } from "@tauri-apps/plugin-fs";

export class TauriAPI {
  // Vault operations
  static async openVault(path: string): Promise<string[]> {
    return invoke("open_vault", { path });
  }

  static async readNote(path: string): Promise<string> {
    return readTextFile(path);
  }

  static async writeNote(path: string, content: string): Promise<void> {
    return writeTextFile(path, content);
  }

  static async listFiles(path: string): Promise<any[]> {
    return readDir(path);
  }

  static async deleteNote(path: string): Promise<void> {
    return invoke("delete_note", { path });
  }

  // Search operations
  static async searchNotes(query: string): Promise<any[]> {
    return invoke("search_notes", { query });
  }

  // Plugin operations
  static async loadPlugin(pluginPath: string): Promise<void> {
    return invoke("load_plugin", { pluginPath });
  }

  static async listPlugins(): Promise<any[]> {
    return invoke("list_plugins");
  }

  // Theme operations
  static async loadTheme(themePath: string): Promise<void> {
    return invoke("load_theme", { themePath });
  }

  static async listThemes(): Promise<any[]> {
    return invoke("list_themes");
  }
}
