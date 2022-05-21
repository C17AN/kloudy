import express from "express";
import { createNode, getNodeList } from "../services/node.js";

const router = express.Router();

router.get('/', getNodeList)
router.post('/', createNode)

export default router;
