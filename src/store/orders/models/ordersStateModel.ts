import { InitialStateModel } from "../../models";

export interface OrderItemModel {
  id: number;
  docDate: string;
  docNum: string;
  description: string;
}

export interface OrdersStateModel extends InitialStateModel<OrderItemModel[]> {}
