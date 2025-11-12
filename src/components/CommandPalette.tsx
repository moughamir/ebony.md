import { useEffect, useState } from "react";
import { useVaultStore } from "@/stores/vaultStore";
import { FileText, Search } from "lucide-react";
import { invoke } from "@tauri-apps/api/core";

interface FlattenedEntry {
  name: string;
  path: string;
  displayPath: string;
  is_dir: boolean;
  lastModified?: number;
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredEntries, setFilteredEntries] = useState<FlattenedEntry[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const {
    vaultEntries,
    setSelectedEntry,
    setCurrentFilePath,
    setCurrentFileContent,
    recentFiles = [],
  } = useVaultStore();

  // Keyboard shortcut handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(!open);
        if (!open) {
          setSearch("");
          setSelectedIndex(0);
        }
      }

      if (open && e.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  // Flatten vault entries for searching
  const flattenEntries = (entries: any[], prefix = ""): FlattenedEntry[] => {
    let result: FlattenedEntry[] = [];
    entries.forEach((entry) => {
      const fullPath = prefix ? `${prefix}/${entry.name}` : entry.name;
      if (!entry.is_dir) {
        result.push({
          name: entry.name,
          path: entry.path,
          displayPath: fullPath,
          is_dir: false,
          lastModified: entry.lastModified,
        });
      }
      if (entry.children) {
        result = result.concat(flattenEntries(entry.children, fullPath));
      }
    });
    return result;
  };

  // Update filtered entries when search changes
  useEffect(() => {
    if (!open) return;

    const allFiles = flattenEntries(vaultEntries);

    if (!search) {
      // Show recent files if no search
      const recent = recentFiles
        .slice(0, 5)
        .map((path) => allFiles.find((f) => f.path === path))
        .filter(Boolean) as FlattenedEntry[];

      setFilteredEntries([...recent, ...allFiles.slice(0, 10)]);
    } else {
      // Filter by search term
      const searchLower = search.toLowerCase();
      const filtered = allFiles.filter(
        (entry) =>
          entry.displayPath.toLowerCase().includes(searchLower) ||
          entry.name.toLowerCase().includes(searchLower),
      );

      // Sort by relevance (exact matches first)
      filtered.sort((a, b) => {
        const aExact = a.name.toLowerCase() === searchLower;
        const bExact = b.name.toLowerCase() === searchLower;
        if (aExact && !bExact) return -1;
        if (!aExact && bExact) return 1;

        const aStarts = a.name.toLowerCase().startsWith(searchLower);
        const bStarts = b.name.toLowerCase().startsWith(searchLower);
        if (aStarts && !bStarts) return -1;
        if (!aStarts && bStarts) return 1;

        return 0;
      });

      setFilteredEntries(filtered.slice(0, 20));
    }
    setSelectedIndex(0);
  }, [search, open, vaultEntries, recentFiles]);

  // Handle selection
  const handleSelect = async (entry: FlattenedEntry) => {
    setSelectedEntry(entry);
    setCurrentFilePath(entry.path);

    try {
      const content: string = await invoke("read_note_content", {
        path: entry.path,
      });
      setCurrentFileContent(content);
    } catch (error) {
      console.error("Failed to read note:", error);
    }

    setOpen(false);
    setSearch("");
  };

  // Keyboard navigation
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((i) => Math.min(i + 1, filteredEntries.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredEntries[selectedIndex]) {
          handleSelect(filteredEntries[selectedIndex]);
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, selectedIndex, filteredEntries]);

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      {/* Command Palette */}
      <div className="fixed left-1/2 top-[20%] z-50 w-full max-w-2xl -translate-x-1/2">
        <div className="bg-background border rounded-lg shadow-2xl overflow-hidden">
          {/* Search Input */}
          <div className="flex items-center border-b px-4 py-3">
            <Search className="mr-3 h-5 w-5 text-muted-foreground" />
            <input
              autoFocus
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search notes..."
              className="flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
            />
            <kbd className="ml-2 px-2 py-1 text-xs bg-muted rounded">ESC</kbd>
          </div>

          {/* Results */}
          <div className="max-h-[400px] overflow-y-auto">
            {filteredEntries.length === 0 ? (
              <div className="px-4 py-8 text-center text-muted-foreground">
                No results found
              </div>
            ) : (
              <div className="py-2">
                {!search && recentFiles.length > 0 && (
                  <div className="px-4 py-1.5 text-xs font-medium text-muted-foreground">
                    Recent
                  </div>
                )}
                {filteredEntries.map((entry, index) => (
                  <button
                    key={entry.path}
                    onClick={() => handleSelect(entry)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`w-full px-4 py-2.5 flex items-center hover:bg-accent transition-colors ${
                      index === selectedIndex ? "bg-accent" : ""
                    }`}
                  >
                    <FileText className="mr-3 h-4 w-4 text-muted-foreground shrink-0" />
                    <div className="flex-1 text-left">
                      <div className="text-sm font-medium">{entry.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {entry.displayPath}
                      </div>
                    </div>
                    {index === selectedIndex && (
                      <kbd className="ml-2 px-2 py-1 text-xs bg-background rounded">
                        ↵
                      </kbd>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t px-4 py-2 flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex gap-4">
              <span>↑↓ Navigate</span>
              <span>↵ Open</span>
              <span>ESC Close</span>
            </div>
            <span>{filteredEntries.length} results</span>
          </div>
        </div>
      </div>
    </>
  );
}
