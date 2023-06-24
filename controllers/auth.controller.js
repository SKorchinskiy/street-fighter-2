import { userService } from "../services/userService.js";

export function logInUser(req, res, next) {
  try {
    const { firstName, lastName, email, password } = req.body;
    const user = userService.search({ email });
    let message = "Success!";
    if (!user || (user && user.password !== password)) {
      message = `User with entered credentials has not been found!`;
      return res.status(404).json({ message });
    }
    res.data = {
      firstName,
      lastName,
      email,
    };
    return res.status(200).json({ message });
  } catch (err) {
    res.err = err;
  } finally {
    next();
  }
}
