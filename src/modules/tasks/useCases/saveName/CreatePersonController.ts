import { CreatePersonUseCase } from "./CreatePersonUseCase";
import { Request, Response } from "express";

class CreatePersonController {
  constructor(private createPersonUseCase: CreatePersonUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    try {
      const person = await this.createPersonUseCase.execute(name);

      return response.status(201).json(person);
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }
}

export { CreatePersonController };
