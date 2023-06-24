import { Router } from "express";
import { logInUser } from "../controllers/auth.controller.js";

const router = Router();

router.post("/login", logInUser);

export { router };
