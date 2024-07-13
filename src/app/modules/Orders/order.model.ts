import { model, Schema } from "mongoose";

const OrderSchema = new Schema(
  {
    product: [],
    user: Object,
    payments_type: { type: String, default: "Cash on delivery" },
    total_Cost:Number
  },
  {
    timestamps: true,
  }
);

export const OrderModel=model('order',OrderSchema)