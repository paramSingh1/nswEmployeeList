import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect } from "vitest";
import EmployeeList from "./EmployeeList";
import { QueryClient, QueryClientProvider } from "react-query";
import { queryClient } from "../../main";
import App from "../../App";

describe("Header on List", () => {
  //renders correctly
  it("should render a Header", () => {
    render(<App />);
    const title = screen.getByText(/Employees' List/i);
    expect(title).toBeInTheDocument();
  });
  it("should render the add employee button", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <EmployeeList />
      </QueryClientProvider>
    );
    const addButton = screen.getByText(/Add Employee/i);
    console.log(addButton);
    expect(addButton).toBeInTheDocument();
  });
});
