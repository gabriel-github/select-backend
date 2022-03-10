import { GoalRepository } from "../../infra/mongoose/repositories/GoalRepository";
import { SaveGoalController } from "./SaveGoalController";
import { SaveGoalUseCase } from "./SaveGoalUseCase";

const goalRepository = new GoalRepository();
const saveGoalUseCase = new SaveGoalUseCase(goalRepository);
const saveGoalController = new SaveGoalController(saveGoalUseCase);

export { saveGoalController };
