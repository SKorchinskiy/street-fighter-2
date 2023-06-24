import { fighterRepository } from "../repositories/fighterRepository.js";

class FighterService {
  create(fighterData) {
    const fighter = fighterRepository.create(fighterData);
    if (!fighter) {
      return null;
    }
    return fighter;
  }

  search(search) {
    const fighter = fighterRepository.getOne(search);
    if (!fighter) {
      return null;
    }
    return fighter;
  }

  searchAll() {
    const fighters = fighterRepository.getAll();
    if (!fighters) {
      return null;
    }
    return fighters;
  }

  update(id, fighterData) {
    const fighter = this.search({ id });
    if (!fighter) {
      return null;
    }
    const updatedFighter = fighterRepository.update(id, fighterData);
    return updatedFighter;
  }

  remove(id) {
    const fighter = this.search({ id });
    if (!fighter) {
      return null;
    }
    const deletedFighter = fighterRepository.delete(id);
    return deletedFighter;
  }
}

const fighterService = new FighterService();

export { fighterService };
