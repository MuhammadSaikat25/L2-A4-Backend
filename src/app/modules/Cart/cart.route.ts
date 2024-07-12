import {Router} from 'express'
import { cartController } from './cart.controller'

const router=Router()

router.post('/addToCart',cartController.addToCart)
router.get('/get-cart/:id',cartController.getSingleCart)
router.get('/get/:user',cartController.getUserAllCart)
router.delete('/delete-cart/:id',cartController.deleteCart)
router.patch('/increment-quantity/:id',cartController.incrementQuantity)
router.patch('/decrement-quantity/:id',cartController.decrementQuantity)

export const cartRouter=router