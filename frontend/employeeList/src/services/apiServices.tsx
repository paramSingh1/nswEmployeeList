import { useQuery } from "react-query";
import axios from "axios";
import { QueryClientProvider } from "react-query";
import { QueryClient } from "react-query";

export const queryClient = new QueryClient();
export function getEmployeeData() {
  return useQuery("employeeData", () =>
    axios.get("http://localhost:8080/employee").then((res) => res.data)
  );
}
