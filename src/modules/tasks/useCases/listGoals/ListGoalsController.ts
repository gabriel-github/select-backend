import { Request, Response } from "express";
import { ListGoalsUseCase } from "./ListGoalsUseCase";

class ListGoalsController {
  constructor(private listGoalsUseCase: ListGoalsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const goals = await this.listGoalsUseCase.execute();

      return response.json(goals);
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }
}

export { ListGoalsController };
