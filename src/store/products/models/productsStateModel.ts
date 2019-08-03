import { InitialStateModel } from "../../models";
import { number } from "prop-types";

export interface ProductItemModel {
  id: number;
  name: string;
  qty: number;
  price: number;
  sum: number;
}

export interface ProductsDataModel {
  [key: number]: ProductItemModel[];
}

export interface ProductsStateModel
  extends InitialStateModel<ProductsDataModel> {}
