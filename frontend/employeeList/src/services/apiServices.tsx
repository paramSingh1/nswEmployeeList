import { useQuery } from "react-query";
import axios from "axios";
import { QueryClient } from "react-query";
import { Employee } from "../interfaces/Employee";
import { rawFormData } from "../interfaces/rawFormData";
import { formatDate } from "./Utils";

export const queryClient = new QueryClient();
export function getEmployeeData() {
  return useQuery("employeeData", () =>
    axios.get("http://localhost:8080/employee").then((res) => res.data)
  );
}

export const addNewEmployee = async (formattedForm: Employee) => {
  return await axios
    .post("http://localhost:8080/employee", formattedForm)
    .then((res) => {
      console.log(res.data);
    })
    .catch((res) => {
      window.alert(res.error);
    });
};
export const createEmployee = (data: rawFormData) => {
  const formattedForm: Employee = {
    firstName: data.firstName,
    middleName: data.middleName,
    lastName: data.lastName,
    email: data.email,
    mobileNumber: data.mobileNumber,
    resAddress: data.resAddress,
    contractType: data.contractType,
    startDate: `${data.startYear}-${data.startMonth}-${data.startDay}`,
    endDate: `${data.endYear}-${data.endMonth}-${data.endDay}`,
    ongoing: data.ongoing,
    timeBasis: data.timeBasis,
    weeklyHours: data.weeklyHours,
  };
  formattedForm.startDate = formatDate(formattedForm.startDate);
  formattedForm.endDate = formatDate(formattedForm.endDate);
  return axios.post("http://localhost:8080/employee", formattedForm);
};
export const getUserDetails = async (id: string) => {
  try {
    const response = await axios.get(`http://localhost:8080/employee/${id}`);
    return response.data;
  } catch (error: any) {
    if (error.response.status == 404) {
      throw new Error(`User of ID : ${id} cannot be found`);
    }
    console.log("no");

    throw new Error(error.message);
  }
};
export const updateEmployee = async (id: string, formData: Employee) => {
  const response = await axios.put(
    `http://localhost:8080/employee/${id}`,
    formData
  );
  return response.data;
};

export const deleteEmployee = async (id: string) => {
  const response = await axios.delete(`http://localhost:8080/employee/${id}`);
  return response.data;
};
