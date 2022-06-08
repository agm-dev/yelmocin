import { getCurrentDate } from "../src/utils/utils";

describe("utils", () => {
  test("getCurrentDate returns '00 month' format", () => {
    const oneDigitDate = new Date(2020, 0, 1);
    const twoDigitDate = new Date(2020, 0, 20);

    expect(getCurrentDate(oneDigitDate)).toBe("01 enero");
    expect(getCurrentDate(twoDigitDate)).toBe("20 enero");
  })

  test("getCurrentDate returns all months in spanish lowercase", () => {
    const months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    months.forEach((month, index) => expect(getCurrentDate(new Date(2020, index, 1))).toBe(`01 ${month}`));
  })
})
