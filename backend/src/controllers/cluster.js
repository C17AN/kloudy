import express from "express";
import { getCurrentCluster } from "../services/cluster.js";
import { getContextList, updateContext } from "../services/context.js";

const router = express.Router();

router.get("/", getCurrentCluster);
router.put("/", updateContext);

export default router;
