import express from "express";
import { getDeploymentList } from "../services/deployment.js";

const router = express.Router();

router.get("/:namespace?", getDeploymentList);

export default router;
