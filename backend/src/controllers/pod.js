import express from "express";
import { getPodList, getPodMetric } from "../services/pod.js";

const router = express.Router();

router.get('/', getPodList)
router.get('/metric', getPodMetric)

export default router;
