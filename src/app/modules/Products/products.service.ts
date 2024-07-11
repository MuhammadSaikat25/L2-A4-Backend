import { TProducts } from "./products.interface";
import { ProductsModel } from "./products.model";

const createProducts = async (palyLoad: TProducts) => {
  const result = await ProductsModel.create(palyLoad);
  return result;
};
const getSingleProduct = async (id: string) => {
  const result = await ProductsModel.findById(id);
  return result;
};

const getAllProducts = async () => {
  const result = await ProductsModel.find();
  return result;
};

const getRelatedProducts = async (categories: string) => {
  const result = await ProductsModel.find({
    categories: { $in: categories },
  });

  return result;
};

const getMultipleRelatedProducts = async (playLoad: Array<string>) => {
  const result = await ProductsModel.find({
    categories: { $in: playLoad },
  });

  return result;
};
const getProductsByName = async (name: string) => {
  const result = await ProductsModel.findOne({ name: new RegExp(name, "i") });
  return result;
};
export const productsService = {
  createProducts,
  getSingleProduct,
  getAllProducts,
  getRelatedProducts,
  getMultipleRelatedProducts,
  getProductsByName,
};
