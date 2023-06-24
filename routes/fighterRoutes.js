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
import { parseFighterFields } from "../utils/fighter-parser.util.js";

const router = Router();

router
  .route("/")
  .get(getFighters)
  .post(createFighterValid, parseFighterFields, createFighter);
router
  .route("/:id")
  .get(getFighterById)
  .put(updateFighterValid, parseFighterFields, updateFighterById)
  .delete(deleteFigherById);

export { router };
