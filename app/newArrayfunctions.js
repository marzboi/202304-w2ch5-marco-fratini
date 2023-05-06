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

const newPushButGivesArrayInstead = (array, ...newElement) => [
  ...array,
  ...newElement,
];

const newPop = (array) => {
  const lastElement = array[array.length - 1];
  array.length -= 1;
  return lastElement;
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
  newPop,
  newSome,
  newFind,
  newFilter,
};

const array = [1, 2, 3];

console.log(newPop(array));
console.log(array);
