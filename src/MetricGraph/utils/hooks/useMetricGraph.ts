import { useState } from "react";
import { Data } from "vis";
import { GRAPH_EDGES, GRAPH_NODES } from "../../../mocks/graphData";

export const useMetricGraph = () => {
  const [graph, setGraph] = useState<Data>({
    nodes: GRAPH_NODES,
    edges: GRAPH_EDGES,
  });
  return { graph, setGraph };
};
