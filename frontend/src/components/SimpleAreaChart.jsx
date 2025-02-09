import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useState, useEffect } from "react";

const SimpleAreaChart = ({ expenses }) => {
  const [monthWiseExpense, setMonthWiseExpense] = useState({
    January: 0,
    February: 0,
    March: 0,
    April: 0,
    May: 0,
    June: 0,
    July: 0,
    August: 0,
    September: 0,
    October: 0,
    November: 0,
    December: 0,
  });

  useEffect(() => {
    const updatedExpenses = { ...monthWiseExpense };

    expenses?.map((expense) => {
      const date = new Date(expense.date);
      const monthIndex = date.getMonth(); // Get month index (0-11)
      const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      const month = monthNames[monthIndex];
      const amount = parseFloat(expense.amount);

      updatedExpenses[month] += amount;
    });

    setMonthWiseExpense(updatedExpenses);
  }, [expenses]);

  // Convert monthWiseExpense to an array for Recharts
  const chartData = Object.keys(monthWiseExpense).map((month) => ({
    month,
    expense: monthWiseExpense[month],
  }));

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <AreaChart
          data={chartData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="expense" stroke="#e63c3c" fill="#e63c3c" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleAreaChart;
