export type NodeCondition = {
  type:
    | "MemoryPressure"
    | "DiskPressure"
    | "PIDPressure"
    | "Ready";
  status: "True" | "False";
  lastHeartbeatTime?: boolean;
  lastTransitionTime?: boolean;
  reason?: string;
  message?: string;
};
