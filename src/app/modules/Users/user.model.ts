import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import bcrypt from "bcrypt";

const UserSchema = new Schema<TUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    isDeleted: { type: Boolean, default: false },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  const user = this;
  user.password = await bcrypt.hash(user.password, 10);
  next();
});

export const UserModel = model("User", UserSchema);
