import express, { Request, Response, NextFunction } from 'express'
//import createHttpError from 'http-errors';
import globalErrorHandler from './middlewares/globalErrorHandller'
import useRouter from './user/userRouter'
import expenseRouter from './expenses/expenseRouter'
import cors from 'cors'
import { config } from './config/config'

const app = express()

app.use(
  cors({
    origin: config.frontendURL,
  }),
)

app.use(express.json()); // ✅ This is necessary to parse JSON request bodies
app.use(express.urlencoded({ extended: true }));

//routes

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  // const error = createHttpError(500, 'Something went wrong')
  // next(error)

  res.json({ message: 'Hello World!' })
})

app.use('/api/users', useRouter)
app.use('/api', expenseRouter)
//global error handler
app.use(globalErrorHandler)

export default app
