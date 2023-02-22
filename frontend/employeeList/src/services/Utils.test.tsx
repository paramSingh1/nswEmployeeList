import { tenureInYears } from "./Utils";

describe("tenureInYears", () => {
  it("should calculate correct tenure in years", () => {
    const start = "2010-10-01";
    const end = "2022-01-01";
    const tenure = tenureInYears(start, end);
    expect(tenure).toBe(12);
  });
  it("should calculate correct tenure in years", () => {
    const start = "2010-02-01";
    const end = "2010-02-01";
    const tenure = tenureInYears(start, end);
    expect(tenure).toBe(0);
  });
});
