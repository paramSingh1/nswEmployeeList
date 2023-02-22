export interface rawFormData {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  resAddress: string;
  contractType: string;
  startDay: number;
  startMonth: string;
  startYear: number;
  endDay: number;
  endMonth: string;
  endYear: number;
  ongoing: boolean;
  timeBasis: string;
  weeklyHours: number;
}

export interface rawFormDataForDetails {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  resAddress: string;
  contractType: string;
  startDay: any;
  startMonth: string;
  startYear: any;
  endDay: any;
  endMonth: string;
  endYear: any;
  ongoing: boolean;
  timeBasis: string;
  weeklyHours: number;
}
