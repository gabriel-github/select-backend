import { IPersonRepository } from "../../repositories/IPersonRepository";

class CreatePersonUseCase {
  constructor(private personRepository: IPersonRepository) {}

  async execute(name: string) {
    const person = await this.personRepository.create(name);

    return person;
  }
}

export { CreatePersonUseCase };
