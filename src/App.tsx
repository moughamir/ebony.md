import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import { open } from "@tauri-apps/plugin-dialog";
import { useVaultStore } from "./stores/vaultStore";
import FileTree from "./components/FileTree";
import MarkdownEditor from "./components/MarkdownEditor";
import GraphView from "./components/GraphView";
import { VaultEntry } from "./types";
import { Button } from "./components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./components/ui/resizable";

type View = "editor" | "graph";

function App() {
  const { vault, setVault, vaultEntries, setVaultEntries, setLoading } =
    useVaultStore();
  const [currentView, setCurrentView] = useState<View>("editor");

  const selectVault = async () => {
    const selected = await open({
      directory: true,
      multiple: false,
      title: "Select a vault directory",
    });

    if (selected && typeof selected === "string") {
      setLoading(true);
      try {
        const entries: VaultEntry[] = await invoke("open_vault", {
          path: selected,
        });
        setVault({ path: selected, name: selected.split("/").pop() || "" });
        setVaultEntries(entries);
      } catch (error) {
        console.error("Failed to open vault:", error);
        setVault(null);
        setVaultEntries([]);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    // Optionally, try to open a default vault or the last opened one
    // For now, we'll just prompt the user to select one.
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col">
      {!vault ? (
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-2xl font-bold mb-4">Welcome to Ebony</h1>
          <p className="mb-4">Please select a vault to get started.</p>
          <Button onClick={selectVault}>Open Vault</Button>
        </div>
      ) : (
        <>
          <div className="p-2 border-b">
            <Button
              variant={currentView === "editor" ? "secondary" : "ghost"}
              onClick={() => setCurrentView("editor")}
            >
              Editor
            </Button>
            <Button
              variant={currentView === "graph" ? "secondary" : "ghost"}
              onClick={() => setCurrentView("graph")}
            >
              Graph
            </Button>
          </div>
          <ResizablePanelGroup direction="horizontal" className="flex-grow">
            <ResizablePanel defaultSize={20} minSize={15}>
              <div className="h-full p-2 border-r">
                <h2 className="text-lg font-semibold mb-2">
                  Vault: {vault.name}
                </h2>
                <FileTree entries={vaultEntries} />
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={80} minSize={30}>
              {currentView === "editor" ? <MarkdownEditor /> : <GraphView />}
            </ResizablePanel>
          </ResizablePanelGroup>
        </>
      )}
    </div>
  );
}

export default App;
