import express, { Request, Response } from "express";
import { userRouter } from "./app/modules/Users/user.route";
import cors from "cors";
import { authRouter } from "./app/modules/Auth/Auth.route";
import { productsRouter } from "./app/modules/Products/products.route";
import { categoriesRoute } from "./app/modules/Categories/categories.route";
import { cartRouter } from "./app/modules/Cart/cart.route";
import { checkoutRouter } from "./app/modules/checkout/checkout.route";
import { orderRouter } from "./app/modules/Orders/order.route";
const app = express();
app.use(cors());
app.use(express.json());
app.get('/',(req:Request,res:Response)=>{
  res.send('All Ok')
})
app.use(
  "/api",
  userRouter,
  authRouter,
  productsRouter,
  categoriesRoute,
  cartRouter,
  checkoutRouter,
  orderRouter
);

export default app;
