import express from "express";
import { expenseController } from "./expenseController";
import authenticate from "../middlewares/authenticate";
const expenseRouter = express.Router();
//routes

expenseRouter.post('/expenses',authenticate,expenseController.postExpense)

export default expenseRouter;