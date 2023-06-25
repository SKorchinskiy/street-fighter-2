import { userService } from "../services/userService.js";

export function getUsers(req, res) {
  try {
    const users = userService.searchAll();
    return res.status(200).json(users);
  } catch (error) {
    const { status, message } = error;
    return res.status(status).json({
      error: true,
      message,
    });
  }
}

export function getUserById(req, res) {
  try {
    const { id } = req.params;
    const user = userService.search({ id });
    return res.status(200).json(user);
  } catch (error) {
    const { status, message } = error;
    return res.status(status).json({
      error: true,
      message,
    });
  }
}

export function createUser(req, res) {
  try {
    const user = userService.create(req.user);
    return res.status(200).json(user);
  } catch (error) {
    const { status, message } = error;
    return res.status(status).json({
      error: true,
      message,
    });
  }
}

export function updateUserById(req, res) {
  try {
    const { id } = req.params;
    const user = userService.update(id, req.user);
    return res.status(200).json(user);
  } catch (error) {
    const { status, message } = error;
    return res.status(status).json({
      error: true,
      message,
    });
  }
}

export function deleteUserById(req, res) {
  try {
    const { id } = req.params;
    const user = userService.remove(id);
    return res.status(200).json(user);
  } catch (error) {
    const { status, message } = error;
    return res.status(status).json({
      error: true,
      message,
    });
  }
}
