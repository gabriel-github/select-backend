import { Goal } from "../../../entities/Goal";
import {
  IGoal,
  IGoalDTO,
  IGoalRepository,
  IUpdateGoalDTO,
} from "../../../repositories/IGoalRepository";

class GoalRepository implements IGoalRepository {
  async create(data: IGoalDTO): Promise<void> {
    const GoalData = Goal.create({
      name: data.name,
      dateInit: data.dateInit,
      dateFinal: data.dateFinal,
      goal: data.goal,
      type: data.type,
    });

    return GoalData;
  }

  async update({ id, numberOfData }: IUpdateGoalDTO): Promise<void> {
    const GoalData = await Goal.updateOne(
      { _id: id },
      { $push: { goalData: numberOfData } }
    );
  }

  async list(): Promise<IGoal[]> {
    return await Goal.find();
  }
}

export { GoalRepository };
