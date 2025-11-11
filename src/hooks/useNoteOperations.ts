// @FILE: src/hooks/useNoteOperations.ts
import { useState } from "react";
import { TauriAPI } from "@/lib/tauri";
import { useVaultStore } from "@/stores/vaultStore";
import { Note } from "@/types";

export function useNoteOperations() {
  const [isLoading, setIsLoading] = useState(false);
  const { addNote, updateNote, deleteNote, setCurrentNote } = useVaultStore();

  const createNote = async (title: string, path: string) => {
    setIsLoading(true);
    try {
      const content = `# ${title}\n\n`;
      await TauriAPI.writeNote(path, content);

      const newNote: Note = {
        id: crypto.randomUUID(),
        path,
        title,
        content,
        created: new Date(),
        modified: new Date(),
        tags: [],
      };

      addNote(newNote);
      setCurrentNote(newNote);
    } catch (error) {
      console.error("Failed to create note:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveNote = async (id: string, content: string, path: string) => {
    setIsLoading(true);
    try {
      await TauriAPI.writeNote(path, content);
      updateNote(id, { content, modified: new Date() });
    } catch (error) {
      console.error("Failed to save note:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadNote = async (path: string) => {
    setIsLoading(true);
    try {
      const content = await TauriAPI.readNote(path);
      const note: Note = {
        id: crypto.randomUUID(),
        path,
        title: path.split("/").pop() || "Untitled",
        content,
        created: new Date(),
        modified: new Date(),
        tags: [],
      };
      setCurrentNote(note);
      return note;
    } catch (error) {
      console.error("Failed to load note:", error);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const delNote = async (path: string) => {
    setIsLoading(true);
    try {
      await TauriAPI.deleteNote(path);
      deleteNote(path);
    } catch (error) {
      console.error("Failed to delete note:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    createNote,
    saveNote,
    loadNote,
    delNote,
  };
}
