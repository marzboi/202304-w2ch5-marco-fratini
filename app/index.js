const newLength = (array) => {
  let position = 0;

  for (const element in array) {
    position++;
  }

  return position;
};

const newPush = (array, ...newElement) => {
  const openedArray = [...array];

  const newPushedArray = [...openedArray, ...newElement];

  return newLength(newPushedArray);
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
  const newArrayToReturn = [];
  let answerToReturn = "";

  for (let index = 0; index < length; index++) {
    const element = array[index];

    if (callBackFunction(element) === true) {
      answerToReturn +=
        " " + newPushButGivesArrayInstead(newArrayToReturn, element);
    }
  }

  return answerToReturn.replace(" ", "").split(" ");
};

export default {
  newLength,
  newPush,
  newPushButGivesArrayInstead,
  newSome,
  newFind,
};

const even = (element) => element % 2 === 0;
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(newFilter(array, even));
