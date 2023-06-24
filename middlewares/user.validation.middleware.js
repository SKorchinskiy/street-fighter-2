import { USER } from "../models/user.js";
import { validationCheck } from "../utils/models-helper.util.js";

const { fullCheck, partialCheck } = validationCheck(USER);

const createUserValid = (req, res, next) => {
  try {
    const user = req.body;
    fullCheck(user);
    req.user = user;
    return next();
  } catch (error) {
    const { status, message } = error;
    return res.status(status).json({ message });
  }
};

const updateUserValid = (req, res, next) => {
  try {
    const user = req.body;
    partialCheck(user);
    req.user = user;
    return next();
  } catch (error) {
    const { status, message } = error;
    return res.status(status).json({ message });
  }
};

export { createUserValid, updateUserValid };
