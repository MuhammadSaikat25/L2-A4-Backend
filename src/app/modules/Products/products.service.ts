import { TProducts } from "./products.interface";
import { ProductsModel } from "./products.model";

const createProducts = async (palyLoad: TProducts) => {
  const result = await ProductsModel.create(palyLoad);
  return result;
};
const getSingleProduct=async(id:string)=>{
  const result=await ProductsModel.findById(id)
  return result
}
export const productsService = {
  createProducts,
  getSingleProduct
};
