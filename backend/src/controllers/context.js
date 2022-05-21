import express from "express";
import { getContextList, updateContext } from "../services/context.js";

const router = express.Router();

router.get("/", getContextList);
router.put("/", updateContext);

export default router;
