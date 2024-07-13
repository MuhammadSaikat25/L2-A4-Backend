import {Router} from 'express'
import { checkoutController } from './checkout.controller'

const router=Router()

router.post('/checkout',checkoutController.postCheckout)
router.get('/get-checkout/:user',checkoutController.getUserCheckProducts)

export const checkoutRouter=router