import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, vi } from "vitest";
import EmployeeList from "./EmployeeList";
import { QueryClient, QueryClientProvider } from "react-query";
import { queryClient } from "../../services/apiServices";
import axios from "axios";
import mockedAxios from "axios";
import { BrowserRouter } from "react-router-dom";

describe("Header on List", () => {
  //renders correctly
  vi.mock("axios");
  // const mockedAxios = axios as jest.Mocked<typeof axios>;

  it("should render a Header", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <EmployeeList />
      </QueryClientProvider>,
      { wrapper: BrowserRouter }
    );
    const title = screen.getByText(/Employees' List/i);
    expect(title).toBeInTheDocument();
  });

  it("should render the add employee button", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <EmployeeList />
      </QueryClientProvider>,
      { wrapper: BrowserRouter }
    );
    const addButton = screen.getByText(/Add Employee/i);
    console.log(addButton);
    expect(addButton).toBeInTheDocument();
  });
  it("Should correctly fetch the data with correct fields", async () => {
    const mockUsers = [
      {
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
      {
        id: 2,
        firstName: "Jane",
        middleName: "",
        lastName: "Smith",
        email: "jane.smith@example.com",
        mobileNumber: "0412345678",
        resAddress: "123 Main St sydney",
        timeBasis: "partTime",
        weeklyHours: 20,
        contractType: "Permanent",
        startDate: "2018-03-15",
        endDate: "2023-06-30",
        ongoing: false,
      },
    ];

    mockedAxios.get.mockResolvedValue({
      data: mockUsers,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <EmployeeList />
      </QueryClientProvider>,
      { wrapper: BrowserRouter }
    );

    const employeeName = screen.queryByText("Jane Smith");
    expect(employeeName).toBeInTheDocument();
  });
});
