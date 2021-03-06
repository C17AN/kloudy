import k8s from '@kubernetes/client-node';
import { kc } from "../app.js";

export const getNodeList = async (req, res) => {
  try {
    kc.loadFromDefault();
    // kc.loadFromFile('/usr/lib/.kube/config');
    const k8sApi = kc.makeApiClient(k8s.CoreV1Api);
    const result = await k8sApi.listNode()
    const data = result.response.body.items
    res.status(200).json(data);

  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Error while fetching node list" });
  }
};

export const getNodeDetail = async (req, res) => {
  try {
    kc.loadFromDefault();
    const k8sApi = kc.makeApiClient(k8s.CoreV1Api);
    const data = await k8sApi.readNode(req.query.name)
    res.status(200).json(data);
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Error while fetching node detail" });
  }
};

export const createNode = async (req, res) => {
  try {
    kc.loadFromDefault();
    const k8sApi = kc.makeApiClient(k8s.CoreV1Api);
    const data = await k8sApi.createNode({ apiVersion: "v1", kind: "Node", metadata: { name: req.body.name }, spec: { unschedulable: false } });
    res.status(200).json(data);
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Error while fetching node list" });
  }
};




