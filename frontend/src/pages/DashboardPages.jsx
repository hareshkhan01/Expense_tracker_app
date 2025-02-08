import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import SimpleAreaChart from '../components/SimpleAreaChart'
import SimplePieChart from '../components/PieChart'
import ExpenseCard from '../components/ExpenseCard'
const Dashboard = () => {

  return (
    <div className="flex h-full bg-gray-900">
      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6">
        {/* Navbar */}
        <header className="bg-white shadow-md p-4 rounded-md flex justify-between">
          <h2 className="text-xl font-semibold">Dashboard</h2>
          <Button variant="destructive" lassName="bg-orange-600">
            Logout
          </Button>
        </header>

        {/* Dashboard Content */}
       
          <div className="mt-6 grid grid-cols-3 gap-6">
            {/* Stats Cards */}
            <Card>
              <CardHeader>
                <CardTitle>Total Expenses</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">1,254</p>
              </CardContent>
            </Card>
          </div>
          
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <SimpleAreaChart />
          </div>
          <div className="col-span-1">
            <SimplePieChart />
          </div>
        </div>
        <div>
            <ExpenseCard />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
