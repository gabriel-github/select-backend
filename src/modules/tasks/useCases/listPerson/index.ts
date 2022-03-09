import { PersonRepository } from "../../infra/mongoose/repositories/PersonRepository";
import { ListPersonController } from "./ListPersonController";
import { ListPersonUseCase } from "./ListPersonUseCase";

const personRepository = new PersonRepository();
const listPersonUseCase = new ListPersonUseCase(personRepository);

const listPersonController = new ListPersonController(listPersonUseCase);

export { listPersonController };
