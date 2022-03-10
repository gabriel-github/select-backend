import { Request, Response } from "express";
import { SaveGoalUseCase } from "./SaveGoalUseCase";

class SaveGoalController {
  constructor(private saveGoalUseCase: SaveGoalUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, dateInit, dateFinal, goal, type } = request.body;

    try {
      const person = await this.saveGoalUseCase.execute({
        name,
        dateInit,
        dateFinal,
        goal,
        type,
      });

      return response.status(201).json(person);
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }
}

export { SaveGoalController };
