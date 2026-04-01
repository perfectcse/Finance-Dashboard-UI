import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";
import Filters from "./Filters";

const Transactions = () => {
  const { transactions, search, filterType, role } =
    useContext(FinanceContext);

  const filteredTransactions = transactions.filter((t) => {
    const matchesSearch = t.category
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filterType === "all" || t.type === filterType;

    return matchesSearch && matchesFilter;
  });

  return (
    <div style={styles.container}>
      <h3>Transactions</h3>

      <Filters />

      {role === "admin" && (
        <button style={styles.button}>Add Transaction</button>
      )}

      {filteredTransactions.length === 0 ? (
        <p>No transactions found</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Date</th>
              <th style={styles.th}>Amount</th>
              <th style={styles.th}>Category</th>
              <th style={styles.th}>Type</th>
            </tr>
          </thead>

          <tbody>
            {filteredTransactions.map((t) => (
              <tr key={t.id}>
                <td style={styles.td}>{t.date}</td>
                <td style={styles.td}>₹ {t.amount}</td>
                <td style={styles.td}>{t.category}</td>
                <td style={styles.td}>{t.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    background: "#fff",
    borderRadius: "10px",
    marginTop: "20px",
  },
  button: {
    marginBottom: "10px",
    padding: "8px 12px",
    cursor: "pointer",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    borderBottom: "2px solid #ddd",
    padding: "10px",
    textAlign: "left",
  },
  td: {
    borderBottom: "1px solid #eee",
    padding: "10px",
  },
};

export default Transactions;