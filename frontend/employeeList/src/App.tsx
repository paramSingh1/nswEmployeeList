import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getEmployeeData } from "./services/apiServices";
import EmployeeList from "./containers/EmployeeList/EmployeeList";
import AddEmployee from "./components/AddEmployee/AddEmployee";
import styles from "./App.module.scss";
import EmployeeDetails from "./components/EmployeeDetails/EmployeeDetails";
function App() {
  getEmployeeData();
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/add" element={<AddEmployee />} />
          <Route path="/details/:id" element={<EmployeeDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
