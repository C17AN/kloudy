import express from "express";
import { createNode, getNodeDetail, getNodeList } from "../services/node.js";

const router = express.Router();

router.get('/', getNodeList)
router.get('/detail:name?', getNodeDetail)
router.post('/', createNode)

export default router;
