import { TCart } from "./cart.interface";
import { CartModel } from "./cart.model";

const addToCart = async (playLoad: TCart) => {
  let result;
  const isProductsExistCart = await CartModel.findOne({
    productId: playLoad.productId,
  });
  if (await isProductsExistCart) {
    result = await CartModel.findOneAndUpdate(
      { productId: playLoad.productId },
      { quantity: isProductsExistCart!.quantity + 1 }
    );
    return result;
  }
  result = await CartModel.create(playLoad);
  return result;
};

const getSingleCart = async (id: string) => {
  const result = await CartModel.findOne({ productId: id });
  return result;
};

const getUserAllCart = async (user: string) => {
  const result = await CartModel.find({ user });
  return result;
};

const deleteCart = async (id: string) => {
  const result = await CartModel.findByIdAndDelete(id);
  return result;
};
const incrementQuantity = async (id: string) => {
  const isProductsExistCart = await CartModel.findById(id);
  if (!isProductsExistCart) {
    return;
  }
  const result = await CartModel.findByIdAndUpdate(id, {
    quantity: isProductsExistCart.quantity + 1,
  });
  return result;
};

const decrementQuantity = async (id: string) => {
  const isProductsExistCart = await CartModel.findById(id);
  if (!isProductsExistCart) {
    return;
  }
  const result = await CartModel.findByIdAndUpdate(id, {
    quantity: isProductsExistCart.quantity - 1,
  });
  return result;
};
export const cartService = {
  addToCart,
  getSingleCart,
  getUserAllCart,
  deleteCart,
  incrementQuantity,
  decrementQuantity,
};
