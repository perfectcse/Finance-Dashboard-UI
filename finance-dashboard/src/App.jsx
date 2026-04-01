import Dashboard from "./pages/Dashboard";
import { FinanceProvider } from "./context/FinanceProvider";

function App() {
  return (
    <FinanceProvider>
      <Dashboard />
    </FinanceProvider>
  );
}

export default App;