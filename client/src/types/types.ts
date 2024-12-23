export interface IHouse {
  _id: string;
  title: string;
  subtitle: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IHouseResponse {
  message: string
  list: IHouse[]
}
