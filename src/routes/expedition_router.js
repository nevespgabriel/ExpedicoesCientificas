import { Router } from "express";
import expedition_controller from "../controllers/expedition_controller.js";

const router = Router();

router.post("/", expedition_controller.store);

export default router;