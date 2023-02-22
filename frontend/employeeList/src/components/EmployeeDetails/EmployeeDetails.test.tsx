import { screen, render, fireEvent } from "@testing-library/react";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../../services/apiServices";
import { BrowserRouter } from "react-router-dom";
import EmployeeDetails from "./EmployeeDetails";

describe("Employee Details fields", () => {
  beforeEach(() => {
    render(
      <QueryClientProvider client={queryClient}>
        <EmployeeDetails />
      </QueryClientProvider>,
      { wrapper: BrowserRouter }
    );
  });
  it("should render the correct heading", () => {
    const heading = screen.getByText(/Employees Details/i);
    expect(heading).toBeInTheDocument();
  });
  it("should render a first name input", () => {
    const input = screen.getByLabelText("First Name");
    expect(input).toBeInTheDocument();
  });
  it("should render a middle name input", () => {
    const input = screen.getByLabelText("Middle Name (if applicable)");
    expect(input).toBeInTheDocument();
  });
  it("should render a last name input", () => {
    const input = screen.getByLabelText("Last Name");
    expect(input).toBeInTheDocument();
  });
  it("should render a mobile number input", () => {
    const input = screen.getByLabelText("Mobile Number");
    expect(input).toBeInTheDocument();
  });

  it("should render an email input", () => {
    const input = screen.getByLabelText("Email");
    expect(input).toBeInTheDocument();
  });

  it("should render a residential address input", () => {
    const input = screen.getByLabelText("Residential Address");
    expect(input).toBeInTheDocument();
  });

  it("should render the correct radio buttons ", () => {
    const permanentRadio = screen.getByLabelText("Permanent");
    const contractRadio = screen.getByLabelText("Contract");
    expect(permanentRadio).toBeInTheDocument();
    expect(contractRadio).toBeInTheDocument();
  });
  it("should render Start Date inputs", () => {
    const monthSelect = screen.getByTestId("startMonth");
    const dayInput = screen.getByTestId("startDay");
    const yearInput = screen.getByTestId("startYear");

    expect(dayInput).toBeInTheDocument();
    expect(monthSelect).toBeInTheDocument();
    expect(yearInput).toBeInTheDocument();
  });
  it("should render a ongoing checkbox", () => {
    const input = screen.getByLabelText("Ongoing");
    expect(input).toBeInTheDocument();
  });
  it("should render the correct radio buttons for time basis ", () => {
    const ft = screen.getByLabelText("Full-time");
    const pt = screen.getByLabelText("Part-time");
    expect(ft).toBeInTheDocument();
    expect(pt).toBeInTheDocument();
  });
  it("should render hours input", () => {
    const input = screen.getByLabelText("Weekly Hours");
    expect(input).toBeInTheDocument();
  });
  it("should render Submit Button", () => {
    const btn = screen.getByText("Save");
    expect(btn).toBeInTheDocument();
  });
  it("should render Cancel Button", () => {
    const btn = screen.getByText("Cancel");
    expect(btn).toBeInTheDocument();
  });
});
