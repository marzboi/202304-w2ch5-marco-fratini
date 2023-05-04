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

export default { newLength, newPush, newPushButGivesArrayInstead };
