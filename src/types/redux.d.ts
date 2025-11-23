import { IProduct } from './product';

export interface IAction {
  type: string,
  payload: any,
};


export interface IEmployeeState {
  employees: [],
  idEmployeeSelected: string | null,
  isLoading: boolean
}

export interface IProductState {
  carts: [],
  products: IProduct[],
  isLoading: boolean
}

export interface IRootState {
  employee: IEmployeeState,
  product: IProductState
}