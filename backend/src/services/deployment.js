import k8s from "@kubernetes/client-node";
import { kc } from "../app.js";

export const getDeploymentList = async (req, res) => {
  try {
    kc.loadFromDefault();
    const k8sApi = kc.makeApiClient(k8s.AppsV1Api);
    const data = await k8sApi.listNamespacedDeployment(req.query.namespace);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: "Error while fetching deployment list" });
  }
};
