import React, { useEffect, useState, useCallback } from "react";
import { useVaultStore } from "@/stores/vaultStore";
import { invoke } from "@tauri-apps/api/core";
import { useDebounce } from "@/hooks/useDebounce";
import MDEditor from "@uiw/react-md-editor";
import "@uiw/react-md-editor/markdown-editor.css";

const MarkdownEditor: React.FC = () => {
  const { currentFileContent, currentFilePath, setCurrentFileContent } =
    useVaultStore();
  const [editorContent, setEditorContent] = useState(currentFileContent);

  // Update local state when store content changes (e.g., new file selected)
  useEffect(() => {
    setEditorContent(currentFileContent);
  }, [currentFileContent]);

  const saveContent = useCallback(
    async (content: string) => {
      if (currentFilePath) {
        try {
          await invoke("write_note_content", {
            path: currentFilePath,
            content,
          });
          console.log("Content saved successfully!");
        } catch (error) {
          console.error("Failed to save content:", error);
        }
      }
    },
    [currentFilePath],
  );

  const debouncedSave = useDebounce(saveContent, 1000); // Save after 1 second of inactivity

  const handleChange = (value: string | undefined) => {
    const newContent = value || "";
    setEditorContent(newContent);
    setCurrentFileContent(newContent);
    debouncedSave(newContent);
  };

  return (
    <div className="h-full w-full p-4" data-color-mode="light">
      {currentFilePath ? (
        <MDEditor
          value={editorContent}
          onChange={handleChange}
          height="100%"
          preview="live"
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
