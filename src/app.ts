import express from "express";
import { userRouter } from "./app/modules/Users/user.route";
import cors from "cors";
import { authRouter } from "./app/modules/Auth/Auth.route";
import { productsRouter } from "./app/modules/Products/products.route";
import { categoriesRoute } from "./app/modules/Categories/categories.route";
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", userRouter, authRouter, productsRouter, categoriesRoute);

export default app;
