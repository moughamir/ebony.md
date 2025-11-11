import ForceGraph from "react-force-graph-2d";
import { Note } from "../notes/noteTypes";

export const GraphView = ({ notes }: { notes: Note[] }) => {
  const graphData = {
    nodes: notes.map((note) => ({ id: note.id, name: note.title })),
    links: [], // TODO: Implement note linking
  };

  return <ForceGraph graphData={graphData} />;
};
