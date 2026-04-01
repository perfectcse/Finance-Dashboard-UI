import { useState } from "react";
import { FinanceContext } from "./FinanceContext";
import { transactionsData } from "../data/mockData";

export const FinanceProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(transactionsData);
  const [role, setRole] = useState("viewer");
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("all");

  const addTransaction = (newTransaction) => {
    setTransactions((prev) => [
      ...prev,
      { id: Date.now(), ...newTransaction },
    ]);
  };

  return (
    <FinanceContext.Provider
      value={{
        transactions,
        setTransactions,
        role,
        setRole,
        search,
        setSearch,
        filterType,
        setFilterType,
        addTransaction,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
};