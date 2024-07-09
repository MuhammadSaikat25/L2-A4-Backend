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

export const productsController = {
  createProducts,
};
