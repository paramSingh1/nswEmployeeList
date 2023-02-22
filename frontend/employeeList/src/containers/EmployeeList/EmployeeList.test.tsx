import { screen, render } from "@testing-library/react";
import { expect, vi } from "vitest";
import EmployeeList from "./EmployeeList";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../../services/apiServices";
import { BrowserRouter } from "react-router-dom";

describe("Header on List", () => {
  //renders correctly
  vi.mock("axios");

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

  it("should render the add employee button and redirect to /add", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <EmployeeList />
      </QueryClientProvider>,
      { wrapper: BrowserRouter }
    );
    const addButton = screen.getByText(/Add Employee/i);
    console.log(addButton);
    expect(addButton).toBeInTheDocument();
    addButton.click();
    expect(window.location.pathname).toBe("/add");
  });
});
