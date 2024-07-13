import { model, Schema } from "mongoose";
import { TCheck } from "./checkout.interface";

const checkoutSchema = new Schema<TCheck>(
  {
    productId: String,
    quantity: Number,
    user: String,
    productQuantity: Number,
    image: String,
    name: String,
    price: Number,
  },
  {
    timestamps: true,
  }
);
export const checkoutModel = model("checkout", checkoutSchema);
