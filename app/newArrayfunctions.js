const newLength = (array) => {
  let position = 0;

  for (const element in array) {
    position++;
  }

  return position;
};

const newPush = (array, ...newElement) => {
  for (let index = 0; index < newElement.length; index++) {
    array[array.length] = newElement[index];
  }

  return array.length;
};

const createNewArray = (array, ...newElement) => [...array, ...newElement];

const newPop = (array) => {
  if (array.length === 0) {
    return undefined;
  }

  const lastElement = array[array.length - 1];
  array.length -= 1;
  return lastElement;
};

const newUnshift = (array, ...newElement) => {
  const elementsToAdd = [...newElement, ...array];
  array.length = 0;

  for (let index = 0; index < elementsToAdd.length; index++) {
    array[index] = elementsToAdd[index];
  }

  return array.length;
};

const newShift = (array) => {
  const originalElements = [...array];
  const elementRemoved = array[0];
  array.length = 0;

  for (let index = 1; index < originalElements.length; index++) {
    array[index - 1] = originalElements[index];
  }

  return elementRemoved;
};

const newSome = (array, callBackFunction) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (callBackFunction(element)) {
      return true;
    }
  }

  return false;
};

const newEvery = (array, callBackFunction) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (!callBackFunction(element)) {
      return false;
    }
  }

  return true;
};

const newFind = (array, callBackFunction) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (callBackFunction(element)) {
      return element;
    }
  }

  return -1;
};

const newFilter = (array, callBackFunction) => {
  let newArrayToReturn = [];

  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (callBackFunction(element)) {
      newArrayToReturn = createNewArray(newArrayToReturn, element);
    }
  }

  return newArrayToReturn;
};

const newMap = (array, callBackFunction) => {
  let newArrayToReturn = [];
  if (!callBackFunction) {
    return [...array];
  }

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const argumentToAdd = callBackFunction(element);
    newArrayToReturn = createNewArray(newArrayToReturn, argumentToAdd);
  }

  return newArrayToReturn;
};

const newFindIndex = (array, callBackFunction) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (callBackFunction(element)) {
      return index;
    }
  }

  return -1;
};

const newIncludes = (array, element, position = 0) => {
  for (position; position < array.length; position++) {
    if (array[position] === element) {
      return true;
    }
  }

  return false;
};

const newIndexOf = (array, element, position = 0) => {
  for (position; position < array.length; position++) {
    if (array[position] === element) {
      return position;
    }
  }

  return -1;
};

const newJoin = (array, separator = '') => {
  let newString = '';
  for (let index = 0; index < array.length; index++) {
    newString += array[index];
    if (index < array.length - 1) {
      newString += separator;
    }
  }

  return newString;
};

const newReduce = (array, callBackFunction, initialValue) => {
  let accumulator = initialValue || array[0];

  for (let index = 1; index < array.length; index++) {
    const currentValue = array[index];
    accumulator = callBackFunction(accumulator, currentValue);
  }

  return accumulator;
};

export default {
  newLength,
  newPush,
  createNewArray,
  newPop,
  newUnshift,
  newShift,
  newSome,
  newEvery,
  newFind,
  newFilter,
  newMap,
  newFindIndex,
  newIncludes,
  newIndexOf,
  newJoin,
  newReduce,
};

const array = [1, 2, 3];
console.log(newUnshift(array, 2, 3));
console.log(array);
