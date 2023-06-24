import { FIGHTER } from "../models/fighter.js";
import { validationCheck } from "../utils/models-helper.util.js";

const { fullCheck, partialCheck } = validationCheck(FIGHTER);

const DEFAULT_HEALTH = 100;

const createFighterValid = (req, res, next) => {
  try {
    const fighter = req.body;
    fighter.health = fighter.health || DEFAULT_HEALTH;
    fullCheck(fighter);
    req.fighter = fighter;
    return next();
  } catch (error) {
    const { status, message } = error;
    return res.status(status).json({ message });
  }
};

const updateFighterValid = (req, res, next) => {
  try {
    const fighter = req.body;
    partialCheck(fighter);
    req.fighter = fighter;
    return next();
  } catch (erro) {
    const { status, message } = error;
    return res.status(status).json({ message });
  }
};

export { createFighterValid, updateFighterValid };
