import { RequestHandler } from "express";
import { orderService } from "./order.service";

const postOrder: RequestHandler = async (req, res) => {
  const data = req.body;
 
  try {
    const result = await orderService.postOrder(data);
    res.json({
      data: result,
    });
  } catch (error) {}
};

export const orderController = {
  postOrder,
};
