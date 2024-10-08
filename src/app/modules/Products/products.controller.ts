import { Request, RequestHandler, Response } from "express";
import { productsService } from "./products.service";
import { ProductsModel } from "./products.model";

const createProducts = async (req: Request, res: Response) => {
  const data = req.body;
  try {
    const result = await productsService.createProducts(data);
    res.status(200).json({
      success: true,
      message: "Products create successful",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const result = await productsService.getSingleProduct(id);
    res.status(200).json({
      success: true,
      message: "Product has been found",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  const { sort } = req.query;
  try {
    const result = await productsService.getAllProducts(sort);
    res.status(200).json({
      success: true,
      message: "Products has been found",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getRelatedProducts: RequestHandler = async (req, res) => {
  const name = req.params.categories;
  const { sort } = req.query;
  try {
    const result = await productsService.getRelatedProducts(name, sort);
    res.json({
      data: result,
    });
  } catch (error) {}
};

const getMultipleRelatedProducts: RequestHandler = async (req, res) => {
  const result = await productsService.getMultipleRelatedProducts(req.body);
  res.json({
    data: result,
  });
};

const getProductsByName: RequestHandler = async (req, res) => {
  const result = await productsService.getProductsByName(req.params.name);
  res.json({
    data: result,
  });
};

const updateProducts: RequestHandler = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const result = await productsService.updateProducts(id, data);
    res.json({
      data: result,
    });
  } catch (error) {}
};

const deleteProducts: RequestHandler = async (req, res) => {
  try {
    const result = await productsService.deleteProducts(req.params.id);
    res.json({
      data: result,
    });
  } catch (error) {}
};

const getMaxProductPrice:RequestHandler=async (req, res)=>{
  const products=await ProductsModel.find()
  const maxPrice=Math.max(...products?.map((product: any) => product?.price))
  res.json({
    maxPrice
  })
}
export const productsController = {
  createProducts,
  getSingleProduct,
  getAllProducts,
  getRelatedProducts,
  getMultipleRelatedProducts,
  getProductsByName,
  updateProducts,
  deleteProducts,
  getMaxProductPrice
};
