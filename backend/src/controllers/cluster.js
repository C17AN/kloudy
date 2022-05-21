import express from "express";
import { getClusterList, updateCluster } from "../services/cluster.js";

const router = express.Router();

router.get("/", getClusterList);
router.put("/", updateCluster);

export default router;
