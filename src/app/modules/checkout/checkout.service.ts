import { TCheck } from "./checkout.interface";
import { checkoutModel } from "./checkout.model";

const postCheckout=async(playLoad:TCheck)=>{
    const result=await checkoutModel.create(playLoad)
    return result
}
const getUserCheckoutData=async(user:string)=>{
    const result=await checkoutModel.find({user})
    return result
}
export const checkoutService={
    postCheckout,
    getUserCheckoutData
}