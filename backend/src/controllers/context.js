import express from "express";
import { getContextList, getCurrentContext, updateContext } from "../services/context.js";

const router = express.Router();

router.get("/", getContextList);
router.put("/", updateContext);
router.get("/current", getCurrentContext);

export default router;
