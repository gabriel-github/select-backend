import { Request, Response } from "express";
import { UpdateAndInsertUseCase } from "./UpdateAndInserUseCase";

class UpdateAndInsertController {
  constructor(private updateAndInsertUseCase: UpdateAndInsertUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { newNumberSelect } = request.body;

    try {
      const person = await this.updateAndInsertUseCase.execute({
        id,
        newNumberSelect,
      });

      return response.status(201).json(person);
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }
}

export { UpdateAndInsertController };
