import { model, Schema } from "mongoose";
import { TProducts } from "./products.interface";

const ProductsSchema = new Schema<TProducts>(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    categories: [{ type: String, required: true }],
    description: { type: String, required: true },
    section: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const ProductsModel = model("products", ProductsSchema);
