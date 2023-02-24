export const tenureInYears = (start: string, end: string) => {
  const startYear: any = start.split("-")[0];
  const endYear: any = end.split("-")[0];

  const tenure = endYear - startYear;
  return tenure;
};

export const formatDate = (dateString: string): string => {
  const dateParts = dateString.split("-");
  const day = dateParts[2];
  const formattedDay = day.length === 2 ? day : `0${day}`;
  return `${dateParts[0]}-${dateParts[1]}-${formattedDay}`;
};
