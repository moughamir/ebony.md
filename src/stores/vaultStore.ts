// @FILE: src/stores/vaultStore.ts
import { create } from 'zustand';
import { NoteGraph, Vault, VaultEntry } from '@/types';

interface VaultState {
  vault: Vault | null;
  vaultEntries: VaultEntry[];
  selectedEntry: VaultEntry | null;
  currentFileContent: string;
  currentFilePath: string | null;
  noteGraph: NoteGraph | null;
  isLoading: boolean;
  
  setVault: (vault: Vault | null) => void;
  setVaultEntries: (entries: VaultEntry[]) => void;
  setSelectedEntry: (entry: VaultEntry | null) => void;
  setCurrentFileContent: (content: string) => void;
  setCurrentFilePath: (path: string | null) => void;
  setNoteGraph: (graph: NoteGraph | null) => void;
  setLoading: (loading: boolean) => void;
}

export const useVaultStore = create<VaultState>((set) => ({
  vault: null,
  vaultEntries: [],
  selectedEntry: null,
  currentFileContent: "",
  currentFilePath: null,
  noteGraph: null,
  isLoading: false,
  
  setVault: (vault) => set({ vault }),
  setVaultEntries: (entries) => set({ vaultEntries: entries }),
  setSelectedEntry: (entry) => set({ selectedEntry: entry }),
  setCurrentFileContent: (content) => set({ currentFileContent: content }),
  setCurrentFilePath: (path) => set({ currentFilePath: path }),
  setNoteGraph: (graph) => set({ noteGraph: graph }),
  setLoading: (loading) => set({ isLoading: loading }),
}));
