import express , {Request, Response, NextFunction} from 'express';
import createHttpError from 'http-errors';
import globalErrorHandler from "./middlewares/globalErrorHandller";
import { addExpense } from './expenses/expenseController';





const app = express()


//routes

app.get('/', (req : Request, res : Response, next: NextFunction)  => {
    const error = createHttpError(500, 'Something went wrong')
    next(error)

    res.json({message: 'Hello World!'})

})

app.use('/expenses',addExpense)

//global error handler
app.use(globalErrorHandler)








export default app;