import { Request, Response } from "express";
import { ListPersonUseCase } from "./ListPersonUseCase";

class ListPersonController {
  constructor(private listPersonUseCase: ListPersonUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const persons = await this.listPersonUseCase.execute();

      return response.json(persons);
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }
}

export { ListPersonController };
