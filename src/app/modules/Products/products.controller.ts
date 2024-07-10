import { Request, Response } from "express";
import { productsService } from "./products.service";

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
  try {
    const result =await productsService.getAllProducts();
    res.status(200).json({
      success: true,
      message: "Products has been found",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
export const productsController = {
  createProducts,
  getSingleProduct,
  getAllProducts
};
