import k8s from '@kubernetes/client-node';
import { kc } from "../app.js";

export const getCurrentCluster = async (req, res) => {
  try {
    kc.loadFromDefault();
    const data = kc.getCurrentCluster()
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: "Error while fetching current cluster" });
  }
};


