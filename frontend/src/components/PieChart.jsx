import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { useState, useEffect } from "react";

// Defined category colors
const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7300", "#d0ed57"];

const SimplePieChart = ({ expenses }) => {
  const [categoryTotalAmount, setCategoryTotalAmount] = useState({
    Entertainment: 0,
    Food: 0,
    Travel: 0,
    Utilities: 0,
    Shopping: 0,
    Others: 0,
  });

  useEffect(() => {
    const updatedCategoryTotals = {
      Entertainment: 0,
      Food: 0,
      Travel: 0,
      Utilities: 0,
      Shopping: 0,
      Others: 0,
    };

    expenses.forEach((expense) => {
      const category = expense.category;
      const amount = parseFloat(expense.amount) || 0;

      if (category in updatedCategoryTotals) {
        updatedCategoryTotals[category] += amount;
      } else {
        updatedCategoryTotals.Others += amount; // Default to 'Others' if an unknown category appears
      }
    });

    setCategoryTotalAmount(updatedCategoryTotals);
  }, [expenses]); // Now updates when `expenses` change

  // Convert object to array for Recharts
  const data01 = Object.keys(categoryTotalAmount).map((category) => ({
    name: category,
    value: categoryTotalAmount[category],
  }));

  // Prevent chart from breaking if all values are 0
  if (data01.every((item) => item.value === 0)) {
    return <p>No data available</p>;
  }

  return (
    <PieChart width={730} height={350}>
      <Pie
        data={data01}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={100}
        label={({ name }) => name} // Display category names
      >
        {data01.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip /> {/* Shows values on hover */}
    </PieChart>
  );
};

export default SimplePieChart;
