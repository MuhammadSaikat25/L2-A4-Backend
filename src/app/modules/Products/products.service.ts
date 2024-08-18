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

const getAllProducts = async (sort?: any) => {
  let sortOption = {};

  if (sort === "ascending") {
    sortOption = { price: 1 };
  } else if (sort === "descending") {
    sortOption = { price: -1 };
  }

  const result = await ProductsModel.find().sort(sortOption);
  return result;
};

const getRelatedProducts = async (categories: string, sort?: any) => {
  let sortOption = {};

  if (sort === "ascending") {
    sortOption = { price: 1 };
  } else if (sort === "descending") {
    sortOption = { price: -1 };
  }

  const result = await ProductsModel.find({
    categories: { $in: categories },
  }).sort(sortOption);

  return result;
};

const getMultipleRelatedProducts = async (playLoad: Array<string>) => {
  const result = await ProductsModel.find({
    categories: { $in: [...playLoad] },
  });

  return result;
};

const getProductsByName = async (name: string) => {
  const result = await ProductsModel.find({ name: new RegExp(name, "i") });

  return result;
};
const updateProducts = async (id: string, playLoad: Partial<TProducts>) => {
  const { name, price, image, quantity, section, description, categories } =
    playLoad;
  const result = await ProductsModel.findByIdAndUpdate(id, {
    name,
    price,
    image,
    quantity,
    section,
    description,
    categories,
  });
  return result;
};
const deleteProducts = async (id: string) => {
  const result = await ProductsModel.findByIdAndDelete(id);
  return result;
};
export const productsService = {
  createProducts,
  getSingleProduct,
  getAllProducts,
  getRelatedProducts,
  getMultipleRelatedProducts,
  getProductsByName,
  updateProducts,
  deleteProducts,
};
