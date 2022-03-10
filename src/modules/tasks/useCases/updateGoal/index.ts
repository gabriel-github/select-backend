import { GoalRepository } from "../../infra/mongoose/repositories/GoalRepository";
import { UpdateGoalController } from "./UpdateGoalController";
import { UpdateGoalUseCase } from "./UpdateGoalUseCase";

const goalRepository = new GoalRepository();
const updateGoalUseCase = new UpdateGoalUseCase(goalRepository);

const updateGoalController = new UpdateGoalController(updateGoalUseCase);

export { updateGoalController };
