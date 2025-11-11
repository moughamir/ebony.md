This file is a merged representation of the entire codebase, combined into a single document by Repomix.
The content has been processed where comments have been removed, empty lines have been removed, content has been compressed (code blocks are separated by ⋮---- delimiter).

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Code comments have been removed from supported file types
- Empty lines have been removed from all files
- Content has been compressed - code blocks are separated by ⋮---- delimiter
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
public/
  tauri.svg
  vite.svg
src/
  assets/
    react.svg
  components/
    ui/
      button.tsx
      context-menu.tsx
      input.tsx
      label.tsx
      resizable.tsx
      scroll-area.tsx
      textarea.tsx
    FileTree.tsx
    GraphView.tsx
    MarkdownEditor.tsx
    Onboarding.tsx
  hooks/
    useDebounce.ts
    useNoteOperations.ts
  lib/
    markdown.ts
    tauri.ts
    utils.ts
  stores/
    settingsStore.ts
    vaultStore.ts
  types/
    index.ts
  App.css
  App.tsx
  index.css
  main.tsx
  vite-env.d.ts
src-tauri/
  capabilities/
    default.json
  icons/
    128x128.png
    128x128@2x.png
    32x32.png
    icon.icns
    icon.ico
    icon.png
    Square107x107Logo.png
    Square142x142Logo.png
    Square150x150Logo.png
    Square284x284Logo.png
    Square30x30Logo.png
    Square310x310Logo.png
    Square44x44Logo.png
    Square71x71Logo.png
    Square89x89Logo.png
    StoreLogo.png
  src/
    commands.rs
    graph.rs
    lib.rs
    main.rs
    plugins.rs
    search.rs
    vault.rs
  .gitignore
  build.rs
  Cargo.toml
  tauri.conf.json
tauri-plugin-sample-plugin/
  examples/
    tauri-app/
      .vscode/
        extensions.json
      public/
        svelte.svg
        tauri.svg
        vite.svg
      src/
        lib/
          Greet.svelte
        App.svelte
        main.js
        style.css
        vite-env.d.ts
      src-tauri/
        capabilities/
          default.json
        icons/
          128x128.png
          128x128@2x.png
          32x32.png
          icon.icns
          icon.ico
          icon.png
        src/
          lib.rs
          main.rs
        .gitignore
        build.rs
        Cargo.toml
        tauri.conf.json
      .gitignore
      index.html
      jsconfig.json
      package.json
      README.md
      vite.config.js
  guest-js/
    index.ts
  permissions/
    default.toml
  src/
    commands.rs
    desktop.rs
    error.rs
    lib.rs
    mobile.rs
    models.rs
  .gitignore
  build.rs
  Cargo.toml
  package.json
  README.md
  rollup.config.js
  tsconfig.json
.gitignore
.repomixignore
components.json
index.html
LICENSE
package.json
pnpm-workspace.yaml
README.md
repomix.config.json
resources.md
tailwind.config.ts
tsconfig.json
tsconfig.node.json
vite.config.ts
```

# Files

## File: public/tauri.svg
````
<svg width="206" height="231" viewBox="0 0 206 231" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M143.143 84C143.143 96.1503 133.293 106 121.143 106C108.992 106 99.1426 96.1503 99.1426 84C99.1426 71.8497 108.992 62 121.143 62C133.293 62 143.143 71.8497 143.143 84Z" fill="#FFC131"/>
<ellipse cx="84.1426" cy="147" rx="22" ry="22" transform="rotate(180 84.1426 147)" fill="#24C8DB"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M166.738 154.548C157.86 160.286 148.023 164.269 137.757 166.341C139.858 160.282 141 153.774 141 147C141 144.543 140.85 142.121 140.558 139.743C144.975 138.204 149.215 136.139 153.183 133.575C162.73 127.404 170.292 118.608 174.961 108.244C179.63 97.8797 181.207 86.3876 179.502 75.1487C177.798 63.9098 172.884 53.4021 165.352 44.8883C157.82 36.3744 147.99 30.2165 137.042 27.1546C126.095 24.0926 114.496 24.2568 103.64 27.6274C92.7839 30.998 83.1319 37.4317 75.8437 46.1553C74.9102 47.2727 74.0206 48.4216 73.176 49.5993C61.9292 50.8488 51.0363 54.0318 40.9629 58.9556C44.2417 48.4586 49.5653 38.6591 56.679 30.1442C67.0505 17.7298 80.7861 8.57426 96.2354 3.77762C111.685 -1.01901 128.19 -1.25267 143.769 3.10474C159.348 7.46215 173.337 16.2252 184.056 28.3411C194.775 40.457 201.767 55.4101 204.193 71.404C206.619 87.3978 204.374 103.752 197.73 118.501C191.086 133.25 180.324 145.767 166.738 154.548ZM41.9631 74.275L62.5557 76.8042C63.0459 72.813 63.9401 68.9018 65.2138 65.1274C57.0465 67.0016 49.2088 70.087 41.9631 74.275Z" fill="#FFC131"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M38.4045 76.4519C47.3493 70.6709 57.2677 66.6712 67.6171 64.6132C65.2774 70.9669 64 77.8343 64 85.0001C64 87.1434 64.1143 89.26 64.3371 91.3442C60.0093 92.8732 55.8533 94.9092 51.9599 97.4256C42.4128 103.596 34.8505 112.392 30.1816 122.756C25.5126 133.12 23.9357 144.612 25.6403 155.851C27.3449 167.09 32.2584 177.598 39.7906 186.112C47.3227 194.626 57.153 200.784 68.1003 203.846C79.0476 206.907 90.6462 206.743 101.502 203.373C112.359 200.002 122.011 193.568 129.299 184.845C130.237 183.722 131.131 182.567 131.979 181.383C143.235 180.114 154.132 176.91 164.205 171.962C160.929 182.49 155.596 192.319 148.464 200.856C138.092 213.27 124.357 222.426 108.907 227.222C93.458 232.019 76.9524 232.253 61.3736 227.895C45.7948 223.538 31.8055 214.775 21.0867 202.659C10.3679 190.543 3.37557 175.59 0.949823 159.596C-1.47592 143.602 0.768139 127.248 7.41237 112.499C14.0566 97.7497 24.8183 85.2327 38.4045 76.4519ZM163.062 156.711L163.062 156.711C162.954 156.773 162.846 156.835 162.738 156.897C162.846 156.835 162.954 156.773 163.062 156.711Z" fill="#24C8DB"/>
</svg>
````

## File: public/vite.svg
````
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="31.88" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 257"><defs><linearGradient id="IconifyId1813088fe1fbc01fb466" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0%" stop-color="#41D1FF"></stop><stop offset="100%" stop-color="#BD34FE"></stop></linearGradient><linearGradient id="IconifyId1813088fe1fbc01fb467" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%"><stop offset="0%" stop-color="#FFEA83"></stop><stop offset="8.333%" stop-color="#FFDD35"></stop><stop offset="100%" stop-color="#FFA800"></stop></linearGradient></defs><path fill="url(#IconifyId1813088fe1fbc01fb466)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"></path><path fill="url(#IconifyId1813088fe1fbc01fb467)" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"></path></svg>
````

## File: src/assets/react.svg
````
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>
````

## File: src/components/ui/button.tsx
````typescript
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
````

## File: src/components/ui/context-menu.tsx
````typescript
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"
import { cn } from "@/lib/utils"
function ContextMenu({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Root>)
function ContextMenuTrigger({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Trigger>)
function ContextMenuGroup({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Group>)
function ContextMenuPortal({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Portal>)
function ContextMenuSub({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Sub>)
function ContextMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioGroup>)
function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubTrigger> & {
  inset?: boolean
})
⋮----
className=
⋮----
function ContextMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>)
function ContextMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioItem>)
````

## File: src/components/ui/input.tsx
````typescript
import { cn } from "@/lib/utils"
function Input(
⋮----
className=
````

## File: src/components/ui/label.tsx
````typescript
import { cn } from "@/lib/utils"
⋮----
className=
````

## File: src/components/ui/resizable.tsx
````typescript
import { GripVerticalIcon } from "lucide-react"
⋮----
import { cn } from "@/lib/utils"
⋮----
function ResizablePanel({
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.Panel>)
````

## File: src/components/ui/scroll-area.tsx
````typescript
import { cn } from "@/lib/utils"
function ScrollArea({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root>)
function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>)
⋮----
className=
````

## File: src/components/ui/textarea.tsx
````typescript
import { cn } from "@/lib/utils"
⋮----
className=
````

## File: src/components/FileTree.tsx
````typescript
import React from 'react';
import { VaultEntry } from '@/types';
import { useVaultStore } from '@/stores/vaultStore';
import { invoke } from '@tauri-apps/api/core';
import { ScrollArea } from './ui/scroll-area';
import { cn } from '@/lib/utils';
interface FileTreeProps {
  entries: VaultEntry[];
}
⋮----
const handleEntryClick = async (entry: VaultEntry) =>
⋮----
className=
````

## File: src/components/GraphView.tsx
````typescript
import React, { useEffect, useMemo } from 'react';
import { useVaultStore } from '@/stores/vaultStore';
import { invoke } from '@tauri-apps/api/core';
import ForceGraph2D from 'react-force-graph-2d';
import { NoteGraph } from '@/types';
````

## File: src/components/MarkdownEditor.tsx
````typescript
import React, { useEffect, useState, useCallback } from "react";
import { useVaultStore } from "@/stores/vaultStore";
import { invoke } from "@tauri-apps/api/core";
import { useDebounce } from "@/hooks/useDebounce";
import MDEditor from "@uiw/react-md-editor";
⋮----
const handleChange = (value: string | undefined) =>
````

## File: src/components/Onboarding.tsx
````typescript
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Store } from '@tauri-apps/plugin-store';
⋮----
interface OnboardingProps {
  onComplete: () => void;
}
const Onboarding: React.FC<OnboardingProps> = (
⋮----
const handleSave = async () =>
⋮----
onChange=
````

## File: src/hooks/useDebounce.ts
````typescript
import { useRef, useEffect, useCallback } from 'react';
export function useDebounce<T extends (...args: any[]) => any>(callback: T, delay: number): T
````

## File: src/hooks/useNoteOperations.ts
````typescript
import { useState } from "react";
import { TauriAPI } from "@/lib/tauri";
import { useVaultStore } from "@/stores/vaultStore";
import { Note } from "@/types";
export function useNoteOperations()
⋮----
const createNote = async (title: string, path: string) =>
const saveNote = async (id: string, content: string, path: string) =>
const loadNote = async (path: string) =>
const delNote = async (path: string) =>
````

## File: src/lib/markdown.ts
````typescript
export class MarkdownParser
⋮----
static parseWikiLinks(content: string): string[]
static parseTags(content: string): string[]
static parseFrontmatter(content: string): Record<string, any> | null
static getTitle(content: string): string
````

## File: src/lib/tauri.ts
````typescript
import { invoke } from "@tauri-apps/api/core";
import { readDir, readTextFile, writeTextFile } from "@tauri-apps/plugin-fs";
export class TauriAPI
⋮----
static async openVault(path: string): Promise<string[]>
static async readNote(path: string): Promise<string>
static async writeNote(path: string, content: string): Promise<void>
static async listFiles(path: string): Promise<any[]>
static async deleteNote(path: string): Promise<void>
static async searchNotes(query: string): Promise<any[]>
static async loadPlugin(pluginPath: string): Promise<void>
static async listPlugins(): Promise<Plugin[]>
static async loadTheme(themePath: string): Promise<void>
static async listThemes(): Promise<Theme[]>
````

## File: src/lib/utils.ts
````typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
export function cn(...inputs: ClassValue[])
````

## File: src/stores/settingsStore.ts
````typescript
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
````

## File: src/App.css
````css
.logo.vite:hover {
.logo.react:hover {
:root {
.container {
.logo {
.logo.tauri:hover {
.row {
a {
a:hover {
h1 {
input,
button {
button:hover {
button:active {
⋮----
#greet-input {
````

## File: src/main.tsx
````typescript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
````

## File: src/vite-env.d.ts
````typescript

````

## File: src-tauri/capabilities/default.json
````json
{
  "$schema": "../gen/schemas/desktop-schema.json",
  "identifier": "default",
  "description": "Capability for the main window",
  "windows": [
    "main"
  ],
  "permissions": [
    "core:default",
    "opener:default",
    "fs:default",
    "os:default",
    "shell:default",
    "sql:default",
    "store:default"
  ]
}
````

## File: src-tauri/src/graph.rs
````rust
use std::collections::HashSet;
use std::fs;
⋮----
pub struct GraphNode {
⋮----
pub struct GraphEdge {
⋮----
pub struct NoteGraph {
⋮----
pub struct GraphManager;
impl GraphManager {
pub fn generate_graph(vault_path: &Path) -> Result<NoteGraph, String> {
let all_entries = VaultManager::scan_vault(vault_path).map_err(|e| e.to_string())?;
⋮----
let note_path_str = note.path.to_string_lossy().to_string();
note_paths.insert(note_path_str.clone());
nodes.push(GraphNode {
id: note_path_str.clone(),
label: note.name.clone().replace(".md", ""),
path: note.path.clone(),
⋮----
let content = fs::read_to_string(&note.path).map_err(|e| e.to_string())?;
let from_node_id = note.path.to_string_lossy().to_string();
for (i, _) in content.match_indices("[[") {
if let Some(end) = content[i + 2..].find("]]") {
⋮----
let to_note_path = vault_path.join(format!("{}.md", link_name));
let to_note_id = to_note_path.to_string_lossy().to_string();
if note_paths.contains(&to_note_id) {
edges.push(GraphEdge {
from: from_node_id.clone(),
⋮----
Ok(NoteGraph { nodes, edges })
⋮----
fn collect_notes<'a>(entries: &'a [VaultEntry], notes: &mut Vec<&'a VaultEntry>) {
⋮----
notes.push(entry);
````

## File: src-tauri/src/lib.rs
````rust
fn greet(name: &str) -> String {
format!("Hello, {}! You've been greeted from Rust!", name)
⋮----
pub fn run() {
⋮----
.plugin(tauri_plugin_opener::init())
.invoke_handler(tauri::generate_handler![greet])
.run(tauri::generate_context!())
.expect("error while running tauri application");
````

## File: src-tauri/src/search.rs
````rust
use crate::commands::SearchResult;
use std::fs;
⋮----
pub struct SearchEngine {
⋮----
impl SearchEngine {
pub fn new(vault_path: PathBuf) -> Self {
⋮----
pub fn search(&self, query: &str) -> Result<Vec<SearchResult>, std::io::Error> {
⋮----
let query_lower = query.to_lowercase();
self.search_directory(&self.vault_path, &query_lower, &mut results)?;
results.sort_by(|a, b| b.score.partial_cmp(&a.score).unwrap());
Ok(results)
⋮----
fn search_directory(
⋮----
if path.is_dir() {
⋮----
let entry_path = entry.path();
if let Some(name) = entry_path.file_name() {
if name.to_string_lossy().starts_with('.') {
⋮----
if entry_path.is_dir() {
self.search_directory(&entry_path, query, results)?;
} else if self.is_markdown_file(&entry_path) {
⋮----
if let Some(result) = self.match_content(&entry_path, &content, query) {
results.push(result);
⋮----
Ok(())
⋮----
fn match_content(&self, path: &Path, content: &str, query: &str) -> Option<SearchResult> {
let content_lower = content.to_lowercase();
if !content_lower.contains(query) {
⋮----
let matches = content_lower.matches(query).count();
⋮----
Some(SearchResult {
path: path.to_string_lossy().to_string(),
⋮----
fn extract_title(content: &str) -> String {
⋮----
.lines()
.next()
.and_then(|line| {
if line.starts_with('#') {
Some(line.trim_start_matches('#').trim().to_string())
⋮----
.unwrap_or_else(|| "Untitled".to_string())
⋮----
fn extract_excerpt(content: &str, query: &str) -> String {
⋮----
for line in content.lines() {
if line.to_lowercase().contains(&query_lower) {
let trimmed = if line.len() > 150 {
format!("...{}...", &line[..150])
⋮----
line.to_string()
⋮----
content.lines().next().unwrap_or("").to_string()
⋮----
fn is_markdown_file(&self, path: &Path) -> bool {
path.extension()
.and_then(|s| s.to_str())
.map(|ext| ext == "md" || ext == "markdown")
.unwrap_or(false)
````

## File: src-tauri/.gitignore
````
# Generated by Cargo
# will have compiled files and executables
/target/

# Generated by Tauri
# will have schema files for capabilities auto-completion
/gen/schemas
````

## File: src-tauri/build.rs
````rust
fn main() {
````

## File: tauri-plugin-sample-plugin/examples/tauri-app/.vscode/extensions.json
````json
{
  "recommendations": [
    "svelte.svelte-vscode",
    "tauri-apps.tauri-vscode",
    "rust-lang.rust-analyzer"
  ]
}
````

## File: tauri-plugin-sample-plugin/examples/tauri-app/public/svelte.svg
````
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="26.6" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 308"><path fill="#FF3E00" d="M239.682 40.707C211.113-.182 154.69-12.301 113.895 13.69L42.247 59.356a82.198 82.198 0 0 0-37.135 55.056a86.566 86.566 0 0 0 8.536 55.576a82.425 82.425 0 0 0-12.296 30.719a87.596 87.596 0 0 0 14.964 66.244c28.574 40.893 84.997 53.007 125.787 27.016l71.648-45.664a82.182 82.182 0 0 0 37.135-55.057a86.601 86.601 0 0 0-8.53-55.577a82.409 82.409 0 0 0 12.29-30.718a87.573 87.573 0 0 0-14.963-66.244"></path><path fill="#FFF" d="M106.889 270.841c-23.102 6.007-47.497-3.036-61.103-22.648a52.685 52.685 0 0 1-9.003-39.85a49.978 49.978 0 0 1 1.713-6.693l1.35-4.115l3.671 2.697a92.447 92.447 0 0 0 28.036 14.007l2.663.808l-.245 2.659a16.067 16.067 0 0 0 2.89 10.656a17.143 17.143 0 0 0 18.397 6.828a15.786 15.786 0 0 0 4.403-1.935l71.67-45.672a14.922 14.922 0 0 0 6.734-9.977a15.923 15.923 0 0 0-2.713-12.011a17.156 17.156 0 0 0-18.404-6.832a15.78 15.78 0 0 0-4.396 1.933l-27.35 17.434a52.298 52.298 0 0 1-14.553 6.391c-23.101 6.007-47.497-3.036-61.101-22.649a52.681 52.681 0 0 1-9.004-39.849a49.428 49.428 0 0 1 22.34-33.114l71.664-45.677a52.218 52.218 0 0 1 14.563-6.398c23.101-6.007 47.497 3.036 61.101 22.648a52.685 52.685 0 0 1 9.004 39.85a50.559 50.559 0 0 1-1.713 6.692l-1.35 4.116l-3.67-2.693a92.373 92.373 0 0 0-28.037-14.013l-2.664-.809l.246-2.658a16.099 16.099 0 0 0-2.89-10.656a17.143 17.143 0 0 0-18.398-6.828a15.786 15.786 0 0 0-4.402 1.935l-71.67 45.674a14.898 14.898 0 0 0-6.73 9.975a15.9 15.9 0 0 0 2.709 12.012a17.156 17.156 0 0 0 18.404 6.832a15.841 15.841 0 0 0 4.402-1.935l27.345-17.427a52.147 52.147 0 0 1 14.552-6.397c23.101-6.006 47.497 3.037 61.102 22.65a52.681 52.681 0 0 1 9.003 39.848a49.453 49.453 0 0 1-22.34 33.12l-71.664 45.673a52.218 52.218 0 0 1-14.563 6.398"></path></svg>
````

## File: tauri-plugin-sample-plugin/examples/tauri-app/public/tauri.svg
````
<svg width="206" height="231" viewBox="0 0 206 231" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M143.143 84C143.143 96.1503 133.293 106 121.143 106C108.992 106 99.1426 96.1503 99.1426 84C99.1426 71.8497 108.992 62 121.143 62C133.293 62 143.143 71.8497 143.143 84Z" fill="#FFC131"/>
<ellipse cx="84.1426" cy="147" rx="22" ry="22" transform="rotate(180 84.1426 147)" fill="#24C8DB"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M166.738 154.548C157.86 160.286 148.023 164.269 137.757 166.341C139.858 160.282 141 153.774 141 147C141 144.543 140.85 142.121 140.558 139.743C144.975 138.204 149.215 136.139 153.183 133.575C162.73 127.404 170.292 118.608 174.961 108.244C179.63 97.8797 181.207 86.3876 179.502 75.1487C177.798 63.9098 172.884 53.4021 165.352 44.8883C157.82 36.3744 147.99 30.2165 137.042 27.1546C126.095 24.0926 114.496 24.2568 103.64 27.6274C92.7839 30.998 83.1319 37.4317 75.8437 46.1553C74.9102 47.2727 74.0206 48.4216 73.176 49.5993C61.9292 50.8488 51.0363 54.0318 40.9629 58.9556C44.2417 48.4586 49.5653 38.6591 56.679 30.1442C67.0505 17.7298 80.7861 8.57426 96.2354 3.77762C111.685 -1.01901 128.19 -1.25267 143.769 3.10474C159.348 7.46215 173.337 16.2252 184.056 28.3411C194.775 40.457 201.767 55.4101 204.193 71.404C206.619 87.3978 204.374 103.752 197.73 118.501C191.086 133.25 180.324 145.767 166.738 154.548ZM41.9631 74.275L62.5557 76.8042C63.0459 72.813 63.9401 68.9018 65.2138 65.1274C57.0465 67.0016 49.2088 70.087 41.9631 74.275Z" fill="#FFC131"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M38.4045 76.4519C47.3493 70.6709 57.2677 66.6712 67.6171 64.6132C65.2774 70.9669 64 77.8343 64 85.0001C64 87.1434 64.1143 89.26 64.3371 91.3442C60.0093 92.8732 55.8533 94.9092 51.9599 97.4256C42.4128 103.596 34.8505 112.392 30.1816 122.756C25.5126 133.12 23.9357 144.612 25.6403 155.851C27.3449 167.09 32.2584 177.598 39.7906 186.112C47.3227 194.626 57.153 200.784 68.1003 203.846C79.0476 206.907 90.6462 206.743 101.502 203.373C112.359 200.002 122.011 193.568 129.299 184.845C130.237 183.722 131.131 182.567 131.979 181.383C143.235 180.114 154.132 176.91 164.205 171.962C160.929 182.49 155.596 192.319 148.464 200.856C138.092 213.27 124.357 222.426 108.907 227.222C93.458 232.019 76.9524 232.253 61.3736 227.895C45.7948 223.538 31.8055 214.775 21.0867 202.659C10.3679 190.543 3.37557 175.59 0.949823 159.596C-1.47592 143.602 0.768139 127.248 7.41237 112.499C14.0566 97.7497 24.8183 85.2327 38.4045 76.4519ZM163.062 156.711L163.062 156.711C162.954 156.773 162.846 156.835 162.738 156.897C162.846 156.835 162.954 156.773 163.062 156.711Z" fill="#24C8DB"/>
</svg>
````

## File: tauri-plugin-sample-plugin/examples/tauri-app/public/vite.svg
````
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="31.88" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 257"><defs><linearGradient id="IconifyId1813088fe1fbc01fb466" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0%" stop-color="#41D1FF"></stop><stop offset="100%" stop-color="#BD34FE"></stop></linearGradient><linearGradient id="IconifyId1813088fe1fbc01fb467" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%"><stop offset="0%" stop-color="#FFEA83"></stop><stop offset="8.333%" stop-color="#FFDD35"></stop><stop offset="100%" stop-color="#FFA800"></stop></linearGradient></defs><path fill="url(#IconifyId1813088fe1fbc01fb466)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"></path><path fill="url(#IconifyId1813088fe1fbc01fb467)" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"></path></svg>
````

## File: tauri-plugin-sample-plugin/examples/tauri-app/src/lib/Greet.svelte
````
<script>
  import { invoke } from "@tauri-apps/api/core"
  let name = $state("");
  let greetMsg = $state("")
  async function greet(){
    // Learn more about Tauri commands at https://v2.tauri.app/develop/calling-rust/#commands
    greetMsg = await invoke("greet", { name })
  }
</script>
<div>
  <div class="row">
    <input id="greet-input" placeholder="Enter a name..." bind:value={name} />
    <button onclick={greet}>
      Greet
    </button>
  </div>
  <p>{greetMsg}</p>
</div>
````

## File: tauri-plugin-sample-plugin/examples/tauri-app/src/App.svelte
````
<script>
  import Greet from './lib/Greet.svelte'
  import { ping } from 'tauri-plugin-sample-plugin-api'
	let response = $state('')
	function updateResponse(returnValue) {
		response += `[${new Date().toLocaleTimeString()}] ` + (typeof returnValue === 'string' ? returnValue : JSON.stringify(returnValue)) + '<br>'
	}
	function _ping() {
		ping("Pong!").then(updateResponse).catch(updateResponse)
	}
</script>
<main class="container">
  <h1>Welcome to Tauri!</h1>
  <div class="row">
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo vite" alt="Vite Logo" />
    </a>
    <a href="https://tauri.app" target="_blank">
      <img src="/tauri.svg" class="logo tauri" alt="Tauri Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank">
      <img src="/svelte.svg" class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <p>
    Click on the Tauri, Vite, and Svelte logos to learn more.
  </p>
  <div class="row">
    <Greet />
  </div>
  <div>
    <button onclick="{_ping}">Ping</button>
    <div>{@html response}</div>
  </div>
</main>
<style>
  .logo.vite:hover {
    filter: drop-shadow(0 0 2em #747bff);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00);
  }
</style>
````

## File: tauri-plugin-sample-plugin/examples/tauri-app/src/main.js
````javascript
const app = mount(App, {
target: document.getElementById("app"),
````

## File: tauri-plugin-sample-plugin/examples/tauri-app/src/style.css
````css
:root {
.container {
.logo {
.logo.tauri:hover {
.row {
a {
a:hover {
h1 {
input,
button {
button:hover {
⋮----
#greet-input {
````

## File: tauri-plugin-sample-plugin/examples/tauri-app/src/vite-env.d.ts
````typescript

````

## File: tauri-plugin-sample-plugin/examples/tauri-app/src-tauri/capabilities/default.json
````json
{
  "$schema": "../gen/schemas/desktop-schema.json",
  "identifier": "default",
  "description": "enables the default permissions",
  "windows": [
    "main"
  ],
  "permissions": [
    "core:default",
    "sample-plugin:default"
  ]
}
````

## File: tauri-plugin-sample-plugin/examples/tauri-app/src-tauri/src/lib.rs
````rust
fn greet(name: &str) -> String {
format!("Hello, {}! You've been greeted from Rust!", name)
⋮----
pub fn run() {
⋮----
.invoke_handler(tauri::generate_handler![greet])
.plugin(tauri_plugin_sample_plugin::init())
.run(tauri::generate_context!())
.expect("error while running tauri application");
````

## File: tauri-plugin-sample-plugin/examples/tauri-app/src-tauri/src/main.rs
````rust
fn main() {
````

## File: tauri-plugin-sample-plugin/examples/tauri-app/src-tauri/.gitignore
````
# Generated by Cargo
# will have compiled files and executables
/target/
````

## File: tauri-plugin-sample-plugin/examples/tauri-app/src-tauri/build.rs
````rust
fn main() {
````

## File: tauri-plugin-sample-plugin/examples/tauri-app/src-tauri/Cargo.toml
````toml
[package]
name = "tauri-app"
version = "0.1.0"
description = "A Tauri App"
authors = ["you"]
license = ""
repository = ""
edition = "2021"
rust-version = "1.77.2"

[lib]
name = "tauri_app_lib"
crate-type = ["staticlib", "cdylib", "rlib"]

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[build-dependencies]
tauri-build = { version = "2.5.1", default-features = false }

[dependencies]
tauri = { version = "2.9.2" }
tauri-plugin-sample-plugin = { path = "../../../" }
````

## File: tauri-plugin-sample-plugin/examples/tauri-app/src-tauri/tauri.conf.json
````json
{
  "productName": "tauri-app",
  "version": "0.1.0",
  "identifier": "com.tauri.dev",
  "build": {
    "beforeDevCommand": "pnpm dev",
    "beforeBuildCommand": "pnpm build",
    "devUrl": "http://localhost:1420",
    "frontendDist": "../dist"
  },
  "app": {
    "withGlobalTauri": false,
    "security": {
      "csp": null
    },
    "windows": [
      {
        "fullscreen": false,
        "height": 600,
        "resizable": true,
        "title": "tauri-app",
        "width": 800
      }
    ]
  },
  "bundle": {
    "active": true,
    "targets": "all",
    "icon": [
      "icons/32x32.png",
      "icons/128x128.png",
      "icons/128x128@2x.png",
      "icons/icon.icns",
      "icons/icon.ico"
    ]
  }
}
````

## File: tauri-plugin-sample-plugin/examples/tauri-app/.gitignore
````
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
````

## File: tauri-plugin-sample-plugin/examples/tauri-app/index.html
````html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tauri + Svelte</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
````

## File: tauri-plugin-sample-plugin/examples/tauri-app/jsconfig.json
````json
{
  "compilerOptions": {
    "moduleResolution": "bundler",
    "target": "ESNext",
    "module": "ESNext",
    /**
     * svelte-preprocess cannot figure out whether you have
     * a value or a type, so tell TypeScript to enforce using
     * `import type` instead of `import` for Types.
     */
    "verbatimModuleSyntax": true,
    "isolatedModules": true,
    "resolveJsonModule": true,
    /**
     * To have warnings / errors of the Svelte compiler at the
     * correct position, enable source maps by default.
     */
    "sourceMap": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "baseUrl": ".",
    /**
     * Typecheck JS in `.svelte` and `.js` files by default.
     * Disable this if you'd like to use dynamic types.
     */
    "checkJs": true
  },
  /**
   * Use global.d.ts instead of compilerOptions.types
   * to avoid limiting type declarations.
   */
  "include": ["src/**/*.d.ts", "src/**/*.js", "src/**/*.svelte"]
}
````

## File: tauri-plugin-sample-plugin/examples/tauri-app/package.json
````json
{
  "name": "tauri-app",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "tauri": "tauri"
  },
  "dependencies": {
    "@tauri-apps/api": "^2.0.0",
    "tauri-plugin-sample-plugin-api": "file:../../"
  },
  "devDependencies": {
    "@sveltejs/vite-plugin-svelte": "^6.0.0",
    "svelte": "^5.0.0",
    "vite": "^7.0.0",
    "@tauri-apps/cli": "^2.0.0"
  }
}
````

## File: tauri-plugin-sample-plugin/examples/tauri-app/README.md
````markdown
# Svelte + Vite

This template should help get you started developing with Tauri and Svelte in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer).
````

## File: tauri-plugin-sample-plugin/examples/tauri-app/vite.config.js
````javascript
export default defineConfig({
plugins: [svelte()],
````

## File: tauri-plugin-sample-plugin/guest-js/index.ts
````typescript
import { invoke } from '@tauri-apps/api/core'
export async function ping(value: string): Promise<string | null>
````

## File: tauri-plugin-sample-plugin/permissions/default.toml
````toml
[default]
description = "Default permissions for the plugin"
permissions = ["allow-ping"]
````

## File: tauri-plugin-sample-plugin/src/commands.rs
````rust
use crate::Result;
use crate::SamplePluginExt;
⋮----
pub(crate) async fn ping<R: Runtime>(
⋮----
app.sample_plugin().ping(payload)
````

## File: tauri-plugin-sample-plugin/src/desktop.rs
````rust
use serde::de::DeserializeOwned;
⋮----
pub fn init<R: Runtime, C: DeserializeOwned>(
⋮----
Ok(SamplePlugin(app.clone()))
⋮----
pub struct SamplePlugin<R: Runtime>(AppHandle<R>);
⋮----
pub fn ping(&self, payload: PingRequest) -> crate::Result<PingResponse> {
Ok(PingResponse {
````

## File: tauri-plugin-sample-plugin/src/error.rs
````rust
pub type Result<T> = std::result::Result<T, Error>;
⋮----
pub enum Error {
⋮----
impl Serialize for Error {
fn serialize<S>(&self, serializer: S) -> std::result::Result<S::Ok, S::Error>
⋮----
serializer.serialize_str(self.to_string().as_ref())
````

## File: tauri-plugin-sample-plugin/src/lib.rs
````rust
mod desktop;
⋮----
mod mobile;
mod commands;
mod error;
mod models;
⋮----
use desktop::SamplePlugin;
⋮----
use mobile::SamplePlugin;
pub trait SamplePluginExt<R: Runtime> {
⋮----
fn sample_plugin(&self) -> &SamplePlugin<R> {
self.state::<SamplePlugin<R>>().inner()
⋮----
pub fn init<R: Runtime>() -> TauriPlugin<R> {
⋮----
.invoke_handler(tauri::generate_handler![commands::ping])
.setup(|app, api| {
⋮----
app.manage(sample_plugin);
Ok(())
⋮----
.build()
````

## File: tauri-plugin-sample-plugin/src/mobile.rs
````rust
use serde::de::DeserializeOwned;
⋮----
pub fn init<R: Runtime, C: DeserializeOwned>(
⋮----
let handle = api.register_android_plugin("", "ExamplePlugin")?;
⋮----
let handle = api.register_ios_plugin(init_plugin_sample_plugin)?;
Ok(SamplePlugin(handle))
⋮----
pub struct SamplePlugin<R: Runtime>(PluginHandle<R>);
⋮----
pub fn ping(&self, payload: PingRequest) -> crate::Result<PingResponse> {
⋮----
.run_mobile_plugin("ping", payload)
.map_err(Into::into)
````

## File: tauri-plugin-sample-plugin/src/models.rs
````rust
pub struct PingRequest {
⋮----
pub struct PingResponse {
````

## File: tauri-plugin-sample-plugin/.gitignore
````
/.vs
.DS_Store
.Thumbs.db
*.sublime*
.idea/
debug.log
package-lock.json
.vscode/settings.json
yarn.lock

/.tauri
/target
Cargo.lock
node_modules/

dist-js
dist
````

## File: tauri-plugin-sample-plugin/build.rs
````rust
fn main() {
⋮----
.android_path("android")
.ios_path("ios")
.build();
````

## File: tauri-plugin-sample-plugin/Cargo.toml
````toml
[package]
name = "tauri-plugin-sample-plugin"
version = "0.1.0"
authors = [ "You" ]
description = ""
edition = "2021"
rust-version = "1.77.2"
exclude = ["/examples", "/dist-js", "/guest-js", "/node_modules"]
links = "tauri-plugin-sample-plugin"

[dependencies]
tauri = { version = "2.9.2" }
serde = "1.0"
thiserror = "2"

[build-dependencies]
tauri-plugin = { version = "2.5.1", features = ["build"] }
````

## File: tauri-plugin-sample-plugin/package.json
````json
{
  "name": "tauri-plugin-sample-plugin-api",
  "version": "0.1.0",
  "author": "You",
  "description": "",
  "type": "module",
  "types": "./dist-js/index.d.ts",
  "main": "./dist-js/index.cjs",
  "module": "./dist-js/index.js",
  "exports": {
    "types": "./dist-js/index.d.ts",
    "import": "./dist-js/index.js",
    "require": "./dist-js/index.cjs"
  },
  "files": [
    "dist-js",
    "README.md"
  ],
  "scripts": {
    "build": "rollup -c",
    "prepublishOnly": "pnpm build",
    "pretest": "pnpm build"
  },
  "dependencies": {
    "@tauri-apps/api": "^2.0.0"
  },
  "devDependencies": {
    "@rollup/plugin-typescript": "^12.0.0",
    "rollup": "^4.9.6",
    "typescript": "^5.3.3",
    "tslib": "^2.6.2"
  }
}
````

## File: tauri-plugin-sample-plugin/README.md
````markdown
# Tauri Plugin sample-plugin
````

## File: tauri-plugin-sample-plugin/rollup.config.js
````javascript
const pkg = JSON.parse(readFileSync(join(cwd(), 'package.json'), 'utf8'))
⋮----
typescript({
⋮----
declarationDir: dirname(pkg.exports.import)
⋮----
...Object.keys(pkg.dependencies || {}),
...Object.keys(pkg.peerDependencies || {})
````

## File: tauri-plugin-sample-plugin/tsconfig.json
````json
{
  "compilerOptions": {
    "target": "es2021",
    "module": "esnext",
    "moduleResolution": "bundler",
    "skipLibCheck": true,
    "strict": true,
    "noUnusedLocals": true,
    "noImplicitAny": true,
    "noEmit": true
  },
  "include": ["guest-js/*.ts"],
  "exclude": ["dist-js", "node_modules"]
}
````

## File: .gitignore
````
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
# Created by https://www.toptal.com/developers/gitignore/api/rust,node,linux,visualstudiocode,git
# Edit at https://www.toptal.com/developers/gitignore?templates=rust,node,linux,visualstudiocode,git

### Git ###
# Created by git for backups. To disable backups in Git:
# $ git config --global mergetool.keepBackup false
*.orig

# Created by git when using merge tools for conflicts
*.BACKUP.*
*.BASE.*
*.LOCAL.*
*.REMOTE.*
*_BACKUP_*.txt
*_BASE_*.txt
*_LOCAL_*.txt
*_REMOTE_*.txt

### Linux ###
*~

# temporary files which can be created if a process still has a handle open of a deleted file
.fuse_hidden*

# KDE directory preferences
.directory

# Linux trash folder which might appear on any partition or disk
.Trash-*

# .nfs files are created when an open file is removed but is still being accessed
.nfs*

### Node ###
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*
.pnpm-debug.log*

# Diagnostic reports (https://nodejs.org/api/report.html)
report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Directory for instrumented libs generated by jscoverage/JSCover
lib-cov

# Coverage directory used by tools like istanbul
coverage
*.lcov

# nyc test coverage
.nyc_output

# Grunt intermediate storage (https://gruntjs.com/creating-plugins#storing-task-files)
.grunt

# Bower dependency directory (https://bower.io/)
bower_components

# node-waf configuration
.lock-wscript

# Compiled binary addons (https://nodejs.org/api/addons.html)
build/Release

# Dependency directories
node_modules/
jspm_packages/

# Snowpack dependency directory (https://snowpack.dev/)
web_modules/

# TypeScript cache
*.tsbuildinfo

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Optional stylelint cache
.stylelintcache

# Microbundle cache
.rpt2_cache/
.rts2_cache_cjs/
.rts2_cache_es/
.rts2_cache_umd/

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variable files
.env
.env.development.local
.env.test.local
.env.production.local
.env.local

# parcel-bundler cache (https://parceljs.org/)
.cache
.parcel-cache

# Next.js build output
.next
out

# Nuxt.js build / generate output
.nuxt
dist

# Gatsby files
.cache/
# Comment in the public line in if your project uses Gatsby and not Next.js
# https://nextjs.org/blog/next-9-1#public-directory-support
# public

# vuepress build output
.vuepress/dist

# vuepress v2.x temp and cache directory
.temp

# Docusaurus cache and generated files
.docusaurus

# Serverless directories
.serverless/

# FuseBox cache
.fusebox/

# DynamoDB Local files
.dynamodb/

# TernJS port file
.tern-port

# Stores VSCode versions used for testing VSCode extensions
.vscode-test

# yarn v2
.yarn/cache
.yarn/unplugged
.yarn/build-state.yml
.yarn/install-state.gz
.pnp.*

### Node Patch ###
# Serverless Webpack directories
.webpack/

# Optional stylelint cache

# SvelteKit build / generate output
.svelte-kit

### Rust ###
# Generated by Cargo
# will have compiled files and executables
debug/
target/

# Remove Cargo.lock from gitignore if creating an executable, leave it for libraries
# More information here https://doc.rust-lang.org/cargo/guide/cargo-toml-vs-cargo-lock.html
Cargo.lock

# These are backup files generated by rustfmt
**/*.rs.bk

# MSVC Windows builds of rustc generate these, which store debugging information
*.pdb

### VisualStudioCode ###
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
!.vscode/*.code-snippets

# Local History for Visual Studio Code
.history/

# Built Visual Studio Code Extensions
*.vsix

### VisualStudioCode Patch ###
# Ignore all local history of files
.history
.ionide

# End of https://www.toptal.com/developers/gitignore/api/rust,node,linux,visualstudiocode,git
````

## File: .repomixignore
````
# Add patterns to ignore here, one per line
# Example:
# *.log
# tmp/
````

## File: components.json
````json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/index.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "registries": {}
}
````

## File: index.html
````html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tauri + React + Typescript</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
````

## File: LICENSE
````
MIT License

Copyright (c) 2025 Mohamed Moughamir

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
````

## File: repomix.config.json
````json
{
  "$schema": "https://repomix.com/schemas/latest/schema.json",
  "input": {
    "maxFileSize": 52428800
  },
  "output": {
    "filePath": "repomix-output.md",
    "style": "markdown",
    "parsableStyle": false,
    "fileSummary": true,
    "directoryStructure": true,
    "files": true,
    "removeComments": true,
    "removeEmptyLines": true,
    "compress": true,
    "topFilesLength": 5,
    "showLineNumbers": false,
    "truncateBase64": false,
    "copyToClipboard": false,
    "includeFullDirectoryStructure": true,
    "tokenCountTree": false,
    "git": {
      "sortByChanges": true,
      "sortByChangesMaxCommits": 100,
      "includeDiffs": false,
      "includeLogs": false,
      "includeLogsCount": 50
    }
  },
  "include": [],
  "ignore": {
    "useGitignore": true,
    "useDotIgnore": true,
    "useDefaultPatterns": true,
    "customPatterns": []
  },
  "security": {
    "enableSecurityCheck": true
  },
  "tokenCount": {
    "encoding": "o200k_base"
  }
}
````

## File: resources.md
````markdown
- https://github.com/philberndt/GPTranslate?tab=readme-ov-file
- https://github.com/vinhnx/vtcode
- https://github.com/Abraxas-365/langchain-rust/blob/main/examples/llm_ollama.rs
- https://github.com/Abraxas-365/langchain-rust
- https://github.com/pepperoni21/ollama-rs
- https://github.com/timescale/pgai/blob/main/docs/vectorizer-quick-start.md
````

## File: tsconfig.json
````json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"]
}
````

## File: tsconfig.node.json
````json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
````

## File: src/stores/vaultStore.ts
````typescript
import { create } from 'zustand';
import { Note, NoteGraph, Vault, VaultEntry } from '@/types';
interface VaultState {
  vault: Vault | null;
  vaultEntries: VaultEntry[];
  selectedEntry: VaultEntry | null;
  currentFileContent: string;
  currentFilePath: string | null;
  noteGraph: NoteGraph | null;
  isLoading: boolean;
  notes: Note[];
  currentNote: Note | null;
  addNote: (note: Note) => void;
  updateNote: (id: string, updates: Partial<Note>) => void;
  deleteNote: (id: string) => void;
  setCurrentNote: (note: Note | null) => void;
  setVault: (vault: Vault | null) => void;
  setVaultEntries: (entries: VaultEntry[]) => void;
  setSelectedEntry: (entry: VaultEntry | null) => void;
  setCurrentFileContent: (content: string) => void;
  setCurrentFilePath: (path: string | null) => void;
  setNoteGraph: (graph: NoteGraph | null) => void;
  setLoading: (loading: boolean) => void;
}
````

## File: src/types/index.ts
````typescript
export interface VaultEntry {
  name: string;
  path: string;
  is_dir: boolean;
  children?: VaultEntry[];
}
export interface Note {
  id: string;
  path: string;
  title: string;
  content: string;
  created: Date;
  modified: Date;
  tags: string[];
}
export interface Vault {
  path: string;
  name: string;
}
export interface GraphNode {
  id: string;
  label: string;
  path: string;
}
export interface GraphEdge {
  from: string;
  to: string;
}
export interface NoteGraph {
  nodes: GraphNode[];
  edges: GraphEdge[];
}
export interface Plugin {
  id: string;
  name: string;
  version: string;
  enabled: boolean;
  manifest: PluginManifest;
}
export interface PluginManifest {
  id: string;
  name: string;
  version: string;
  author: string;
  description: string;
  main: string;
}
export interface Theme {
  id: string;
  name: string;
  author: string;
  styles: Record<string, string>;
}
````

## File: src-tauri/src/plugins.rs
````rust
use std::collections::HashMap;
use std::path::PathBuf;
⋮----
pub struct Plugin {
⋮----
pub struct PluginManifest {
⋮----
pub struct PluginManager {
⋮----
impl PluginManager {
pub fn new() -> Self {
⋮----
pub fn load_plugin(&mut self, path: PathBuf) -> Result<(), String> {
let manifest_path = path.join("manifest.json");
⋮----
.map_err(|e| format!("Failed to read manifest: {}", e))?;
⋮----
.map_err(|e| format!("Failed to parse manifest: {}", e))?;
⋮----
id: manifest.id.clone(),
name: manifest.name.clone(),
version: manifest.version.clone(),
⋮----
self.plugins.insert(plugin.id.clone(), plugin);
Ok(())
⋮----
pub fn unload_plugin(&mut self, plugin_id: &str) -> Result<(), String> {
⋮----
.remove(plugin_id)
.ok_or_else(|| "Plugin not found".to_string())?;
⋮----
pub fn list_plugins(&self) -> Vec<Plugin> {
self.plugins.values().cloned().collect()
⋮----
pub fn get_plugin(&self, plugin_id: &str) -> Option<&Plugin> {
self.plugins.get(plugin_id)
````

## File: src-tauri/src/vault.rs
````rust
use std::fs;
use std::io;
⋮----
pub struct VaultEntry {
⋮----
pub struct VaultManager;
impl VaultManager {
pub fn scan_vault(path: &Path) -> io::Result<Vec<VaultEntry>> {
⋮----
Ok(entries)
⋮----
fn get_vault_entries(base: &Path, current: &Path, entries: &mut Vec<VaultEntry>) -> io::Result<()> {
if current.is_dir() {
⋮----
let path = entry.path();
if let Some(name) = path.file_name() {
if name.to_string_lossy().starts_with('.') {
⋮----
if path.is_dir() {
⋮----
children_entries.push(VaultEntry {
name: path.file_name().unwrap().to_string_lossy().to_string(),
path: path.clone(),
⋮----
children: Some(children),
⋮----
children_entries.sort_by(|a, b| {
⋮----
a.name.cmp(&b.name)
⋮----
entries.extend(children_entries);
⋮----
Ok(())
⋮----
fn is_markdown_file(path: &Path) -> bool {
path.extension()
.and_then(|s| s.to_str())
.map(|ext| ext == "md" || ext == "markdown")
.unwrap_or(false)
⋮----
pub fn read_note(path: &Path) -> io::Result<String> {
⋮----
pub fn write_note(path: &Path, content: &str) -> io::Result<()> {
if let Some(parent) = path.parent() {
⋮----
pub fn delete_note(path: &Path) -> io::Result<()> {
````

## File: src-tauri/tauri.conf.json
````json
{
  "$schema": "https://schema.tauri.app/config/2",
  "productName": "ebony",
  "version": "0.1.0",
  "identifier": "com.omnizya.ebony",
  "build": {
    "beforeDevCommand": "pnpm dev",
    "devUrl": "http://localhost:3000",
    "beforeBuildCommand": "pnpm build",
    "frontendDist": "../dist"
  },
  "app": {
    "windows": [
      {
        "title": "ebony",
        "width": 1200,
        "height": 800
      }
    ],
    "security": {
      "csp": null
    }
  },
  "bundle": {
    "active": true,
    "targets": "all",
    "icon": [
      "icons/32x32.png",
      "icons/128x128.png",
      "icons/128x128@2x.png",
      "icons/icon.icns",
      "icons/icon.ico"
    ]
  }
}
````

## File: pnpm-workspace.yaml
````yaml
onlyBuiltDependencies:
  - '@parcel/watcher'
  - esbuild
````

## File: vite.config.ts
````typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
````

## File: src-tauri/Cargo.toml
````toml
[package]
name = "ebony"
version = "0.1.0"
description = "An Obsidian-like vault manager for notes and knowledge base"
authors = ["Mohamed Moughamir <moughamir@gmail.com>"]
edition = "2021"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[lib]
# The `_lib` suffix may seem redundant but it is necessary
# to make the lib name unique and wouldn't conflict with the bin name.
# This seems to be only an issue on Windows, see https://github.com/rust-lang/cargo/issues/8519
name = "ebony_lib"
crate-type = ["staticlib", "cdylib", "rlib"]

[build-dependencies]
tauri-build = { version = "2.5.1", features = [] }

[dependencies]
tauri = { version = "2.9.2", features = [] }
tauri-plugin-opener = "2"
tauri-plugin-fs = "2"
tauri-plugin-dialog = "2.4.2"
serde = { version = "1.0.228", features = ["derive"] }
serde_json = "1.0.145"
tauri-plugin-os = "2"
tauri-plugin-shell = "2"
tauri-plugin-sql = { version = "2", features = ["postgres", "sqlite"] }
tauri-plugin-store = "2"
pulldown-cmark = "0.11.0"
git2 = "0.19.0"

[target.'cfg(not(any(target_os = "android", target_os = "ios")))'.dependencies]
tauri-plugin-single-instance = "2"
````

## File: tailwind.config.ts
````typescript
import type { Config } from 'tailwindcss'
````

## File: src/index.css
````css
@theme {
@layer base {
⋮----
body {
````

## File: package.json
````json
{
  "name": "ebony",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "tauri": "tauri"
  },
  "dependencies": {
    "@codemirror/lang-markdown": "^6.5.0",
    "@codemirror/state": "^6.5.2",
    "@codemirror/view": "^6.38.6",
    "@radix-ui/react-context-menu": "^2.2.16",
    "@radix-ui/react-label": "^2.1.8",
    "@radix-ui/react-scroll-area": "^1.2.10",
    "@radix-ui/react-slot": "^1.2.4",
    "@tailwindcss/cli": "^4.1.17",
    "@tailwindcss/vite": "^4.1.17",
    "@tauri-apps/api": "^2.9.0",
    "@tauri-apps/plugin-dialog": "^2.4.2",
    "@tauri-apps/plugin-fs": "~2",
    "@tauri-apps/plugin-opener": "~2",
    "@tauri-apps/plugin-os": "~2.3.2",
    "@tauri-apps/plugin-shell": "~2.3.3",
    "@tauri-apps/plugin-sql": "~2.3.1",
    "@tauri-apps/plugin-store": "~2",
    "@uiw/react-md-editor": "^4.0.8",
    "autoprefixer": "^10.4.22",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "lucide-react": "^0.553.0",
    "postcss": "^8.5.6",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "react-force-graph-2d": "^1.23.13",
    "react-hotkeys-hook": "^5.2.1",
    "react-resizable-panels": "^3.0.6",
    "remark": "^15.0.1",
    "remark-gfm": "^4.0.1",
    "tailwind-merge": "^3.4.0",
    "tailwindcss": "^4.0.0",
    "zustand": "^5.0.8"
  },
  "devDependencies": {
    "@tauri-apps/cli": "^2.9.4",
    "@types/node": "^24.10.0",
    "@types/react": "^19.1.8",
    "@types/react-dom": "^19.1.6",
    "@vitejs/plugin-react": "^4.6.0",
    "tw-animate-css": "^1.4.0",
    "typescript": "~5.8.3",
    "vite": "^7.0.4"
  }
}
````

## File: src/App.tsx
````typescript
import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import { open } from "@tauri-apps/plugin-dialog";
import { Store } from "@tauri-apps/plugin-store";
import { useVaultStore } from "./stores/vaultStore";
import FileTree from "./components/FileTree";
import MarkdownEditor from "./components/MarkdownEditor";
import GraphView from "./components/GraphView";
import Onboarding from "./components/Onboarding";
import { VaultEntry } from "./types";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./components/ui/resizable";
type View = "editor" | "graph";
⋮----
const checkGitConfig = async () =>
⋮----
const handleOnboardingComplete = () =>
const selectVault = async () =>
const initializeGit = async () =>
const gitAddAll = async () =>
const gitCommit = async () =>
const gitPush = async () =>
const gitPull = async () =>
````

## File: src-tauri/src/commands.rs
````rust
use crate::search::SearchEngine;
⋮----
use git2::Repository;
use std::path::PathBuf;
use std::sync::Mutex;
use tauri::State;
⋮----
pub async fn initialize_git_repo(path: String) -> Result<(), String> {
⋮----
.map(|_| ())
.map_err(|e| format!("Failed to initialize git repository: {}", e))
⋮----
pub async fn git_add_all(path: String) -> Result<(), String> {
let repo = Repository::open(&path).map_err(|e| format!("Failed to open repository: {}", e))?;
let mut index = repo.index().map_err(|e| format!("Failed to get index: {}", e))?;
index.add_all(["."], git2::IndexAddOption::DEFAULT, None)
.map_err(|e| format!("Failed to add all files: {}", e))?;
index.write().map_err(|e| format!("Failed to write index: {}", e))?;
Ok(())
⋮----
pub async fn git_commit(path: String, message: String) -> Result<(), String> {
⋮----
let tree_id = index.write_tree().map_err(|e| format!("Failed to write tree: {}", e))?;
let tree = repo.find_tree(tree_id).map_err(|e| format!("Failed to find tree: {}", e))?;
let signature = repo.signature().map_err(|e| format!("Failed to get signature: {}", e))?;
let parent_commit = find_last_commit(&repo)?;
repo.commit(
Some("HEAD"),
⋮----
.map_err(|e| format!("Failed to commit: {}", e))?;
⋮----
fn find_last_commit(repo: &Repository) -> Result<git2::Commit, String> {
let obj = repo.head().map_err(|e| format!("Failed to get HEAD: {}", e))?.resolve().map_err(|e| format!("Failed to resolve HEAD: {}", e))?.peel(git2::ObjectType::Commit).map_err(|e| format!("Failed to peel HEAD: {}", e))?;
obj.into_commit().map_err(|_| "Couldn't find commit".to_string())
⋮----
pub async fn git_push(path: String) -> Result<(), String> {
⋮----
let mut remote = repo.find_remote("origin").map_err(|e| format!("Failed to find remote 'origin': {}", e))?;
remote.push(&["refs/heads/main:refs/heads/main"], None)
.map_err(|e| format!("Failed to push: {}", e))?;
⋮----
pub async fn git_pull(path: String) -> Result<(), String> {
⋮----
remote.fetch(&["main"], None, None)
.map_err(|e| format!("Failed to fetch: {}", e))?;
let fetch_commit = repo.find_reference("FETCH_HEAD").map_err(|e| format!("Failed to find FETCH_HEAD: {}", e))?.peel_to_commit().map_err(|e| format!("Failed to peel FETCH_HEAD to commit: {}", e))?;
let (analysis, _) = repo.merge_analysis(&fetch_commit).map_err(|e| format!("Failed to analyze merge: {}", e))?;
if analysis.is_up_to_date() {
⋮----
} else if analysis.is_fast_forward() {
let mut reference = repo.find_reference("refs/heads/main").map_err(|e| format!("Failed to find main branch: {}", e))?;
reference.set_target(fetch_commit.id(), "Fast-Forward").map_err(|e| format!("Failed to set target: {}", e))?;
repo.set_head("refs/heads/main").map_err(|e| format!("Failed to set HEAD: {}", e))?;
repo.checkout_head(Some(git2::build::CheckoutBuilder::default().force())).map_err(|e| format!("Failed to checkout HEAD: {}", e))?;
⋮----
Err("Fast-forward merge not possible. Please resolve conflicts manually.".to_string())
⋮----
pub async fn get_note_graph(vault_path: String) -> Result<NoteGraph, String> {
⋮----
pub async fn open_vault(path: String) -> Result<Vec<VaultEntry>, String> {
⋮----
if !vault_path.exists() {
return Err("Vault path does not exist".to_string());
⋮----
VaultManager::scan_vault(&vault_path).map_err(|e| e.to_string())
⋮----
pub async fn read_note_content(path: String) -> Result<String, String> {
⋮----
VaultManager::read_note(&note_path).map_err(|e| e.to_string())
⋮----
pub async fn write_note_content(path: String, content: String) -> Result<(), String> {
⋮----
VaultManager::write_note(&note_path, &content).map_err(|e| e.to_string())
⋮----
pub async fn search_notes(query: String, vault_path: String) -> Result<Vec<SearchResult>, String> {
⋮----
engine.search(&query).map_err(|e| e.to_string())
⋮----
pub async fn load_plugin(
⋮----
.lock()
.unwrap()
.load_plugin(PathBuf::from(plugin_path))
.map_err(|e| e.to_string())
⋮----
pub async fn list_plugins(state: State<'_, Mutex<PluginManager>>) -> Result<Vec<Plugin>, String> {
Ok(state.lock().unwrap().list_plugins())
⋮----
pub async fn load_theme(_theme_path: String) -> Result<(), String> {
⋮----
pub async fn list_themes() -> Result<Vec<Theme>, String> {
Ok(vec![])
⋮----
pub struct SearchResult {
⋮----
pub struct Theme {
````

## File: src-tauri/src/main.rs
````rust
mod commands;
mod graph;
mod plugins;
mod search;
mod vault;
⋮----
use plugins::PluginManager;
use std::sync::Mutex;
fn main() {
⋮----
.manage(plugin_manager)
.plugin(tauri_plugin_store::Builder::new().build())
.plugin(tauri_plugin_sql::Builder::new().build())
.plugin(tauri_plugin_single_instance::init(|app, args, cwd| {}))
.plugin(tauri_plugin_shell::init())
.plugin(tauri_plugin_os::init())
.plugin(tauri_plugin_opener::init())
.plugin(tauri_plugin_fs::init())
.plugin(tauri_plugin_dialog::init())
.invoke_handler(tauri::generate_handler![
⋮----
.run(tauri::generate_context!())
.expect("error while running tauri application");
````

## File: README.md
````markdown
# 🪶 eBony.md — LLM-Driven Knowledge Workspace

[![zread](https://img.shields.io/badge/Ask_Zread-_.svg?style=for-the-badge&color=00b0aa&labelColor=000000&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuOTYxNTYgMS42MDAxSDIuMjQxNTZDMS44ODgxIDEuNjAwMSAxLjYwMTU2IDEuODg2NjQgMS42MDE1NiAyLjI0MDFWNC45NjAxQzEuNjAxNTYgNS4zMTM1NiAxLjg4ODEgNS42MDAxIDIuMjQxNTYgNS42MDAxSDQuOTYxNTZDNS4zMTUwMiA1LjYwMDEgNS42MDE1NiA1LjMxMzU2IDUuNjAxNTYgNC45NjAxVjIuMjQwMUM1LjYwMTU2IDEuODg2NjQgNS4zMTUwMiAxLjYwMDEgNC45NjE1NiAxLjYwMDFaIiBmaWxsPSIjZmZmIi8%2BCjxwYXRoIGQ9Ik00Ljk2MTU2IDEwLjM5OTlIMi4yNDE1NkMxLjg4ODEgMTAuMzk5OSAxLjYwMTU2IDEwLjY4NjQgMS42MDE1NiAxMS4wMzk5VjEzLjc1OTlDMS42MDE1NiAxNC4xMTM0IDEuODg4MSAxNC4zOTk5IDIuMjQxNTYgMTQuMzk5OUg0Ljk2MTU2QzUuMzE1MDIgMTQuMzk5OSA1LjYwMTU2IDE0LjExMzQgNS42MDE1NiAxMy43NTk5VjExLjAzOTlDNS42MDE1NiAxMC42ODY0IDUuMzE1MDIgMTAuMzk5OSA0Ljk2MTU2IDEwLjM5OTlaIiBmaWxsPSIjZmZmIi8%2BCjxwYXRoIGQ9Ik0xMy43NTg0IDEuNjAwMUgxMS4wMzg0QzEwLjY4NSAxLjYwMDEgMTAuMzk4NCAxLjg4NjY0IDEwLjM5ODQgMi4yNDAxVjQuOTYwMUMxMC4zOTg0IDUuMzEzNTYgMTAuNjg1IDUuNjAwMSAxMS4wMzg0IDUuNjAwMUgxMy43NTg0QzE0LjExMTkgNS42MDAxIDE0LjM5ODQgNS4zMTM1NiAxNC4zOTg0IDQuOTYwMVYyLjI0MDFDMTQuMzk4NCAxLjg4NjY0IDE0LjExMTkgMS42MDAxIDEzLjc1ODQgMS42MDAxWiIgZmlsbD0iI2ZmZiIvPgo8cGF0aCBkPSJNNCAxMkwxMiA0TDQgMTJaIiBmaWxsPSIjZmZmIi8%2BCjxwYXRoIGQ9Ik00IDEyTDEyIDQiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K&logoColor=ffffff)](https://zread.ai/moughamir/ebony.md)

---

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
````
