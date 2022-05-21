import express from "express";
import { getNodeList } from "../services/node.js";

const router = express.Router();

router.get('/', getNodeList)

export default router;
