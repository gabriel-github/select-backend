import { IGoalRepository } from "../../repositories/IGoalRepository";

interface IRequest {
  id: string;
  numberOfData: number;
}

class UpdateGoalUseCase {
  constructor(private goalRepository: IGoalRepository) {}

  async execute({ id, numberOfData }: IRequest) {
    await this.goalRepository.update({ id, numberOfData });
  }
}

export { UpdateGoalUseCase };
