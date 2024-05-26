import express from "express";
import { index } from "../controllers/messagesController";

const router = express.Router();

router.route("/").get(index);
export default router;
