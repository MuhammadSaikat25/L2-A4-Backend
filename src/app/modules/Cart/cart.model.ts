import { model, Schema } from "mongoose";
import { TCart } from "./cart.interface";

const CartSchema=new Schema<TCart>({
    productId:String,
     quantity:Number,
     user:String,
     productQuantity:Number,
     image:String,
     name:String,
     price:Number
},
{
    timestamps:true
})


export const CartModel=model('cart',CartSchema)