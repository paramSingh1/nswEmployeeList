import React from "react";
import { Link } from "react-router-dom";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import Header from "../../components/Header/Header";
import { getEmployeeData } from "../../services/apiServices";

const EmployeeList = () => {
  const { isLoading, isError, data } = getEmployeeData();

  console.log(isLoading);
  console.log(isError, "ERR");
  return (
    <div>
      <Header />
      <div>
        <p>Please click on 'Edit' to find more details of each Employee.</p>

        {
          <Link to="/add">
            <button>Add Employee</button>
          </Link>
        }
      </div>
      {data &&
        data.map((employee: any, index: React.Key) => (
          <EmployeeCard key={index} employeeData={employee} />
        ))}
    </div>
  );
};

export default EmployeeList;
