// @FILE: src/stores/vaultStore.ts
import { create } from 'zustand';
import { Note, Vault } from '@/types';

interface VaultState {
  vault: Vault | null;
  currentNote: Note | null;
  notes: Note[];
  isLoading: boolean;
  
  setVault: (vault: Vault) => void;
  setCurrentNote: (note: Note | null) => void;
  addNote: (note: Note) => void;
  updateNote: (id: string, updates: Partial<Note>) => void;
  deleteNote: (id: string) => void;
  setLoading: (loading: boolean) => void;
}

export const useVaultStore = create<VaultState>((set) => ({
  vault: null,
  currentNote: null,
  notes: [],
  isLoading: false,
  
  setVault: (vault) => set({ vault }),
  setCurrentNote: (note) => set({ currentNote: note }),
  addNote: (note) => set((state) => ({ notes: [...state.notes, note] })),
  updateNote: (id, updates) => set((state) => ({
    notes: state.notes.map(n => n.id === id ? { ...n, ...updates } : n)
  })),
  deleteNote: (id) => set((state) => ({
    notes: state.notes.filter(n => n.id !== id)
  })),
  setLoading: (loading) => set({ isLoading: loading }),
}));
