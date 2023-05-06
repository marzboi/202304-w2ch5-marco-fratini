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

const newPushButGivesArrayInstead = (array, ...newElement) => {
  const openedArray = [...array];

  return [...openedArray, ...newElement];
};

const newSome = (array, callBackFunction) => {
  const length = newLength(array);

  for (let index = 0; index < length; index++) {
    const element = array[index];
    if (callBackFunction(element) === true) {
      return true;
    }
  }

  return false;
};

const newFind = (array, callBackFunction) => {
  const length = newLength(array);

  for (let index = 0; index < length; index++) {
    if (array[index] === callBackFunction) {
      return array[index];
    }
  }
};

const newFilter = (array, callBackFunction) => {
  const length = newLength(array);
  let newArrayToReturn = [];

  for (let index = 0; index < length; index++) {
    const element = array[index];

    if (callBackFunction(element) === true) {
      newArrayToReturn = newPushButGivesArrayInstead(newArrayToReturn, element);
    }
  }

  return newArrayToReturn;
};

export default {
  newLength,
  newPush,
  newPushButGivesArrayInstead,
  newSome,
  newFind,
  newFilter,
};
