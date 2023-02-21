import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import Header from "../../components/Header/Header";
import { getEmployeeData } from "../../services/apiServices";
import styles from "./EmployeeList.module.scss";

const EmployeeList = () => {
  const { isLoading, isError, data } = getEmployeeData();

  return (
    <div>
      <div className={styles.EmployeeList_Header}>
        <h3 className={styles.EmployeeList_Header_Text}>Employees' List</h3>
      </div>
      <div className={styles.EmployeeList_Body}>
        <div className={styles.EmployeeList_Info}>
          <p>Please click on 'Edit' to find more details of each Employee.</p>
          {
            <Link to="/add">
              <button className={styles.EmployeeList_Btn}>Add Employee</button>
            </Link>
          }
        </div>
        {data &&
          data.map((employee: any, index: React.Key) => (
            <EmployeeCard key={index} employeeData={employee} />
          ))}
      </div>
    </div>
  );
};

export default EmployeeList;
