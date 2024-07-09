import express from 'express'
import { userRouter } from './app/modules/Users/user.route'
import { ErrorHandler } from './utils/ErrorHandler'
import { authRouter } from './app/modules/Auth/Auth.route'
import { productsRouter } from './app/modules/Products/products.route'
const app = express()

app.use(express.json())

app.use("/api",userRouter)

app.use('/api',authRouter)

app.use("/api",productsRouter)

// app.use(ErrorHandler);

export default app