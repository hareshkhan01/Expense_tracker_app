import express , {Request, Response, NextFunction} from 'express';
//import createHttpError from 'http-errors';
import globalErrorHandler from "./middlewares/globalErrorHandller";
import useRouter from './user/userRouter';
import expenseRouter from './expenses/expenseRouter';

const app = express()
app.use(express.json());

//routes

app.get('/', (req : Request, res : Response, next: NextFunction)  => {
    // const error = createHttpError(500, 'Something went wrong')
    // next(error)

    res.json({message: 'Hello World!'})

})


app.use('/api/users',useRouter)
app.use('/api',expenseRouter)
//global error handler
app.use(globalErrorHandler)








export default app;