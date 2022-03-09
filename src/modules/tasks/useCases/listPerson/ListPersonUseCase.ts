import { IPersonRepository } from "../../repositories/IPersonRepository";

class ListPersonUseCase {
  constructor(private personRepository: IPersonRepository) {}

  async execute() {
    return await this.personRepository.list();
  }
}

export { ListPersonUseCase };
