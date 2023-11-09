export type ConnectionType = "Hard" | "Soft";

export interface RawMetricEdge {
  from: number;
  to: number;
  type: ConnectionType;
}
