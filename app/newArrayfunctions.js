const newLength = (array) => {
  let position = 0;

  for (const element in array) {
    position++;
  }

  return position;
};

const newPush = (array, ...newElement) => {
  const elementsToAdd = [...newElement];

  for (let index = 0; index < elementsToAdd.length; index++) {
    array[array.length] = elementsToAdd[index];
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

const newFind = (array, callBackFunction) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (callBackFunction(element)) {
      return element;
    }
  }
};

const newFilter = (array, callBackFunction) => {
  let newArrayToReturn = [];

  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (callBackFunction(element) === true) {
      newArrayToReturn = createNewArray(newArrayToReturn, element);
    }
  }

  return newArrayToReturn;
};

const newMap = (array, callBackFunction) => {
  let newArrayToReturn = [];

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

export default {
  newLength,
  newPush,
  createNewArray,
  newPop,
  newUnshift,
  newShift,
  newSome,
  newFind,
  newFilter,
  newMap,
  newFindIndex,
};

const array = [1, 2, 3, 4, 5, 6, 7];

console.log(newFindIndex(array, (item) => item > 4));
