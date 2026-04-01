import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

const SummaryCards = () => {
  const { transactions } = useContext(FinanceContext);

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expense;

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h3>Total Balance</h3>
        <p>₹ {balance}</p>
      </div>

      <div style={styles.card}>
        <h3>Total Income</h3>
        <p>₹ {income}</p>
      </div>

      <div style={styles.card}>
        <h3>Total Expense</h3>
        <p>₹ {expense}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: "20px",
    marginBottom: "20px",
  },
  card: {
    flex: 1,
    padding: "20px",
    backgroundColor: "#f5f5f5",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
};

export default SummaryCards;