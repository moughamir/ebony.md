import React, { useEffect, useMemo } from 'react';
import { useVaultStore } from '@/stores/vaultStore';
import { invoke } from '@tauri-apps/api/core';
import ForceGraph2D from 'react-force-graph-2d';
import { NoteGraph } from '@/types';

const GraphView: React.FC = () => {
  const { vault, noteGraph, setNoteGraph } = useVaultStore();

  useEffect(() => {
    if (vault) {
      invoke<NoteGraph>('get_note_graph', { vaultPath: vault.path })
        .then(setNoteGraph)
        .catch(console.error);
    }
  }, [vault, setNoteGraph]);

  const graphData = useMemo(() => {
    if (!noteGraph) return { nodes: [], links: [] };

    const nodes = noteGraph.nodes.map(n => ({ id: n.id, name: n.label }));
    const links = noteGraph.edges.map(e => ({ source: e.from, target: e.to }));

    return { nodes, links };
  }, [noteGraph]);

  if (!noteGraph) {
    return <div>Loading graph...</div>;
  }

  return (
    <ForceGraph2D
      graphData={graphData}
      nodeLabel="name"
      nodeAutoColorBy="name"
      linkDirectionalArrowLength={3.5}
      linkDirectionalArrowRelPos={1}
    />
  );
};

export default GraphView;
