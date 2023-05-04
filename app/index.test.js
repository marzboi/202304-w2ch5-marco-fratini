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

describe("Given the function newPush", () => {
  describe("When given the array 1, 2 and given the values of 3, 4, 5", () => {
    test("Then it should return 5", () => {
      const array = [1, 2];
      const valueA = 3;
      const valueB = 4;
      const valueC = 5;

      const expectedResult = 5;
      const resultReturned = index.newPush(array, valueA, valueB, valueC);

      expect(resultReturned).toBe(expectedResult);
    });
  });

  describe("When given the array 'hola', 'joseba' and given the array of 'como' 'es' 'estas?'", () => {
    test("Then it should return 5", () => {
      const array = ["hola", "joseba"];
      const valueA = ["como", "es", "estas?"];

      const expectedResult = 3;
      const resultReturned = index.newPush(array, valueA);

      expect(resultReturned).toBe(expectedResult);
    });
  });
});
