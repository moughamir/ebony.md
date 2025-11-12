# 🚀 eBony Quick Start Guide

**Get your Cognitive Internet documentation hub running in 5 minutes!**

## Prerequisites

- **Node.js** 18+ and **pnpm** (install via `npm i -g pnpm`)
- **Rust** (for Tauri backend) - [Install from rustup.rs](https://rustup.rs/)
- **Git** (for version control features)
- **macOS/Linux/Windows** (Tauri is cross-platform)

## 1️⃣ Install & Run (2 minutes)

```bash
# Clone the repository (if needed)
cd ~/Documents/Vaults/KonTextual/ebony

# Install dependencies
pnpm install

# Start the app
pnpm tauri dev

# OR use the convenience script:
./start-ebony.sh
```

The app will open automatically. First launch takes ~2 minutes to compile.

## 2️⃣ Open Your Vault (30 seconds)

1. Click **"Open Vault"** button
2. Select or create a folder for your notes
3. Recommended: Use `~/Documents/CognitiveInternetVault`

The start script creates an example vault with sample notes!

## 3️⃣ Essential Keyboard Shortcuts

| Shortcut | Action | Use Case |
|----------|--------|----------|
| **⌘/Ctrl + K** | Command Palette | Quick file search & navigation |
| **⌘/Ctrl + S** | Save Note | Save current changes |
| **⌘/Ctrl + P** | Quick Switch | Jump between recent notes |
| **ESC** | Close dialogs | Exit search/modals |
| **⌘/Ctrl + /** | Toggle Preview | Switch edit/preview mode |

## 4️⃣ Core Features

### 📝 Markdown Editor
- **Live Preview**: See formatted output as you type
- **Syntax Highlighting**: Code blocks with language support
- **WikiLinks**: Use `[[Note Name]]` to link between notes
- **Auto-save**: Changes saved automatically

### 🌳 File Tree
- **Drag & Drop**: Reorganize your notes
- **Quick Actions**: Right-click for rename/delete
- **Search**: Filter files by name

### 🔗 Graph View
- **Visual Connections**: See how notes link together
- **Interactive**: Click nodes to navigate
- **Zoom/Pan**: Explore large knowledge graphs

### 🔍 Command Palette (⌘K)
- **Fuzzy Search**: Find files by partial name
- **Recent Files**: Quick access to recent work
- **Smart Ranking**: Most relevant results first

### 🔄 Git Integration
- **Auto-commit**: Track all changes
- **Push/Pull**: Sync with GitHub/GitLab
- **History**: View version history

## 5️⃣ Cognitive Internet Vault Structure

```
CognitiveInternetVault/
├── Architecture/          # System design docs
│   ├── Overview.md       # High-level architecture
│   ├── Hardware.md       # Pi 5 + Hailo setup
│   └── Software.md       # Stack details
├── Protocols/            # Network protocols
│   ├── P2P.md           # libp2p mesh network
│   ├── Consensus.md     # Byzantine fault tolerance
│   └── Federation.md    # Distributed learning
├── Development/          # Implementation
│   ├── Setup.md         # Node setup guide
│   ├── API.md          # REST/gRPC interfaces
│   └── Testing.md      # Test strategies
└── Research/            # Papers & references
    ├── Papers.md       # Academic references
    ├── Projects.md     # Similar initiatives
    └── Ideas.md        # Brainstorming
```

## 6️⃣ Example Workflow

### Creating a New Note

1. **⌘K** → Type note name → **Enter**
2. OR: Right-click folder → "New Note"
3. Start with YAML frontmatter:

```markdown
---
title: Distributed Consensus
tags: [protocol, blockchain, consensus]
date: 2024-12-29
---

# Distributed Consensus

Core protocol for node agreement...
```

### Linking Notes

```markdown
The [[Architecture/Overview]] describes our use of
[[Protocols/P2P|peer-to-peer networking]] for node discovery.

See also:
- [[Hardware Requirements]]
- [[Software Stack]]
- [[Deployment Guide]]
```

### Using Tags

```markdown
#cognitive-internet #raspberry-pi #distributed-ai

Topics: #federation #privacy #sovereignty
```

## 7️⃣ Pro Tips

### 🎯 Quick Navigation
- **Double-click** sidebar to collapse/expand
- **Middle-click** links to open in background
- **⌘+Click** for multiple file selection

### 🔧 Customization
- Edit `tailwind.config.ts` for theme colors
- Modify `src/components/MarkdownEditor.tsx` for editor settings
- Add plugins in `src-tauri/` for backend features

### 📊 Graph View Tips
- **Shift+Drag**: Box select multiple nodes
- **Scroll**: Zoom in/out
- **Double-click**: Center on node
- **Right-click**: Node context menu

### 🔐 Security
- All data stays local (no cloud sync)
- Encrypt sensitive vaults with FileVault/LUKS
- Use Git SSH keys for secure sync

## 8️⃣ Troubleshooting

| Issue | Solution |
|-------|----------|
| **App won't start** | Check Rust installation: `rustc --version` |
| **Can't open vault** | Ensure folder has write permissions |
| **Git sync fails** | Configure Git: `git config --global user.name "Your Name"` |
| **Slow performance** | Increase Tauri memory limit in `tauri.conf.json` |
| **Missing shortcuts** | Restart app or check keyboard settings |

## 9️⃣ Next Steps

1. **Create Your Vault Structure**
   ```bash
   mkdir -p ~/CognitiveInternet/{Nodes,Protocols,Research}
   ```

2. **Import Existing Notes**
   - Copy `.md` files into vault
   - eBony auto-indexes on startup

3. **Set Up Git Sync**
   ```bash
   cd ~/CognitiveInternet
   git init
   git remote add origin git@github.com:you/cognitive-internet.git
   ```

4. **Install Ollama** (for LLM features)
   ```bash
   curl -fsSL https://ollama.ai/install.sh | sh
   ollama pull llama3.2
   ```

5. **Join the Network**
   - Document your node setup
   - Share learnings with community
   - Contribute to protocol design

## 🚨 Getting Help

- **Issues**: Check `~/Library/Logs/ebony/` (macOS) or `~/.config/ebony/logs/` (Linux)
- **Community**: Share your vault structure for feedback
- **Updates**: `git pull && pnpm install && pnpm tauri dev`

## 📚 Resources

- [Tauri Docs](https://tauri.app/v2/learn/)
- [Obsidian Markdown Guide](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax)
- [Cognitive Internet Spec](https://github.com/cognitive-internet/spec)

---

**Ready to document the future of decentralized AI?** 🧠🌐

Start with `./start-ebony.sh` and begin building your Cognitive Internet knowledge base!