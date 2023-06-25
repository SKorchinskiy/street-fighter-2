import { userRepository } from "../repositories/userRepository.js";
import createError from "http-errors";

class UserService {
  create(userData) {
    const areCredentialsInUse =
      this.userExists({ email: userData.email }) ||
      this.userExists({ phoneNumber: userData.phoneNumber });
    if (areCredentialsInUse) {
      throw new createError(400, {
        message: `User with provided credentials already exists!`,
      });
    }
    const user = userRepository.create(userData);
    if (!user) {
      throw new createError(500, {
        message: `An error occured on the server side!`,
      });
    }
    return user;
  }

  userExists(params) {
    const user = userRepository.getOne(params);
    return user ? true : false;
  }

  search(params) {
    const user = userRepository.getOne(params);
    if (!user) {
      throw new createError(404, {
        message: `User with provided search params was not found!`,
      });
    }
    return user;
  }

  searchAll() {
    const users = userRepository.getAll();
    if (!users) {
      throw new createError(500, {
        message: `An error occured on the server side`,
      });
    }
    return users;
  }

  update(id, updateUser) {
    const user = this.userExists({ id });
    if (!user) {
      throw new createError(404, {
        message: `User with id ${id} was not found!`,
      });
    }
    const updatedUser = userRepository.update(id, updateUser);
    if (!updatedUser) {
      throw new createError(500, {
        message: `An error occured on the server side`,
      });
    }
    return updatedUser;
  }

  remove(id) {
    const user = this.userExists({ id });
    if (!user) {
      throw new createError(404, {
        message: `User with id ${id} was not found!`,
      });
    }
    const deletedUser = userRepository.delete(id);
    if (!deletedUser) {
      throw new createError(500, {
        message: `An error occured on the server side`,
      });
    }
    return user;
  }
}

const userService = new UserService();

export { userService };
