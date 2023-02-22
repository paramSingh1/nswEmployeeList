export interface Employee {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  resAddress: string;
  contractType: string;
  startDate: string;
  endDate: string;
  ongoing: boolean;
  timeBasis: string;
  weeklyHours: number;
}

export interface EmployeeFormDetails {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  resAddress: string;
  contractType: string;
  startDate: string;
  endDate: string;
  ongoing: boolean;
  timeBasis: string;
  weeklyHours: number;
}

export interface EmployeeListData {
  employeeData: Employee[];
}
