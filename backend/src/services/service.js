import k8s from '@kubernetes/client-node';
import { kc } from "../app.js";

export const getServiceList = async (req, res) => {
  try {
    kc.loadFromDefault();
    const k8sApi = kc.makeApiClient(k8s.CoreV1Api);
    const data = await k8sApi.listNamespacedService(req.query.namespace);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: "Error while fetching current cluster" });
  }
};
