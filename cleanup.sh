#!/bin/bash

# eBony Cleanup Script
# ====================
# Cleans up stuck processes and frees up ports for development

set -e

echo "🧹 eBony Cleanup Script"
echo "======================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to kill process on port
kill_port() {
    local port=$1
    local pid=$(lsof -ti:$port 2>/dev/null)

    if [ ! -z "$pid" ]; then
        echo -e "${YELLOW}Found process $pid on port $port${NC}"
        kill -9 $pid 2>/dev/null || true
        echo -e "${GREEN}✓ Killed process on port $port${NC}"
    else
        echo -e "${GREEN}✓ Port $port is free${NC}"
    fi
}

# Function to kill processes by name pattern
kill_by_name() {
    local pattern=$1
    local pids=$(pgrep -f "$pattern" 2>/dev/null || true)

    if [ ! -z "$pids" ]; then
        echo -e "${YELLOW}Found processes matching '$pattern':${NC}"
        echo "$pids"
        echo "$pids" | xargs kill -9 2>/dev/null || true
        echo -e "${GREEN}✓ Killed processes matching '$pattern'${NC}"
    fi
}

echo "📍 Cleaning up development ports..."
echo "-----------------------------------"

# Clean common development ports
kill_port 3000
kill_port 3001
kill_port 5173  # Vite default
kill_port 5174  # Vite fallback
kill_port 1420  # Tauri default
kill_port 1430  # Tauri fallback

echo ""
echo "🔍 Cleaning up stuck processes..."
echo "---------------------------------"

# Kill stuck Vite processes
kill_by_name "vite"

# Kill stuck Tauri processes
kill_by_name "tauri"

# Kill stuck ebony processes
kill_by_name "ebony"

# Kill stuck cargo processes for this project
if [ -d "src-tauri" ]; then
    kill_by_name "cargo.*run.*src-tauri"
fi

echo ""
echo "🗑️  Cleaning temporary files..."
echo "------------------------------"

# Clean Vite cache
if [ -d "node_modules/.vite" ]; then
    rm -rf node_modules/.vite
    echo -e "${GREEN}✓ Cleaned Vite cache${NC}"
fi

# Clean Rust target debug artifacts (optional, uncomment if needed)
# if [ -d "src-tauri/target/debug" ]; then
#     echo -e "${YELLOW}Cleaning Rust debug artifacts...${NC}"
#     cd src-tauri && cargo clean && cd ..
#     echo -e "${GREEN}✓ Cleaned Rust artifacts${NC}"
# fi

# Clean temporary lock files
if [ -f ".taurignore" ]; then
    rm -f *.lock 2>/dev/null || true
fi

echo ""
echo "🔧 Checking system status..."
echo "----------------------------"

# Check if ports are now free
for port in 3000 3001 5173 1420; do
    if lsof -Pi :$port -sTCP:LISTEN -t >/dev/null 2>&1; then
        echo -e "${RED}⚠ Port $port is still in use${NC}"
    else
        echo -e "${GREEN}✓ Port $port is available${NC}"
    fi
done

echo ""
echo "💾 Memory status:"
echo "-----------------"
free -h | grep -E '^Mem|^Swap' || true

echo ""
echo "🎯 Cleanup complete!"
echo ""
echo "You can now run:"
echo -e "${GREEN}  pnpm tauri dev${NC}"
echo "or"
echo -e "${GREEN}  ./start-ebony.sh${NC}"
echo ""
echo "If you still have issues, try:"
echo "  1. Close all terminal windows"
echo "  2. Run: pkill -f node"
echo "  3. Run: pkill -f cargo"
echo "  4. Restart your terminal"
echo ""
