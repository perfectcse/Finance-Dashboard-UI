import RoleSwitcher from "../components/RoleSwitcher";
import SummaryCard from "../components/SummaryCard";
import BalanceChart from "../components/BalanceChart";
import ExpenseChart from "../components/ExpenseChart";
import Insights from "../components/Insights";
import Transactions from "../components/Transactions";

const Dashboard = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Finance Dashboard</h1>

      {/* Role */}
      <RoleSwitcher />

      {/* Summary Cards */}
      <SummaryCard />

      {/* Charts Section */}
      <div style={styles.chartGrid}>
        <BalanceChart />
        <ExpenseChart />
      </div>

      {/* Insights */}
      <Insights />

      {/* Transactions */}
      <Transactions />
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
    fontFamily: "Arial",
  },
  title: {
    marginBottom: "20px",
  },
  chartGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  },
};

export default Dashboard;