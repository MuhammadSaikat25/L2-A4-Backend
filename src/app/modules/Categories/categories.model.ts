import { model, Schema } from "mongoose";
import { TCategories } from "./categories.interface";

const CategoriesSchema = new Schema<TCategories>({
  name: { type: String, required: true },
});

export const CategoriesModel = model("categories", CategoriesSchema);
