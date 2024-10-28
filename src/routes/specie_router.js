import { Router } from "express";
import specie_controller from "../controllers/specie_controller.js";

const router = Router();

router.post("/", specie_controller.store);
router.get("/", specie_controller.index);
router.get("/:id", specie_controller.show);
router.put("/:id", specie_controller.update);
router.delete("/:id", specie_controller.destroy);

export default router;