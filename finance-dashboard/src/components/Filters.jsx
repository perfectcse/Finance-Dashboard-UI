import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

const Filters = () => {
  const { search, setSearch, filterType, setFilterType } =
    useContext(FinanceContext);

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Search category..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.input}
      />

      <select
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
        style={styles.select}
      >
        <option value="all">All</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: "10px",
    marginTop: "20px",
    marginBottom: "10px",
  },
  input: {
    padding: "8px",
    flex: 1,
  },
  select: {
    padding: "8px",
  },
};

export default Filters;