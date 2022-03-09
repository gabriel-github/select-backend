import { PersonRepository } from "../../infra/mongoose/repositories/PersonRepository";
import { CreatePersonController } from "./CreatePersonController";
import { CreatePersonUseCase } from "./CreatePersonUseCase";

const personRepository = new PersonRepository();
const createPersonUseCase = new CreatePersonUseCase(personRepository);

const createPersonController = new CreatePersonController(createPersonUseCase);

export { createPersonController };
