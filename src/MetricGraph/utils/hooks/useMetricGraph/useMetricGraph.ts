import { useMemo, useState } from "react";
import { Data } from "vis";
import { GRAPH_EDGES, GRAPH_NODES } from "../../../../mocks/graphData";
import { mapMetricEdge } from "./utils/mapMetricEdge";

export const useMetricGraph = () => {
  const edges = useMemo(() => GRAPH_EDGES.map(mapMetricEdge), []);

  const [graph, setGraph] = useState<Data>({
    nodes: GRAPH_NODES,
    edges,
  });

  return { graph, setGraph };
};
