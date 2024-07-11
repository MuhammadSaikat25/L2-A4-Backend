import { CategoriesModel } from "./categories.model"


const getAllCategories=async()=>{
    const result=await CategoriesModel.find()
    return result
}

const getSingleCategories=async(name:string)=>{
    const result=await CategoriesModel.findOne({name})
    return result
}
export const categoriesService={
    getAllCategories,
     getSingleCategories
}