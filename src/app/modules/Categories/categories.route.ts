import { Router } from "express";
import { categoriesController } from "./categories.controller";

const router = Router();

router.get("/get-categories", categoriesController.getAllCategories);
router.get('/categories/:id',categoriesController.getSingleCategories)
export const categoriesRoute = router;
