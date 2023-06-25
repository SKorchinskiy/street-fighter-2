import { fighterService } from "../services/fighterService.js";

export function getFighters(req, res) {
  try {
    const fighters = fighterService.searchAll();
    return res.status(200).json(fighters);
  } catch (error) {
    const { status, message } = error;
    return res.status(status).json({
      error: true,
      message,
    });
  }
}

export function getFighterById(req, res) {
  try {
    const id = req.id;
    const fighter = fighterService.search(id);
    return res.status(200).json(fighter);
  } catch (error) {
    const { status, message } = error;
    return res.status(status).json({
      error: true,
      message,
    });
  }
}

export function createFighter(req, res) {
  try {
    const fighterData = req.body;
    const fighter = fighterService.create(fighterData);
    return res.status(200).json(fighter);
  } catch (error) {
    const { status, message } = error;
    return res.status(status).json({
      error: true,
      message,
    });
  }
}

export function updateFighterById(req, res) {
  try {
    const { id } = req.params;
    const userData = req.body;
    const updatedFighter = fighterService.update(id, userData);
    return res.status(200).json(updatedFighter);
  } catch (error) {
    const { status, message } = error;
    return res.status(status).json({
      error: true,
      message,
    });
  }
}

export function deleteFigherById(req, res) {
  try {
    const { id } = req.params;
    const deletedUser = fighterService.remove(id);
    return res.status(200).json(deletedUser);
  } catch (error) {
    const { status, message } = error;
    return res.status(status).json({
      error: true,
      message,
    });
  }
}
