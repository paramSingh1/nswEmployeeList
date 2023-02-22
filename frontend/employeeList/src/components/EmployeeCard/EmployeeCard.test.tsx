import { screen, render } from "@testing-library/react";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../../services/apiServices";
import { BrowserRouter } from "react-router-dom";
import EmployeeCard from "./EmployeeCard";
import userEvent from "@testing-library/user-event";
import axios from "axios";

const employee = {
  employeeData: {
    id: 1,
    firstName: "John",
    middleName: "",
    lastName: "Doe",
    email: "john.doe@example.com",
    mobileNumber: "0412345678",
    resAddress: "123 Main St sydney",
    timeBasis: "fullTime",
    weeklyHours: 40,
    contractType: "Contract",
    startDate: "2019-01-01",
    endDate: "2024-12-31",
    ongoing: false,
  },
};

describe("Employee Card", () => {
  beforeEach(() => {
    render(
      <QueryClientProvider client={queryClient}>
        <EmployeeCard employeeData={employee.employeeData} />
      </QueryClientProvider>,
      { wrapper: BrowserRouter }
    );
  });
  it("Should correctly Display the name", async () => {
    const employeeName = screen.getByText(/John Doe/i);
    expect(employeeName).toBeInTheDocument();
  });

  it("Should correctly display the email of the employee", async () => {
    const employeeEmail = screen.getByText(/john.doe@example.com/i);
    expect(employeeEmail).toBeInTheDocument();
  });

  it("Should correctly delete an employee", async () => {
    const removeBtn = screen.getByText(/john.doe@example.com/i);
    expect(removeBtn).toBeInTheDocument();
    const user = userEvent.setup();
    await user.click(removeBtn);
    expect(axios.delete).toBeCalled;
  });

  it("should render an edit button", async () => {
    const editButton = screen.getByText(/Edit/i);
    console.log(editButton);
    expect(editButton).toBeInTheDocument();
  });

  it("should redirect to /details when edit is clicked", async () => {
    const editButton = screen.getByText(/Edit/i);
    console.log(editButton);
    expect(editButton).toBeInTheDocument();
    editButton.click();
    expect(window.location.pathname).toBe("/details/1");
  });
});
