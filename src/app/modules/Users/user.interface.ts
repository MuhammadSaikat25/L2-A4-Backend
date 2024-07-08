import { Model, Types } from "mongoose";

export interface TUser {
  name: string;
  email: string;
  order: [
    {
      productId: Types.ObjectId;
      user: Types.ObjectId;
      price: number;
      quantity: number;
    }
  ];
  password: string;
  role: "user" | "admin";
  isDeleted: boolean;
}

export interface UserModel extends Model<TUser> {
  isUserExistsByCustomId(id: string): Promise<TUser>;

  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string
  ): Promise<boolean>;
}
