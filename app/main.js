import arrays from "./newArrayfunctions.js";

const sendPush = (userInput, newElement) => {
  let makeArray = userInput.value.split(" ");
  makeArray = arrays.createNewArray(makeArray);
  const elementToAdd = newElement.value;

  arrays.newPush(makeArray, elementToAdd);
  return makeArray;
};

const registerEventListeners = () => {
  const pushButton = document.querySelector(".push-send");

  pushButton.addEventListener("click", () => {
    const userArray = document.querySelector(".new-push");
    const userElement = document.querySelector(".new-push-add");
    const answerToDisplay = document.querySelector(".push-answer");

    const answer = sendPush(userArray, userElement);

    answerToDisplay.textContent = answer;
  });
};

const startProgram = () => {
  registerEventListeners();
};

startProgram();
