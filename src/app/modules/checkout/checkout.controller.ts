import { RequestHandler } from "express";
import { checkoutService } from "./checkout.service";

const postCheckout: RequestHandler = async (req, res) => {
  try {
    const result = await checkoutService.postCheckout(req.body);
    res.json({
      data: result,
    });
  } catch (error) {}
};
const getUserCheckProducts: RequestHandler = async (req, res) => {
  try {
    const result = await checkoutService.getUserCheckoutData(req.params.user);
    res.json({
      data: result,
    });
  } catch (error) {}
};
export const checkoutController = {
  postCheckout,
  getUserCheckProducts,
};
