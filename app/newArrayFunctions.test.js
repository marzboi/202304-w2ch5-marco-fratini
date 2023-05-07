import arrays from "./newArrayfunctions.js";

describe("Given the function newLength", () => {
  describe("When given the array of 1, 2 ,3", () => {
    test("Then it should return 3", () => {
      const array = [1, 2, 3];

      const expectedResult = 3;
      const resultReturned = arrays.newLength(array);

      expect(resultReturned).toBe(expectedResult);
    });
  });

  describe("When given the array of 5, 10 , 15, 20, 25", () => {
    test("Then it should return 5", () => {
      const array = [5, 10, 15, 20, 25];

      const expectedResult = 5;
      const resultReturned = arrays.newLength(array);

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
      const resultReturned = arrays.newPush(array, valueA, valueB, valueC);

      expect(resultReturned).toBe(expectedResult);
    });
  });

  describe("When given the array 'hola', 'joseba' and given the array of 'como' 'es' 'estas?'", () => {
    test("Then it should return 5", () => {
      const array = ["hola", "joseba"];
      const valueA = ["como", "es", "estas?"];

      const expectedResult = 3;
      const resultReturned = arrays.newPush(array, valueA);

      expect(resultReturned).toBe(expectedResult);
    });
  });
});

describe("Given the function newPop", () => {
  describe("When given the array of 1, 2, 3", () => {
    test("Then it should return 3", () => {
      const numbers = [1, 2, 3];

      const expectedResult = 3;
      const resultReturned = arrays.newPop(numbers);

      expect(resultReturned).toBe(expectedResult);
    });
  });

  describe("When given the list Marco, Carlos, Oliver", () => {
    test("Then it should return Oliver", () => {
      const names = ["Marco", "Carlos", "Oliver"];

      const expectedResult = "Oliver";
      const resultReturned = arrays.newPop(names);

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
      const resultReturned = arrays.newUnshift(names, nameToAdd);

      expect(resultReturned).toBe(expectedResult);
    });
  });

  describe("When given the list 1, 2, 3, 4 and the list 10, 20 and 40", () => {
    test("Then it should return 5", () => {
      const list = [1, 2, 3, 4];
      const numbers = [10, 20, 40];

      const expectedResult = 5;
      const resultReturned = arrays.newUnshift(list, numbers);

      expect(resultReturned).toBe(expectedResult);
    });
  });
});

describe("Given the function newShift", () => {
  describe("When given the list of numbers 1, 2, 3", () => {
    test("Then it should return 1", () => {
      const list = [1, 2, 3];

      const expectedResult = 1;
      const resultReturned = arrays.newShift(list);

      expect(resultReturned).toBe(expectedResult);
    });
  });

  describe("When given the list Alex, Jordi, David", () => {
    test("Then it should return Alex", () => {
      const list = ["Alex", "Jordi", "David"];

      const expectedResult = "Alex";
      const resultReturned = arrays.newShift(list);

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
      const resultReturned = arrays.newSome(array, even);

      expect(resultReturned).toBe(expectedResult);
    });
  });

  describe("When given the list of 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 and numbers larger than 10 ", () => {
    test("Then it should return false", () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8];

      const expectedResult = false;
      const resultReturned = arrays.newSome(array, (element) => element > 10);

      expect(resultReturned).toBe(expectedResult);
    });
  });
});

describe("Given the function newEvery", () => {
  describe("When given the list 1, 2, 3, 4, 5 and the condition that all numbers are larger than 0", () => {
    test("Then it should return true", () => {
      const numbers = [1, 2, 3, 4, 5];

      const expectedResult = true;
      const resultReturned = arrays.newEvery(numbers, (item) => item > 0);

      expect(resultReturned).toBe(expectedResult);
    });
  });

  describe("When given the list Cova, Cobal, Coviran and the condition that words are less than 4 letters", () => {
    test("Then it should return false", () => {
      const names = ["Cova", "Cobal", "Coviran"];

      const expectedResult = false;
      const resultReturned = arrays.newEvery(names, (item) => item.length < 4);

      expect(resultReturned).toBe(expectedResult);
    });
  });
});

describe("Given the function newFind", () => {
  describe("When given the the list 1, 2, 3, 4, 5 and searching for numbers larger than 3", () => {
    test("Then it should return 4", () => {
      const numbers = [1, 2, 3, 4, 5];

      const expectedResult = 4;
      const resultReturned = arrays.newFind(numbers, (item) => item > 3);

      expect(resultReturned).toBe(expectedResult);
    });
  });

  describe("When given the the list 1, 2, 3, 4, 5 and searching for numbers less than 0", () => {
    test("Then it should return undefined", () => {
      const numbers = [1, 2, 3, 4, 5];

      const expectedResult = undefined;
      const resultReturned = arrays.newFind(numbers, (item) => item < 0);

      expect(resultReturned).toBe(expectedResult);
    });
  });
});

describe("Given the function newMap", () => {
  describe("When given the list of 1, 2, 3, 4, 5 and multiply it by 5", () => {
    test("Then it should return a new list with 5, 10, 15, 20, 25", () => {
      const numberList = [1, 2, 3, 4, 5];

      const expectedResult = [5, 10, 15, 20, 25];
      const resultReturned = arrays.newMap(numberList, (item) => item * 5);

      expect(resultReturned).toStrictEqual(expectedResult);
    });
  });

  describe("When given the list of 1, 2, 3, 4, 5 and multiply it by 0", () => {
    test("Then it should return a new list with 0, 0, 0, 0, 0", () => {
      const numberList = [1, 2, 3, 4, 5];

      const expectedResult = [0, 0, 0, 0, 0];
      const resultReturned = arrays.newMap(numberList, (item) => item * 0);

      expect(resultReturned).toStrictEqual(expectedResult);
    });
  });
});

describe("Given the function newFindIndex", () => {
  describe("When given the list 1, 2, 3, 4 and we looking for number larger than 2", () => {
    test("Then it should return the index 2", () => {
      const numberList = [1, 2, 3, 4];

      const expectedResult = 2;
      const resultReturned = arrays.newFindIndex(
        numberList,
        (item) => item > 2
      );

      expect(resultReturned).toBe(expectedResult);
    });
  });

  describe("When given the list Fu, Marco, Luis, Lu, Sergio and we are looking for words longer than 3", () => {
    test("Then it should return the index 2", () => {
      const numberList = ["Fu", "Marco", "Luis", "Lu", "Sergio"];

      const expectedResult = 1;
      const resultReturned = arrays.newFindIndex(
        numberList,
        (item) => item.length > 3
      );

      expect(resultReturned).toBe(expectedResult);
    });
  });
});

describe("Given the function newIncludes", () => {
  describe("When given the list Cova, Edu, Marco and we are searching for Cova", () => {
    test("Then it should return true", () => {
      const names = ["Cova", "Edu", "Marco"];
      const wordToSearch = "Cova";

      const expectedResult = true;
      const resultReturned = arrays.newIncludes(names, wordToSearch);

      expect(resultReturned).toBe(expectedResult);
    });
  });

  describe("When given the list 3, 6, 9, 12, 15 and we are searching for 20", () => {
    test("Then it should return false", () => {
      const numbers = [3, 6, 9, 12, 15];
      const numberToSearch = 20;

      const expectedResult = false;
      const resultReturned = arrays.newIncludes(numbers, numberToSearch);

      expect(resultReturned).toBe(expectedResult);
    });
  });
});

describe("Given the function newIndexOf", () => {
  describe("When given the numbers 1, 2, 3, 4, and we are looking for 3", () => {
    test("Then it should return 2", () => {
      const numbers = [1, 2, 3, 4];
      const numberToSearch = 3;

      const expectedResult = 2;
      const resultReturned = arrays.newIndexOf(numbers, numberToSearch);

      expect(resultReturned).toBe(expectedResult);
    });
  });

  describe("When given the numbers 1, 2, 3, 4, 5 and we are looking for 3 starting from position 3", () => {
    test("Then it should return 2", () => {
      const numbers = [1, 2, 3, 4, 5];
      const numberToSearch = 3;

      const expectedResult = -1;
      const resultReturned = arrays.newIndexOf(numbers, numberToSearch, 3);

      expect(resultReturned).toBe(expectedResult);
    });
  });
});

describe("Given the function newJoin", () => {
  describe("When given the names Marco, Antonio and the separator '-'", () => {
    test("Then it should return Marco-Antonio", () => {
      const names = ["Marco", "Antonio"];
      const separator = "-";

      const expectedResult = "Marco-Antonio";
      const resultReturned = arrays.newJoin(names, separator);

      expect(resultReturned).toBe(expectedResult);
    });
  });

  describe("When given the name and the separator '.'", () => {
    test("Then it should return '' ", () => {
      const names = [];
      const separator = ".";

      const expectedResult = "";
      const resultReturned = arrays.newJoin(names, separator);

      expect(resultReturned).toBe(expectedResult);
    });
  });
});

describe("Given the function newReduce", () => {
  describe("When given the number list with 1, 2, 3, 4, 5 and we wish to add them", () => {
    test("Then it should return 15", () => {
      const numbers = [1, 2, 3, 4, 5];

      const expectedResult = 15;
      const resultReturned = arrays.newReduce(
        numbers,
        (valueA, valueB) => valueA + valueB
      );

      expect(resultReturned).toBe(expectedResult);
    });
  });

  describe("When given the names with Marco, Antonio and we wish to add them", () => {
    test("Then it should return MarcoAntonio", () => {
      const names = ["Marco", "Antonio"];

      const expectedResult = "MarcoAntonio";
      const resultReturned = arrays.newReduce(
        names,
        (valueA, valueB) => valueA + valueB
      );

      expect(resultReturned).toBe(expectedResult);
    });
  });

  describe("When given the number list with 1,2,3,4,5 and we wish to multiply them", () => {
    test("Then it should return 120", () => {
      const numbers = [1, 2, 3, 4, 5];

      const expectedResult = 120;
      const resultReturned = arrays.newReduce(
        numbers,
        (valueA, valueB) => valueA * valueB
      );

      expect(resultReturned).toBe(expectedResult);
    });
  });
});
