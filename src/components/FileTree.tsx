import React from 'react';
import { VaultEntry } from '@/types';
import { useVaultStore } from '@/stores/vaultStore';
import { invoke } from '@tauri-apps/api/core';
import { ScrollArea } from './ui/scroll-area';
import { cn } from '@/lib/utils';

interface FileTreeProps {
  entries: VaultEntry[];
}

const FileTree: React.FC<FileTreeProps> = ({ entries }) => {
  const { selectedEntry, setSelectedEntry, setCurrentFileContent, setCurrentFilePath } = useVaultStore();

  const handleEntryClick = async (entry: VaultEntry) => {
    if (entry.is_dir) {
      // Optionally expand/collapse directories, but for now, just select
      setSelectedEntry(entry);
    } else {
      setSelectedEntry(entry);
      setCurrentFilePath(entry.path);
      try {
        const content: string = await invoke("read_note_content", { path: entry.path });
        setCurrentFileContent(content);
      } catch (error) {
        console.error("Failed to read note content:", error);
        setCurrentFileContent("");
      }
    }
  };

  const renderEntry = (entry: VaultEntry) => (
    <div key={entry.path} className="ml-4">
      <div
        className={cn(
          "flex items-center cursor-pointer py-1 px-2 rounded-md",
          selectedEntry?.path === entry.path && "bg-accent text-accent-foreground"
        )}
        onClick={() => handleEntryClick(entry)}
      >
        {entry.is_dir ? (
          <span className="mr-1">📁</span>
        ) : (
          <span className="mr-1">📄</span>
        )}
        <span>{entry.name}</span>
      </div>
      {entry.is_dir && entry.children && (
        <FileTree entries={entry.children} />
      )}
    </div>
  );

  return (
    <ScrollArea className="h-full">
      {entries.map(renderEntry)}
    </ScrollArea>
  );
};

export default FileTree;
