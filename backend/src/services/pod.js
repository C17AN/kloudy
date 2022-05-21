import k8s from '@kubernetes/client-node';
import { kc, metricsClient } from "../app.js";

BigInt.prototype.toJSON = function () {
  return this.toString()
}

export const getPodList = async (req, res) => {
  try {
    kc.loadFromDefault();
    const k8sApi = kc.makeApiClient(k8s.CoreV1Api);
    const data = await k8sApi.listPodForAllNamespaces(false, "", "", "", 10)
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: "Error while fetching pod list" });
  }
};

export const getPodMetric = async (req, res) => {
  try {
    kc.loadFromDefault();
    const k8sApi = kc.makeApiClient(k8s.CoreV1Api);
    const data = await k8s.topPods(k8sApi, metricsClient)
    res.status(200).json(data);
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: "Error while fetching pod metric list" });
  }
}



