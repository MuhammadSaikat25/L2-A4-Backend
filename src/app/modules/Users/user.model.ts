import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import bcrypt from "bcrypt";

const UserSchema = new Schema<TUser>({
  name: { type: String, required: true },
  email: { type: String, required: true,unique:true },
  isDeleted: { type: Boolean, default: false },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  order: [
    {
      productId: {
        type: Schema.Types.ObjectId,
        ref: "products",
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
      price: Number,
      quantity: Number,
    },
  ],
});

UserSchema.pre("save", async function (next) {
  const user = this;
  user.password = await bcrypt.hash(user.password, 10);
  next();
});


export const UserModel = model("User", UserSchema);
