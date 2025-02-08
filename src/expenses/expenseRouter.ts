import express from "express";
import { expenseController } from "./expenseController";
import authenticate from "../middlewares/authenticate";
const expenseRouter = express.Router();
//routes

expenseRouter.post('/expenses',authenticate,expenseController.postExpense)
expenseRouter.get('/allexpenses',authenticate,expenseController.getExpenses)
expenseRouter.put('/expenses/:id',authenticate,expenseController.updateExpense)
expenseRouter.delete('/expenses/:id',authenticate,expenseController.deleteExpense)

export default expenseRouter;