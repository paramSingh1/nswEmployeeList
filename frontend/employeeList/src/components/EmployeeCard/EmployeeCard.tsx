import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { tenureInYears } from "../../Utils";
import styles from "./EmployeeCard.module.scss";

const EmployeeCard = (employee: any) => {
  const handleDelete = async () => {
    await axios.delete(
      `http://localhost:8080/employee/${employee.employeeData.id}`
    );
    window.location.reload();
  };
  console.log(employee);
  return (
    <div className={styles.EmployeeCard}>
      <div>
        <h4 className={styles.EmployeeCard_Name}>
          {employee.employeeData.firstName} {employee.employeeData.lastName}
        </h4>
        <span>
          {employee.employeeData.contractType} {" - "}
          {tenureInYears(
            employee.employeeData.startDate,
            employee.employeeData.endDate
          )}
          yrs
        </span>
        <p>{employee.employeeData.email}</p>
      </div>
      <div className={styles.EmployeeCard_Btns}>
        {<Link to={`/details/${employee.employeeData.id}`}>Edit</Link>}
        <span> | </span>
        {
          <Link to="" onClick={handleDelete}>
            Remove
          </Link>
        }
      </div>
    </div>
  );
};

export default EmployeeCard;
