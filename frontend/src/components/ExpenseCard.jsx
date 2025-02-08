import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MdDelete } from "react-icons/md";

export function ExpenseCard({expense}) {
  return (
    <Card className="w-[380px] bg-gray-800 text-white shadow-lg rounded-xl" >
      {/* Header */}
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-200">
          Expense Title
        </CardTitle>
        <CardDescription className="text-gray-400">
          {expense.description}
        </CardDescription>
      </CardHeader>

      {/* Content */}
      <CardContent className="grid gap-4">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Amount:</span>
            <span className="text-lg font-bold text-orange-400">${expense.amount}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Date:</span>
            <span className="text-gray-300">{expense.date}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Category:</span>
            <span className="text-gray-300">{expense.category}</span>
          </div>
        </div>
      </CardContent>

      {/* Footer with Delete Button */}
      <CardFooter>
        <Button className="w-full bg-red-600 hover:bg-red-700 text-white flex items-center gap-2">
          <MdDelete className="text-xl" /> Delete
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ExpenseCard;
