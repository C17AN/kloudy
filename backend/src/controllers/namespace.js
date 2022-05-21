import express from "express";
import { getNamespaceList } from "../services/namespace.js";

const router = express.Router();

router.get('/', getNamespaceList)

export default router;
