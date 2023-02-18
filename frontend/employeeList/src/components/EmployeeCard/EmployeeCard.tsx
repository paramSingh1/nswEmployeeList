import React from "react";
import { Link } from "react-router-dom";
import { tenureInYears } from "../../Utils";

const EmployeeCard = (employee: any) => {
  console.log(employee);
  return (
    <div>
      <div>
        <h3>{employee.employeeData.firstName}</h3>
        <span>
          {employee.employeeData.contractType} -
          {tenureInYears(
            employee.employeeData.startDate,
            employee.employeeData.endDate
          )}
          yrs
        </span>
        <p>{employee.employeeData.email}</p>
      </div>
      <div>
        {<Link to={`/employee/details/${employee.employeeData.id}`}>Edit</Link>}
      </div>
    </div>
  );
};

export default EmployeeCard;
