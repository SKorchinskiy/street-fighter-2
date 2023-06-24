import { Router } from "express";
import { userService } from "../services/userService.js";
import {
  createUserValid,
  updateUserValid,
} from "../middlewares/user.validation.middleware.js";
import {
  createUser,
  deleteUserById,
  getUserById,
  getUsers,
  updateUserById,
} from "../controllers/user.controller.js";

const router = Router();

router.route("/").get(getUsers).post(createUserValid, createUser);
router
  .route("/:id")
  .get(getUserById)
  .put(updateUserValid, updateUserById)
  .delete(deleteUserById);

export { router };
