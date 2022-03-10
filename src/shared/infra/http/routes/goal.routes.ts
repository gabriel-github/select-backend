import { Router } from "express";
import { listGoalsController } from "../../../../modules/tasks/useCases/listGoals";
import { saveGoalController } from "../../../../modules/tasks/useCases/saveGoal";
import { updateGoalController } from "../../../../modules/tasks/useCases/updateGoal";

const goalRoutes = Router();

goalRoutes.get("/", (request, response) => {
  return listGoalsController.handle(request, response);
});

goalRoutes.post("/create", (request, response) => {
  return saveGoalController.handle(request, response);
});

goalRoutes.post("/update/:id", (request, response) => {
  return updateGoalController.handle(request, response);
});

export { goalRoutes };
