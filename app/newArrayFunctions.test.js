import index from "./newArrayfunctions.js";

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

describe("Given the function newPop", () => {
  describe("When given the array of 1, 2, 3", () => {
    test("Then it should return 3", () => {
      const numbers = [1, 2, 3];

      const expectedResult = 3;
      const resultReturned = index.newPop(numbers);

      expect(resultReturned).toBe(expectedResult);
    });
  });

  describe("When given the list Marco, Carlos, Oliver", () => {
    test("Then it should return Oliver", () => {
      const names = ["Marco", "Carlos", "Oliver"];

      const expectedResult = "Oliver";
      const resultReturned = index.newPop(names);

      expect(resultReturned).toBe(expectedResult);
    });
  });
});

describe("Given the function newUnshift", () => {
  describe("When given the list of Cova, Covota and Covita and the name of Covax", () => {
    test("Then it should alter the list to Covax, Cova, Covota and Covita and return 4", () => {
      const names = ["Cova", "Covota", "Covita"];
      const nameToAdd = "Covax";

      const expectedResult = 4;
      const resultReturned = index.newUnshift(names, nameToAdd);

      expect(resultReturned).toBe(expectedResult);
    });
  });

  describe("When given the list 1, 2, 3, 4 and the list 10, 20 and 40", () => {
    test("Then it should return 5", () => {
      const list = [1, 2, 3, 4];
      const numbers = [10, 20, 40];

      const expectedResult = 5;
      const resultReturned = index.newUnshift(list, numbers);

      expect(resultReturned).toBe(expectedResult);
    });
  });
});

describe("Given the function newShift", () => {
  describe("When given the list of numbers 1, 2, 3", () => {
    test("Then it should return 1", () => {
      const list = [1, 2, 3];

      const expectedResult = 1;
      const resultReturned = index.newShift(list);

      expect(resultReturned).toBe(expectedResult);
    });
  });

  describe("When given the list Alex, Jordi, David", () => {
    test("Then it should return Alex", () => {
      const list = ["Alex", "Jordi", "David"];

      const expectedResult = "Alex";
      const resultReturned = index.newShift(list);

      expect(resultReturned).toBe(expectedResult);
    });
  });
});

describe("Given the function newSome", () => {
  describe("When given the list of 1, 2, 3, 5 and the callback of even", () => {
    test("Then it should return true", () => {
      const array = [1, 2, 3, 5];
      const even = (element) => !(element % 2);

      const expectedResult = true;
      const resultReturned = index.newSome(array, even);

      expect(resultReturned).toBe(expectedResult);
    });
  });

  describe("When given the list of 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 and numbers larger than 10 ", () => {
    test("Then it should return false", () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8];
      const even = (element) => element > 10;

      const expectedResult = false;
      const resultReturned = index.newSome(array, even);

      expect(resultReturned).toBe(expectedResult);
    });
  });
});

describe("Given the function newFind", () => {
  describe("When given the the list 1, 2, 3, 4, 5 and searching for numbers larger than 3", () => {
    test("Then it should return 4", () => {
      const numbers = [1, 2, 3, 4, 5];

      const expectedResult = 4;
      const resultReturned = index.newFind(numbers, (item) => item > 3);

      expect(resultReturned).toBe(expectedResult);
    });
  });

  describe("When given the the list 1, 2, 3, 4, 5 and searching for numbers less than 0", () => {
    test("Then it should return undefined", () => {
      const numbers = [1, 2, 3, 4, 5];

      const expectedResult = undefined;
      const resultReturned = index.newFind(numbers, (item) => item < 0);

      expect(resultReturned).toBe(expectedResult);
    });
  });
});

describe("Given the function newMap", () => {
  describe("When given the list of 1, 2, 3, 4, 5 and multiply it by 5", () => {
    test("Then it should return a new list with 5, 10, 15, 20, 25", () => {
      const numberList = [1, 2, 3, 4, 5];

      const expectedResult = [5, 10, 15, 20, 25];
      const resultReturned = index.newMap(numberList, (item) => item * 5);

      expect(resultReturned).toStrictEqual(expectedResult);
    });
  });

  describe("When given the list of 1, 2, 3, 4, 5 and multiply it by 0", () => {
    test("Then it should return a new list with 0, 0, 0, 0, 0", () => {
      const numberList = [1, 2, 3, 4, 5];

      const expectedResult = [0, 0, 0, 0, 0];
      const resultReturned = index.newMap(numberList, (item) => item * 0);

      expect(resultReturned).toStrictEqual(expectedResult);
    });
  });
});
