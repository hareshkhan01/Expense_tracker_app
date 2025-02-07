

// src/models/Expense.ts
import { Schema, model, Document } from 'mongoose';

export interface IExpense extends Document {
  amount: number;
  description: string;
  date: Date;
  category: string;
}

const expenseSchema = new Schema<IExpense>(
  {
    amount: { type: Number, required: true, default: 0 },
    date: { type: Date, required: true },
    category: { type: String, required: true }
  },
  {
    timestamps: true // This will automatically add createdAt and updatedAt fields.
  }
);

const Expense = model<IExpense>('Expense', expenseSchema);

export default Expense;

