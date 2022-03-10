import { IGoalDTO, IGoalRepository } from "../../repositories/IGoalRepository";

class SaveGoalUseCase {
  constructor(private goalRepository: IGoalRepository) {}

  async execute(data: IGoalDTO) {
    const goal = await this.goalRepository.create(data);

    return goal;
  }
}

export { SaveGoalUseCase };
