import { TUser } from "./user.interface";
import { UserModel } from "./user.model";

const register=async(playLoad:Partial<TUser>)=>{
    const result=await UserModel.create(playLoad)
    return result
}

export const userService={
    register
}