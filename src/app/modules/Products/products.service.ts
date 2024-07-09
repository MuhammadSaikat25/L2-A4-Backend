import { TProducts } from "./products.interface";
import { ProductsModel } from "./products.model";

const createProducts = async (palyLoad: TProducts) => {
  const result = await ProductsModel.create(palyLoad);
  return result;
};

export const productsService = {
  createProducts,
};
