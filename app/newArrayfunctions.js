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

const newIncludes = (array, element, position) => {
  let index = position || 0;
  for (index; index < array.length; index++) {
    if (array[index] === element) {
      return true;
    }
  }

  return false;
};

const newIndexOf = (array, element, position) => {
  let index = position || 0;
  for (index; index < array.length; index++) {
    if (array[index] === element) {
      return index;
    }
  }

  return -1;
};

const newJoin = (array, separator) => {
  const glue = separator || "";
  let newString = "";
  for (let index = 0; index < array.length; index++) {
    newString += array[index];
    if (index < array.length - 1) {
      newString += glue;
    }
  }

  return newString;
};

const newReduce = (array, callBackFunction) => {
  let finalResult = array[0];

  for (let index = 1; index < array.length; index++) {
    const element = array[index];
    finalResult = callBackFunction(finalResult, element);
  }

  return finalResult;
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
