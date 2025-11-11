# 🪶 eBony.md — LLM-Driven Knowledge Workspace

**eBony.md** is an open-source, cross-platform **note-making and knowledge management app** built with **Tauri**, **React**, and **TypeScript** — designed as a lightweight, privacy-friendly alternative to Obsidian.

> ✨ Local-first. Markdown-native. LLM-powered.

eBony.md blends the simplicity of Markdown editing with the power of **local AI assistance**, **graph-based knowledge linking**, and **plugin extensibility**.

## 🚀 Features

### 🧠 Knowledge-first

- **Vault-based storage**: Keep all your notes organized in local folders.
- **Bidirectional links**: Support for `[[WikiLinks]]` and backlinks.
- **Markdown-native**: Uses `.md` files with optional frontmatter metadata.

### 💡 LLM-Driven Workflow

- (Coming soon) Context-aware note summarization and Q&A.
- Planned support for **local models** (Ollama, LM Studio, GPT4All).
- Embeddings and semantic search for intelligent note retrieval.

### 🪶 Elegant Markdown Editor

- Auto-saving Markdown editor with debounce optimization.
- Minimal interface designed for focus and flow.
- Keyboard shortcuts and command palette (planned).

### 🌿 Graph Visualization

- Interactive **graph view** powered by `react-force-graph-2d`.
- Explore relationships between ideas visually.

### 🧩 Plugin System

- Extend functionality via **Tauri plugins**.
- Example plugin scaffold included (`tauri-plugin-sample-plugin/`).

### ⚙️ Git Sync Setup

- Optional **onboarding wizard** to configure Git author and remote repo.
- Store settings locally with Tauri’s secure storage.

### 🎨 Customizable UI

- Built with **Tailwind CSS** and **Radix UI components**.
- Supports light/dark/system themes.
- Font size and family preferences via persistent settings.

## 🧰 Tech Stack

| Layer            | Technology                            |
| ---------------- | ------------------------------------- |
| Frontend         | React + TypeScript + Vite             |
| UI Library       | TailwindCSS + Radix UI + Lucide Icons |
| State Management | Zustand (persistent stores)           |
| Editor           | Custom Markdown textarea editor       |
| Backend          | Rust (Tauri)                          |
| Graph View       | react-force-graph-2d                  |
| Storage          | Local filesystem (Vaults)             |
| Build Tool       | pnpm + vite + tauri-build             |

## 🧩 Architecture Overview

```bash
📦 eBony.md/
├── src/
│   ├── components/      → UI + Core features (FileTree, GraphView, Editor)
│   ├── hooks/           → Reusable logic (debounce, note operations)
│   ├── lib/             → Markdown parsing, Tauri API layer, utilities
│   ├── stores/          → Persistent Zustand stores (vault, settings)
│   ├── App.tsx          → Main entry point
│   └── main.tsx         → App mount + Tauri integration
├── src-tauri/           → Rust backend (commands, search, graph)
├── tauri-plugin-sample-plugin/ → Example Tauri plugin
├── public/              → Icons, assets
└── package.json         → Workspace dependencies

```

## ⚙️ Installation

### Prerequisites

- **Node.js** ≥ 18
- **pnpm** ≥ 9
- **Rust** ≥ 1.70 (for Tauri)
- **Tauri CLI**
  ```bash
  cargo install tauri-cli
  ```

### Clone and Run

```bash
# Clone the repo
git clone https://github.com/<your-username>/ebony.md.git
cd ebony.md
# Install dependencies
pnpm install
# Start the app in dev mode
pnpm tauri dev
```

### Build for Production

```bash
pnpm tauri build
```

This will produce a native desktop binary for your platform.

## 🪄 Usage

1. **Create or open a vault** — a local folder containing your Markdown notes.
2. Use the **File Tree** sidebar to browse and open notes.
3. Edit your notes in the **Markdown Editor** — changes auto-save.
4. Switch to **Graph View** to visualize relationships.
5. (Optional) Configure **Git sync** from onboarding.

## 🧠 LLM Integration Roadmap

| Feature                    | Status       | Description                                               |
| -------------------------- | ------------ | --------------------------------------------------------- |
| Context-aware note Q&A     | 🧩 Planned   | Ask questions and get answers based on your vault content |
| Local embeddings           | 🔄 In design | Generate note embeddings for semantic search              |
| Ollama / LM Studio support | 🔄 Planned   | Run models locally for privacy-first AI                   |
| Supabase vector search     | 🚀 Future    | Cloud-optional sync and retrieval                         |

## 🧱 Development Notes

### Markdown Utilities

Located in `src/lib/markdown.ts`, includes:

- `parseWikiLinks()` → Extracts `[[linked notes]]`
- `parseTags()` → Extracts hashtags
- `parseFrontmatter()` → Parses YAML frontmatter

### Persistent Stores

Zustand-based stores in `/src/stores`:

- `vaultStore` → Manages open vault, notes, current file
- `settingsStore` → Persists theme, font, vault path, and plugins

## 🧩 Plugin System

You can create and integrate **custom Tauri plugins** to extend eBony.md.

Example plugin scaffold:

```bash
tauri-plugin-sample-plugin/
├── src/
│   ├── commands.rs
│   ├── desktop.rs
│   ├── mobile.rs
│   ├── lib.rs
│   ├── models.rs
│   └── error.rs
```

Each plugin can expose commands to the frontend via the `invoke` API.

## 🖼️ Screenshots

- [ ] TODO: _(Replace with your actual app screenshots)_

| Editor                                            | Graph View                                |
| ------------------------------------------------- | ----------------------------------------- |
| ![Editor Screenshot](docs/screenshots/editor.png) | ![Graph View](docs/screenshots/graph.png) |

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
To contribute:

```bash
# Fork the repo and create your branch
git checkout -b feature/amazing-feature

# Commit your changes
git commit -m '(feat) Add amazing feature'
# Push to the branch
git push origin feature/amazing-feature
```

Then open a Pull Request 🎉

## 🪪 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

## 🖤 Acknowledgments

- [Tauri](https://tauri.app/) for secure, lightweight native builds.
- [Obsidian](https://obsidian.md/) and [Logseq](https://logseq.com/) for inspiration.
- [Radix UI](https://www.radix-ui.com/), [TailwindCSS](https://tailwindcss.com/), and [Lucide Icons](https://lucide.dev/) for modern UI.
- [react-force-graph](https://github.com/vasturiano/react-force-graph) for visualization magic.

> _Built with TypeScript, Rust, and ❤️ — for hackers, thinkers, and creators._

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)
