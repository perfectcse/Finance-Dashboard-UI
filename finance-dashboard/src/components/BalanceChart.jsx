import { useContext, useMemo } from "react";
import { FinanceContext } from "../context/FinanceContext";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const BalanceChart = () => {
  const { transactions } = useContext(FinanceContext);

  const chartData = useMemo(() => {
    const sorted = [...transactions].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );

    return sorted.reduce((acc, transaction) => {
      const lastBalance = acc.length ? acc[acc.length - 1].balance : 0;

      const newBalance =
        transaction.type === "income"
          ? lastBalance + transaction.amount
          : lastBalance - transaction.amount;

      acc.push({
        date: transaction.date,
        balance: newBalance,
      });

      return acc;
    }, []);
  }, [transactions]);

  return (
    <div className="chart-box">
      <h3>Balance Trend</h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="balance"
            stroke="#4CAF50"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BalanceChart;