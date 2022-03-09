import { IPerson } from "../infra/mongoose/repositories/PersonRepository";

export interface IUpdateDTO {
  id: string;
  newNumberSelect: number;
}

interface IPersonRepository {
  create(name: string): Promise<IPerson>;
  list(): Promise<IPerson[]>;
  update({ id, newNumberSelect }: IUpdateDTO): Promise<void>;
}

export { IPersonRepository };
