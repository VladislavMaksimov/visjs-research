import { RawMetricEdge } from "../core/backend/_models/edges";

export const GRAPH_NODES = [
  { id: 1, label: "Node 1", color: "#e04141" },
  { id: 2, label: "Node 2", color: "#e09c41" },
  { id: 3, label: "Node 3", color: "#e0df41" },
  { id: 4, label: "Node 4", color: "#7be041" },
  { id: 5, label: "Node 5", color: "#41e0c9" },
];

export const GRAPH_EDGES: RawMetricEdge[] = [
  { from: 1, to: 2, type: "Hard" },
  { from: 1, to: 3, type: "Soft" },
  { from: 2, to: 4, type: "Hard" },
  { from: 2, to: 5, type: "Soft" },
];
