import { Router } from "express";
import explorer_controller from "../controllers/explorer_controller.js";

const router = Router();

router.post("/", explorer_controller.store);
router.get("/", explorer_controller.index);
router.get("/:id", explorer_controller.show);
router.put("/:id", explorer_controller.update);
router.delete("/:id", explorer_controller.destroy);

export default router;