import { Edge } from "vis";
import { RawMetricEdge } from "../../../../../core/backend/_models/edges";

export const mapMetricEdge = (edge: RawMetricEdge): Edge => {
  const { type, ...rest } = edge;
  return {
    ...rest,
    dashes: type === "Soft",
    width: 2,
    smooth: true,
  };
};
