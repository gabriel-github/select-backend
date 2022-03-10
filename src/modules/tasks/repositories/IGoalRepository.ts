export interface IGoalDTO {
  name: string;
  dateInit: Date;
  dateFinal: Date;
  goal: number;
  type: "curtidas" | "seguidores";
}

export interface IUpdateGoalDTO {
  id: string;
  numberOfData: number;
}

export interface IGoal {
  name: string;
  dateInit: string;
  dateFinal: string;
  goal: number;
  type: string;
  goalData: number[];
  created_at: string;
}

export interface IGoalRepository {
  create(data: IGoalDTO): Promise<void>;
  update({ id, numberOfData }: IUpdateGoalDTO): Promise<void>;
  list(): Promise<IGoal[]>;
}
