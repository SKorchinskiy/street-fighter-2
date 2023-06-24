import { Router } from "express";
import {
  createFighterValid,
  updateFighterValid,
} from "../middlewares/fighter.validation.middleware.js";
import {
  createFighter,
  deleteFigherById,
  getFighterById,
  getFighters,
  updateFighterById,
} from "../controllers/fighter.controller.js";

const router = Router();

router.route("/").get(getFighters).post(createFighter);
router
  .route("/:id")
  .get(getFighterById)
  .put(updateFighterById)
  .delete(deleteFigherById);

export { router };
