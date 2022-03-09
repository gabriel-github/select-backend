import { Router } from "express";
import { listPersonController } from "../../../../modules/tasks/useCases/listPerson";
import { createPersonController } from "../../../../modules/tasks/useCases/saveName";
import { updateAndInsertController } from "../../../../modules/tasks/useCases/updateAndInsert";

const personRoutes = Router();

personRoutes.get("/", (request, response) => {
  return listPersonController.handle(request, response);
});

personRoutes.post("/create", (request, response) => {
  return createPersonController.handle(request, response);
});

personRoutes.post("/update/:id", (request, response) => {
  return updateAndInsertController.handle(request, response);
});

export { personRoutes };
