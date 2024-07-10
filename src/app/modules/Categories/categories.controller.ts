import { Request, RequestHandler, Response } from "express";
import { categoriesService } from "./categories.service";

const getAllCategories = async (req: Request, res: Response) => {
  try {
    const result = await categoriesService.getAllCategories()
    res.status(200).json({
        success:true,
        message:"Categories has been found",
        data:result
    })
  } catch (error) {
    console.log(error)
  }
};


const getSingleCategories:RequestHandler=async(req,res)=>{
  const id=req.params.id
  try {
    const result=await categoriesService.getSingleCategories(id)
    res.status(200).json({
      success:true,
      message:"Categories has been found",
      data:result

    })
  } catch (error) {
      console.log(error)
  }
}

export const categoriesController = {
  getAllCategories,
  getSingleCategories
};
