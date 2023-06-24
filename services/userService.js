import { userRepository } from "../repositories/userRepository.js";

class UserService {
  create(userData) {
    const user = userRepository.create(userData);
    if (!user) {
      return null;
    }
    return user;
  }

  search(params) {
    const user = userRepository.getOne(params);
    if (!user) {
      return null;
    }
    return user;
  }

  searchAll() {
    const users = userRepository.getAll();
    if (!users) {
      return null;
    }
    return users;
  }

  update(id, updateUser) {
    const user = userRepository.getOne({ id });
    if (!user) {
      return null;
    }
    const updatedUser = userRepository.update(id, updateUser);
    return updatedUser;
  }

  remove(id) {
    const user = this.search({ id });
    if (!user) {
      return null;
    }
    userRepository.delete(id);
    return user;
  }
}

const userService = new UserService();

export { userService };
