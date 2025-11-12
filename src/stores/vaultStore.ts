// @FILE: src/stores/vaultStore.ts
import { create } from "zustand";
import { Note, NoteGraph, Vault, VaultEntry } from "@/types";

interface VaultState {
  vault: Vault | null;
  vaultEntries: VaultEntry[];
  selectedEntry: VaultEntry | null;
  currentFileContent: string;
  currentFilePath: string | null;
  noteGraph: NoteGraph | null;
  isLoading: boolean;
  notes: Note[];
  currentNote: Note | null;
  recentFiles: string[];

  addNote: (note: Note) => void;
  updateNote: (id: string, updates: Partial<Note>) => void;
  deleteNote: (id: string) => void;
  setCurrentNote: (note: Note | null) => void;
  setVault: (vault: Vault | null) => void;
  setVaultEntries: (entries: VaultEntry[]) => void;
  setSelectedEntry: (entry: VaultEntry | null) => void;
  setCurrentFileContent: (content: string) => void;
  setCurrentFilePath: (path: string | null) => void;
  setNoteGraph: (graph: NoteGraph | null) => void;
  setLoading: (loading: boolean) => void;
  addRecentFile: (path: string) => void;
}

export const useVaultStore = create<VaultState>((set) => ({
  vault: null,
  vaultEntries: [],
  selectedEntry: null,
  currentFileContent: "",
  currentFilePath: null,
  noteGraph: null,
  isLoading: false,
  notes: [],
  currentNote: null,
  recentFiles: [],

  addNote: (note) => set((state) => ({ notes: [...state.notes, note] })),
  updateNote: (id, updates) =>
    set((state) => ({
      notes: state.notes.map((n) => (n.id === id ? { ...n, ...updates } : n)),
    })),
  deleteNote: (id) =>
    set((state) => ({
      notes: state.notes.filter((n) => n.id !== id),
    })),
  setCurrentNote: (note) => set({ currentNote: note }),
  setVault: (vault) => set({ vault }),
  setVaultEntries: (entries) => set({ vaultEntries: entries }),
  setSelectedEntry: (entry) => set({ selectedEntry: entry }),
  setCurrentFileContent: (content) => set({ currentFileContent: content }),
  setCurrentFilePath: (path) =>
    set((state) => {
      const recentFiles = path
        ? [path, ...state.recentFiles.filter((p) => p !== path)].slice(0, 20)
        : state.recentFiles;
      return { currentFilePath: path, recentFiles };
    }),
  setNoteGraph: (graph) => set({ noteGraph: graph }),
  setLoading: (loading) => set({ isLoading: loading }),
  addRecentFile: (path) =>
    set((state) => ({
      recentFiles: [path, ...state.recentFiles.filter((p) => p !== path)].slice(
        0,
        20,
      ),
    })),
}));
