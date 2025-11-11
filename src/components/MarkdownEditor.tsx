import React, { useEffect, useState, useCallback } from 'react';
import { useVaultStore } from '@/stores/vaultStore';
import { invoke } from '@tauri-apps/api/core';
import { Textarea } from './ui/textarea';
import { useDebounce } from '@/hooks/useDebounce';

const MarkdownEditor: React.FC = () => {
  const { currentFileContent, currentFilePath, setCurrentFileContent } = useVaultStore();
  const [editorContent, setEditorContent] = useState(currentFileContent);

  // Update local state when store content changes (e.g., new file selected)
  useEffect(() => {
    setEditorContent(currentFileContent);
  }, [currentFileContent]);

  const saveContent = useCallback(async (content: string) => {
    if (currentFilePath) {
      try {
        await invoke("write_note_content", { path: currentFilePath, content });
        console.log("Content saved successfully!");
      } catch (error) {
        console.error("Failed to save content:", error);
      }
    }
  }, [currentFilePath]);

  const debouncedSave = useDebounce(saveContent, 1000); // Save after 1 second of inactivity

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value;
    setEditorContent(newContent);
    setCurrentFileContent(newContent); // Update store immediately for UI consistency
    debouncedSave(newContent); // Debounce saving to backend
  };

  return (
    <div className="h-full w-full p-4">
      {currentFilePath ? (
        <Textarea
          className="h-full w-full resize-none border-none focus-visible:ring-0"
          value={editorContent}
          onChange={handleChange}
          placeholder="Start writing your markdown note here..."
        />
      ) : (
        <div className="flex items-center justify-center h-full text-muted-foreground">
          Select a file to start editing.
        </div>
      )}
    </div>
  );
};

export default MarkdownEditor;
