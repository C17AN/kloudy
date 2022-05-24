import express from "express";
import { getCurrentCluster } from "../services/cluster.js";

const router = express.Router();

router.get("/", getCurrentCluster);

export default router;
