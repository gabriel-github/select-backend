import { Request, Response } from "express";
import { UpdateGoalUseCase } from "./UpdateGoalUseCase";

class UpdateGoalController {
  constructor(private updateGoalUseCase: UpdateGoalUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { numberOfData } = request.body;

    try {
      await this.updateGoalUseCase.execute({
        id,
        numberOfData,
      });

      return response.status(204).send();
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }
}

export { UpdateGoalController };
