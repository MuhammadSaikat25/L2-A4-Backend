import {Router} from "express"
import { orderController } from "./order.controller"
const router=Router()
router.post('/conform-order',orderController.postOrder)

export const orderRouter=router