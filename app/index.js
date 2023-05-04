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

const newFind = (array, argument) => {
  const length = newLength(array);

  for (let index = 0; index < length; index++) {
    if (array[index] === argument) {
      return true;
    }
  }

  return false;
};

export default { newLength, newPush, newPushButGivesArrayInstead, newFind };
