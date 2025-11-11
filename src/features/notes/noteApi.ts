import { invoke } from "@tauri-apps/api/core";
import { Note } from "./noteTypes";

export const createNote = async (note: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>) => {
    // Tauri command to save note to filesystem
    return await invoke('create_note', { note });
};