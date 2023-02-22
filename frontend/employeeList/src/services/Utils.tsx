export const tenureInYears = (start: string, end: string) => {
  const startYear: any = start.split("-")[0];
  const endYear: any = end.split("-")[0];

  const tenure = endYear - startYear;
  return tenure;
};
