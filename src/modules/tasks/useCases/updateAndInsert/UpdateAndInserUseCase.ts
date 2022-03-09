import { IPersonRepository } from "../../repositories/IPersonRepository";

interface IRequest {
  id: string;
  newNumberSelect: number;
}

class UpdateAndInsertUseCase {
  constructor(private personRepository: IPersonRepository) {}

  async execute({ id, newNumberSelect }: IRequest) {
    const person = await this.personRepository.update({ id, newNumberSelect });

    return person;
  }
}

export { UpdateAndInsertUseCase };
