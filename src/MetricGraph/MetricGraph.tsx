import Graph from "react-graph-vis";
import { useMetricGraph } from "./utils/hooks/useMetricGraph/useMetricGraph";

export const MetricGraph = () => {
  const { graph } = useMetricGraph();
  return <Graph graph={graph} />;
};
