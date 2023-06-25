import { fighterRepository } from "../repositories/fighterRepository.js";
import createError from "http-errors";

class FighterService {
  create(fighterData) {
    const { name } = fighterData;
    const nameOverlap = this.existsWithParams({ name });
    if (nameOverlap) {
      throw new createError(400, {
        message: `Fighter with provided name ${name} already exists`,
      });
    }
    const fighter = fighterRepository.create(fighterData);
    if (!fighter) {
      throw new createError(500, {
        message: `An error occured on the server side`,
      });
    }
    return fighter;
  }

  existsWithParams(param) {
    const fighter = fighterRepository.getOne(param);
    return fighter ? true : false;
  }

  search(search) {
    const fighter = fighterRepository.getOne(search);
    if (!fighter) {
      throw new createError(404, {
        message: `Fighter with provided search params was not found!`,
      });
    }
    return fighter;
  }

  searchAll() {
    const fighters = fighterRepository.getAll();
    return fighters;
  }

  update(id, fighterData) {
    const fighter = this.existsWithParams({ id });
    if (!fighter) {
      throw new createError(404, {
        message: `User with provided id ${id} was not found!`,
      });
    }
    const updatedFighter = fighterRepository.update(id, fighterData);
    if (!updatedFighter) {
      throw new createError(500, {
        message: `An error occured on the server side`,
      });
    }
    return updatedFighter;
  }

  remove(id) {
    const fighter = this.existsWithParams({ id });
    if (!fighter) {
      throw new createError(404, {
        message: `User with provided id ${id} was not found!`,
      });
    }
    const deletedFighter = fighterRepository.delete(id);
    if (!deletedFighter) {
      throw new createError(500, {
        message: `An error occured on the server side!`,
      });
    }
    return deletedFighter;
  }
}

const fighterService = new FighterService();

export { fighterService };
