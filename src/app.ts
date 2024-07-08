import express from 'express'
import { userRouter } from './app/modules/Users/user.route'
const app = express()

app.use(express.json())

app.use("/api",userRouter)





export default app