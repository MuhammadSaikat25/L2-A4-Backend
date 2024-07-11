import { Router } from "express";
import { productsController } from "./products.controller";
import validateUserData from "../../middlewares/validation";
import { productsValidation } from "./products.validation";
const router = Router();

router.post(
  "/create-products",
  validateUserData(productsValidation),
  productsController.createProducts
);
router.get('/get-products/:categories',productsController.getRelatedProducts)
router.get('/get-product/:id',productsController.getSingleProduct)
router.get('/products',productsController.getAllProducts)
router.get('/get-products/:name',productsController.getProductsByName)
router.post('/get-Hello',productsController.getMultipleRelatedProducts)
export const productsRouter = router;
