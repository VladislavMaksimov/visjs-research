import Graph from "react-graph-vis";
import { useMetricGraph } from "./utils/hooks/useMetricGraph";

export const MetricGraph = () => {
  const { graph } = useMetricGraph();
  return <Graph graph={graph} style={{ height: "640px" }} />;
};
