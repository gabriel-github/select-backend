import { IGoalRepository } from "../../repositories/IGoalRepository";
import { IPersonRepository } from "../../repositories/IPersonRepository";

class ListGoalsUseCase {
  constructor(private goalRepository: IGoalRepository) {}

  async execute() {
    return await this.goalRepository.list();
  }
}

export { ListGoalsUseCase };
