import { PersonRepository } from "../../infra/mongoose/repositories/PersonRepository";
import { UpdateAndInsertController } from "./UpdateAndInserController";
import { UpdateAndInsertUseCase } from "./UpdateAndInserUseCase";

const personRepository = new PersonRepository();
const updateAndInsertUseCase = new UpdateAndInsertUseCase(personRepository);

const updateAndInsertController = new UpdateAndInsertController(
  updateAndInsertUseCase
);

export { updateAndInsertController };
