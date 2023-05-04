import index from "./index.js";

describe("Given the function newLength", () => {
  describe("When given the array of 1, 2 ,3", () => {
    test("Then it should return 3", () => {
      const array = [1, 2, 3];

      const expectedResult = 3;
      const resultReturned = index.newLength(array);

      expect(resultReturned).toBe(expectedResult);
    });
  });

  describe("When given the array of 5, 10 , 15, 20, 25", () => {
    test("Then it should return 5", () => {
      const array = [5, 10, 15, 20, 25];

      const expectedResult = 5;
      const resultReturned = index.newLength(array);

      expect(resultReturned).toBe(expectedResult);
    });
  });
});
