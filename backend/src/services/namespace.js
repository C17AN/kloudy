import k8s from '@kubernetes/client-node';
import { kc } from "../app.js";

export const getNamespaceList = async (req, res) => {
  try {
    kc.loadFromDefault();
    const k8sApi = kc.makeApiClient(k8s.CoreV1Api);
    const data = await k8sApi.listNamespace(true);
    const { items } = data.response.body
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: "Error while fetching namespace list" });
  }
};

