import { useQuery } from "react-query";
import axios from "axios";

export function getEmployeeData() {
  return useQuery("employeeData", () =>
    axios.get("http://localhost:8080/employee").then((res) => res.data)
  );
}
