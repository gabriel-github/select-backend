import { Person } from "../../../entities/Person";
import {
  IPersonRepository,
  IUpdateDTO,
} from "../../../repositories/IPersonRepository";

export interface IPerson {
  _id: string;
  name: string;
  created_at: string;
}

class PersonRepository implements IPersonRepository {
  async create(name: string): Promise<IPerson> {
    const person = await Person.create({ name });

    return person;
  }

  async list(): Promise<IPerson[]> {
    const persons = await Person.find();

    return persons;
  }

  async update({ id, newNumberSelect }: IUpdateDTO): Promise<void> {
    await Person.updateOne(
      { _id: id },
      { $push: { information: newNumberSelect } }
    );
  }
}

export { PersonRepository };
