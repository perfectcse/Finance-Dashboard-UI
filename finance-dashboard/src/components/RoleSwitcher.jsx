import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

const RoleSwitcher = () => {
  const { role, setRole } = useContext(FinanceContext);

  return (
    <div style={styles.container}>
      <label style={styles.label}>Select Role:</label>
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        style={styles.select}
      >
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  );
};

const styles = {
  container: {
    marginBottom: "20px",
  },
  label: {
    marginRight: "10px",
    fontWeight: "bold",
  },
  select: {
    padding: "5px 10px",
  },
};

export default RoleSwitcher;