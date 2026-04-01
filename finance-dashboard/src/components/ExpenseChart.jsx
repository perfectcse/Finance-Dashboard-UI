import { useContext, useMemo } from "react";
import { FinanceContext } from "../context/FinanceContext";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = ["#0088FE", "#FF8042", "#00C49F", "#FFBB28", "#AF19FF"];

const ExpenseChart = () => {
  const { transactions } = useContext(FinanceContext);

  const expenseData = useMemo(() => {
    const expenses = transactions.filter((t) => t.type === "expense");

    const categoryMap = {};

    expenses.forEach((expense) => {
      categoryMap[expense.category] =
        (categoryMap[expense.category] || 0) + expense.amount;
    });

    return Object.keys(categoryMap).map((category) => ({
      name: category,
      value: categoryMap[category],
    }));
  }, [transactions]);

  return (
    <div className="chart-box">
      <h3>Spending Breakdown</h3>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={expenseData}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            label
          >
            {expenseData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseChart;