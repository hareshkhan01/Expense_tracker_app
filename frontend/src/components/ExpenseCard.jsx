import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { MdDelete } from "react-icons/md";




export function ExpenseCard({ className, ...props }) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>Expense Title</CardTitle>
        <CardDescription>Expense Description Will be here</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          <h1 className="font-bold">Expense Amount</h1>
          <h1 className="font-bold">Expense Date</h1>
          <h1 className="font-bold">Expense Category</h1>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          Delete <MdDelete/>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ExpenseCard
