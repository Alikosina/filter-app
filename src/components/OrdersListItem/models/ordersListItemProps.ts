import { OrderItemModel } from "@store/orders/models";
import { ProductItemModel } from "@store/products/models";

export interface OrdersListItemProps {
  order: OrderItemModel;
  products: ProductItemModel[];
  onClick: any;
}
