
// @FILE: src/stores/settingsStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SettingsState {
  theme: 'light' | 'dark' | 'system';
  fontSize: number;
  fontFamily: string;
  vaultPath: string | null;
  enabledPlugins: string[];
  
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  setFontSize: (size: number) => void;
  setFontFamily: (family: string) => void;
  setVaultPath: (path: string) => void;
  togglePlugin: (pluginId: string) => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      theme: 'system',
      fontSize: 16,
      fontFamily: 'Inter',
      vaultPath: null,
      enabledPlugins: [],
      
      setTheme: (theme) => set({ theme }),
      setFontSize: (fontSize) => set({ fontSize }),
      setFontFamily: (fontFamily) => set({ fontFamily }),
      setVaultPath: (vaultPath) => set({ vaultPath }),
      togglePlugin: (pluginId) => set((state) => ({
        enabledPlugins: state.enabledPlugins.includes(pluginId)
          ? state.enabledPlugins.filter(id => id !== pluginId)
          : [...state.enabledPlugins, pluginId]
      })),
    }),
    {
      name: 'ebony-settings',
    }
  )
);

