import { CartModel } from "../Cart/cart.model";
import { checkoutModel } from "../checkout/checkout.model";
import { ProductsModel } from "../Products/products.model";
import { OrderModel } from "./order.model";

const postOrder = async (playLoad: any) => {
  const result = await OrderModel.create(playLoad);
  const updatesData: [{ id: string; quantity: number }] = playLoad.product.map(
    (pro: any) => ({
      id: pro.productId,
      quantity: pro.quantity,
    })
  );
 // ! decrement products quantity after booking
  for (const item of updatesData) {
    const products = await ProductsModel.findById(item.id);
    await ProductsModel.updateOne(
      { _id: item.id },
      { quantity: products!.quantity - item.quantity }
    );
  }

  //! delete booking products from cart 

  for (const product of updatesData){
    await CartModel.findOneAndDelete({productId:product.id})
  }
  for (const product of updatesData){
    await checkoutModel.findOneAndDelete({productId:product.id})
  }

  return result;
};

export const orderService = {
  postOrder,
};
