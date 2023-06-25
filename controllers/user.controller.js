import { userService } from "../services/userService.js";

export function getUsers(req, res) {
  const users = userService.searchAll();
  return res.status(200).json(users);
}

export function getUserById(req, res) {
  const { id } = req.params;
  const user = userService.search({ id });
  return res.status(200).json(user);
}

export function createUser(req, res) {
  const user = userService.create(req.user);
  return res.status(200).json(user);
}

export function updateUserById(req, res) {
  const { id } = req.params;
  const user = userService.update(id, req.user);
  return res.status(200).json(user);
}

export function deleteUserById(req, res) {
  const { id } = req.params;
  const user = userService.remove(id);
  return res.status(200).json(user);
}
