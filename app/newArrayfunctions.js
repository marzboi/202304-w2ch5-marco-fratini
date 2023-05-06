const newLength = (array) => {
  let position = 0;

  for (const element in array) {
    position++;
  }

  return position;
};

const newPush = (array, ...newElement) => {
  const openedArray = [...array];

  array = [...openedArray, ...newElement];

  return newLength(array);
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

const newFind = (array, argument) => {
  const length = newLength(array);

  for (let index = 0; index < length; index++) {
    if (array[index] === argument) {
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

const array = [1, 2, 3, 4, 5, 6];
console.log(newPush(array, 4, 5, 6));
console.log(array);
