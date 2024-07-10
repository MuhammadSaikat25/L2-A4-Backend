import { CategoriesModel } from "./categories.model"


const getAllCategories=async()=>{
    const result=await CategoriesModel.find()
    return result
}

const getSingleCategories=async(id:string)=>{
    const result=await CategoriesModel.findById(id)
    return result
}
export const categoriesService={
    getAllCategories,
     getSingleCategories
}