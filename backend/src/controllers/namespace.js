import express from "express";
import { createNamespace, getNamespaceList } from "../services/namespace.js";

const router = express.Router();

router.get('/', getNamespaceList)
router.post('/', createNamespace)

export default router;
