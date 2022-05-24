import k8s from '@kubernetes/client-node';
import { kc } from "../app.js";

export const getContextList = async (req, res) => {
  try {
    kc.loadFromDefault();
    const data = kc.getContexts();
    res.status(200).json(data);
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Error while fetching cluster list" });
  }
};

export const updateContext = async (req, res) => {
  try {
    kc.loadFromDefault();
    const data = kc.setCurrentContext();
    res.status(200).json(data);
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Error while updating current cluster" });
  }
};


