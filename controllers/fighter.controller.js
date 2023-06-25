import { fighterService } from "../services/fighterService.js";

export function getFighters(req, res) {
  const fighters = fighterService.searchAll();
  return res.status(200).json(fighters);
}

export function getFighterById(req, res) {
  const id = req.id;
  const fighter = fighterService.search(id);
  return res.status(200).json(fighter);
}

export function createFighter(req, res) {
  const fighterData = req.body;
  const fighter = fighterService.create(fighterData);
  return res.status(200).json(fighter);
}

export function updateFighterById(req, res) {
  const { id } = req.params;
  const userData = req.body;
  const updatedFighter = fighterService.update(id, userData);
  return res.status(200).json(updatedFighter);
}

export function deleteFigherById(req, res) {
  const { id } = req.params;
  const deletedUser = fighterService.remove(id);
  return res.status(200).json(deletedUser);
}
