import { OrderItemModel } from "@store/orders/models";
import { ProductsDataModel } from "@store/products/models";

export interface OrdersContainerProps {
  orders: OrderItemModel[];
  products: ProductsDataModel;
  dispatch: any;
}
