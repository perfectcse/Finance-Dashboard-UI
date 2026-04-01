import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

const Insights = () => {
  const { transactions } = useContext(FinanceContext);

  const expenses = transactions.filter((t) => t.type === "expense");

  const categoryTotals = {};
  expenses.forEach((e) => {
    categoryTotals[e.category] =
      (categoryTotals[e.category] || 0) + e.amount;
  });

  const highestCategory = Object.keys(categoryTotals).reduce(
    (a, b) => (categoryTotals[a] > categoryTotals[b] ? a : b),
    Object.keys(categoryTotals)[0]
  );

  return (
    <div style={styles.container}>
      <h3>Insights</h3>
      <p>Highest Spending Category: {highestCategory || "N/A"}</p>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    background: "#fff",
    borderRadius: "10px",
    marginBottom: "20px",
  },
};

export default Insights;