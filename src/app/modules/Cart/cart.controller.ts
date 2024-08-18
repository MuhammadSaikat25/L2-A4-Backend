import { RequestHandler } from "express";
import { cartService } from "./cart.service";

const addToCart: RequestHandler = async (req, res) => {
  try {
    const result = await cartService.addToCart(req.body);
    res.json({
      success: true,
      data: result,
    });
  } catch (error) {}
};
const getSingleCart: RequestHandler = async (req, res) => {
  try {
    const result = await cartService.getSingleCart(req.params.id);
    res.json({
      data: result,
    });
  } catch (error) {}
};
const getUserAllCart: RequestHandler = async (req, res) => {
  const user = req.params.user;

  try {
    const result = await cartService.getUserAllCart(user);
    res.json({
      data: result,
    });
  } catch (error) {}
};
const deleteCart: RequestHandler = async (req, res) => {
  const id = req.params.id
  const user=req.params.user
  try {
    const result = await cartService.deleteCart(id,user);
    res.json({
      data: result,
    });
  } catch (error) {}
};

const incrementQuantity: RequestHandler = async (req, res) => {
  try {
    const result = await cartService.incrementQuantity(req.params.id);
    res.json({
      data: result,
    });
  } catch (error) {}
};
const decrementQuantity: RequestHandler = async (req, res) => {
  try {
    const result = await cartService.decrementQuantity(req.params.id);
    res.json({
      data: result,
    });
  } catch (error) {}
};
export const cartController = {
  addToCart,
  getSingleCart,
  getUserAllCart,
  deleteCart,
  incrementQuantity,
  decrementQuantity,
};
