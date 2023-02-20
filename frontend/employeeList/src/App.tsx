import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getEmployeeData } from "./services/apiServices";
import EmployeeList from "./containers/EmployeeList/EmployeeList";
import AddEmployee from "./components/AddEmployee/AddEmployee";
import styles from "./App.module.scss";
import EmployeeDetails from "./components/EmployeeDetails/EmployeeDetails";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  getEmployeeData();
  const queryClient = new QueryClient();

  return (
    <div className={styles.App}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<EmployeeList />} />
            <Route path="/add" element={<AddEmployee />} />
            <Route path="/details/:id" element={<EmployeeDetails />} />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
