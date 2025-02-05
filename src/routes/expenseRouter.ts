import express from "express";
import { addExpense } from "../controllers/expenseController";
const useRouter = express.Router();
//routes

useRouter.post('/expenses',addExpense)

export default useRouter;