import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import SimpleAreaChart from '../components/SimpleAreaChart'
import SimplePieChart from '../components/PieChart'
import ExpenseCard from '../components/ExpenseCard'
import { FaArrowLeft } from "react-icons/fa6";
import { useState, useEffect } from 'react'

const Dashboard = () => {
  const [expenses, setExpenses] = useState([])

  // Here the expenses will be fetched from the backend
  /*
  useEffect(() => {
    const fetchExpenses = async () => {
      try {
      } catch (error) {
        
      }
    };
  
    fetchExpenses();
  }, []);
  */

  // Function to calculate total expense amount
  const getTotalExpenseAmount = () => {
    return expenses.reduce((total, expense) => total + expense.amount, 0)
  }
  return (
    <div className="flex flex-col h-screen w-full bg-gray-900 text-white overflow-x-hidden overflow-y-auto">
      {/* Main Content */}
      <div className="flex-1 p-6 max-w-screen mx-auto">
        {/* Navbar */}
        <header className="bg-white/10 shadow-lg p-4 rounded-lg flex justify-between items-center backdrop-blur-md">
          <div className='flex gap-2'>
            <span>
              {/* After routet setup this will replced with Link */}
              <a href='/' className="bg-gray-800 hover:bg-gray-700 inline-flex items-center gap-2 px-4 py-2 rounded-lg">
                <FaArrowLeft />
                Back
              </a>
            </span>
            <h2 className="text-2xl font-bold tracking-wide">Dashboard</h2>
          </div>
          <Button variant="destructive" className="bg-red-600 hover:bg-red-700">
            Logout
          </Button>
        </header>

        {/* Dashboard Content */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Stats Cards */}
          <Card className="bg-gray-800 shadow-lg rounded-xl p-4">
            <CardHeader>
              <CardTitle className="text-gray-300">Total Expenses</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-extrabold text-orange-400">
                ${getTotalExpenseAmount}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Card className="bg-gray-800 shadow-md rounded-lg p-4">
              <CardHeader>
                <CardTitle className="text-gray-300">Expense Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <SimpleAreaChart expenses={expenses} />{' '}
                {/*Pass the expenses data as props*/}
              </CardContent>
            </Card>
          </div>
          <div className="md:col-span-1">
            <Card className="bg-gray-800 shadow-md rounded-lg p-4">
              <CardHeader>
                <CardTitle className="text-gray-300">
                  Expense Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <SimplePieChart expenses={expenses} />{' '}
                {/*Pass the expenses data as props*/}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Expense List - Scrollable */}
        <div className="mt-8 flex flex-wrap gap-3 ">
          {/* Use map function and Pass the expenses data as props */}
          {expenses.map((expense, index) => (
            <ExpenseCard key={index} expense={expense} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
