import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect } from "vitest";
import EmployeeList from "./EmployeeList";
import { queryClient } from "../../main";
import { QueryClient, QueryClientProvider } from "react-query";

describe("Header on List", () => {
  //renders correctly
  it("should render a Header", () => {
    render(<EmployeeList />);
    const title = screen.getByText(/Employees' List/i);
    expect(title).toBeInTheDocument();
  });
  it("should render the add employee button", () => {
    <QueryClientProvider client={queryClient}>
      render(
      <EmployeeList />
      );
    </QueryClientProvider>;
    const [firstButton, secondButton] = screen.getAllByRole("button");
    console.log(firstButton);
    expect(firstButton).toBeInTheDocument();
  });
});
