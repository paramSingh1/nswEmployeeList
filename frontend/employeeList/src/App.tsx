import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getEmployeeData } from "./services/apiServices";
import EmployeeList from "./containers/EmployeeList/EmployeeList";
import AddEmployee from "./components/AddEmployee/AddEmployee";

function App() {
  getEmployeeData();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/add" element={<AddEmployee />} />
          {/* <Route path="/add" element = {<AddEmployee/>}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
