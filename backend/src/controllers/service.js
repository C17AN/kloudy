import express from "express";
import { getServiceList } from "../services/service.js";

const router = express.Router();

router.get('/:namespace?', getServiceList)

export default router;
