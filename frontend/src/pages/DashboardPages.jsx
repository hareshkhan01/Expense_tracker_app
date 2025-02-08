import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SimpleAreaChart from "../components/SimpleAreaChart";
import SimplePieChart from "../components/PieChart";
import ExpenseCard from "../components/ExpenseCard";

const Dashboard = () => {
  return (
    <div className="flex h-full w-full bg-gray-900 text-white">
      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Navbar */}
        <header className="bg-white/10 shadow-lg p-4 rounded-lg flex justify-between items-center backdrop-blur-md">
          <h2 className="text-2xl font-bold tracking-wide">Dashboard</h2>
          <Button variant="destructive" className="bg-red-600 hover:bg-red-700">
            Logout
          </Button>
        </header>

        {/* Dashboard Content */}
        <div className="mt-8 grid grid-cols-3 gap-6">
          {/* Stats Cards */}
          <Card className="bg-gray-800 shadow-lg rounded-xl p-4">
            <CardHeader>
              <CardTitle className="text-gray-300">Total Expenses</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-extrabold text-orange-400">$1,254</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="mt-8 grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <Card className="bg-gray-800 shadow-md rounded-lg p-4">
              <CardHeader>
                <CardTitle className="text-gray-300">Expense Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <SimpleAreaChart />
              </CardContent>
            </Card>
          </div>
          <div className="col-span-1">
            <Card className="bg-gray-800 shadow-md rounded-lg p-4">
              <CardHeader>
                <CardTitle className="text-gray-300">Expense Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <SimplePieChart />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Expense List */}
        <div className="mt-8">
          <ExpenseCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
