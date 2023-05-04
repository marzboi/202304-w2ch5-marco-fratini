const newLength = (array) => {
  let position = 0;

  for (const element in array) {
    position++;
  }

  return position;
};

const newPush = (array, newElement, ...moreElements) => {
  const openedArray = [...array];

  const newPushedArray = [...openedArray, newElement, ...moreElements];

  return newLength(newPushedArray);
};

export default { newLength, newPush };
