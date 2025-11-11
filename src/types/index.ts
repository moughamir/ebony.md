// @FILE: src/types/index.ts
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

