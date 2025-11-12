#!/bin/bash

# eBony Quick Start Script
# ========================
# Run this to get your app up and running quickly

set -e  # Exit on error

echo "🚀 Starting eBony - Your Cognitive Internet Documentation Hub"
echo "============================================================"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Not in the ebony directory!"
    echo "Please run this script from the ebony folder"
    exit 1
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    pnpm install
else
    echo "✅ Dependencies already installed"
fi

# Check if Rust/Cargo is installed
if ! command -v cargo &> /dev/null; then
    echo "⚠️  Warning: Rust not installed. Tauri backend may not work."
    echo "Install from: https://rustup.rs/"
fi

# Build Tauri dependencies if needed
if [ ! -f "src-tauri/target/debug/ebony" ] && [ ! -f "src-tauri/target/release/ebony" ]; then
    echo "🔨 Building Tauri backend (first run, this may take a few minutes)..."
fi

# Show keyboard shortcuts
echo ""
echo "📌 Keyboard Shortcuts:"
echo "  • Cmd/Ctrl + K : Open command palette (quick file search)"
echo "  • Cmd/Ctrl + S : Save current note"
echo "  • Cmd/Ctrl + P : Quick switch between notes"
echo ""

# Create example vault if it doesn't exist
EXAMPLE_VAULT="$HOME/Documents/CognitiveInternetVault"
if [ ! -d "$EXAMPLE_VAULT" ]; then
    echo "📁 Creating example Cognitive Internet vault at: $EXAMPLE_VAULT"
    mkdir -p "$EXAMPLE_VAULT"/{Architecture,Protocols,Development,Research}

    cat > "$EXAMPLE_VAULT/README.md" << 'EOF'
# Cognitive Internet Vault

Welcome to your Cognitive Internet documentation vault!

## Quick Start

1. Use **Cmd/Ctrl + K** to quickly search and open notes
2. Click on files in the sidebar to open them
3. Use the Graph view to see connections between notes

## Vault Structure

- **Architecture/** - System design and infrastructure
- **Protocols/** - Network and communication protocols
- **Development/** - Implementation notes and code
- **Research/** - Papers, references, and explorations

## Links

Create links between notes using `[[Note Name]]` syntax.

Example: See [[Architecture/Overview]] for system design.
EOF

    cat > "$EXAMPLE_VAULT/Architecture/Overview.md" << 'EOF'
# Cognitive Internet - Architecture Overview

## Vision
A decentralized network of AI-capable nodes that can reason, learn, and evolve together.

## Core Components

### 1. Hardware Layer
- **Raspberry Pi 5** (8GB RAM)
- **Hailo-8 AI Accelerator** (26 TOPS)
- **NVMe Storage** (1TB minimum)
- **LoRa/WiFi/Ethernet** connectivity

### 2. Software Stack
- **OS**: Libreboot + PREEMPT_RT Linux
- **Runtime**: Ollama for LLM inference
- **Networking**: libp2p for P2P mesh
- **Storage**: IPFS for distributed content
- **Consensus**: Byzantine Fault Tolerant protocol

### 3. Governance
- **DAO Structure** for decision making
- **Reputation System** based on contributions
- **Token Economics** for resource allocation

## Key Features

- [[Decentralized Learning]] - Federated model training
- [[Trust Verification]] - Cryptographic proof of computation
- [[Self Evolution]] - Autonomous system upgrades
- [[Privacy Preserving]] - Local-first, encrypted communications

## Implementation Phases

1. **Phase 1**: Single node setup with Ollama
2. **Phase 2**: 3-node cluster with P2P networking
3. **Phase 3**: Reputation system and basic DAO
4. **Phase 4**: Federated learning implementation
5. **Phase 5**: Full autonomous evolution

## Next Steps

- [ ] Set up first Raspberry Pi node
- [ ] Install Ollama and test Llama 3.2
- [ ] Implement basic P2P discovery
- [ ] Create reputation tracking system
EOF

    echo "✅ Example vault created with sample notes!"
fi

# Start the app
echo ""
echo "🎯 Starting eBony in development mode..."
echo "   The app will open automatically in your browser"
echo "   First launch may take a minute to compile..."
echo ""
echo "💡 TIP: Open the example vault at: $EXAMPLE_VAULT"
echo ""
echo "Press Ctrl+C to stop the server"
echo "============================================================"
echo ""

# Run the development server
pnpm tauri dev
