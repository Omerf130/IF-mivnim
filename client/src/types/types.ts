export interface IHouseInput {
  title: string;
  subtitle: string;
  body: string
  image: string[];
}

export interface IHouse extends IHouseInput {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IHouseResponse {
  message: string
  list: IHouse[]
}

export interface IHouseItemResponse {
  message: string
  item: IHouse
}
