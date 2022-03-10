import { GoalRepository } from "../../infra/mongoose/repositories/GoalRepository";
import { ListGoalsController } from "./ListGoalsController";
import { ListGoalsUseCase } from "./ListGoalsUseCase";

const goalRepository = new GoalRepository();
const listGoalsUseCase = new ListGoalsUseCase(goalRepository);

const listGoalsController = new ListGoalsController(listGoalsUseCase);

export { listGoalsController };
