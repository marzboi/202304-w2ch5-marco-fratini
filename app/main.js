import arrays from "./newArrayfunctions.js";

const sendPush = (userInput, newElement) => {
  const makeArray = userInput.value.split(" ");
  const elementToAdd = newElement.value.split(" ");

  for (let index = 0; index < elementToAdd.length; index++) {
    arrays.newPush(makeArray, elementToAdd[index]);
  }

  return makeArray;
};

const registerEventListeners = () => {
  const pushButton = document.querySelector(".push-send");

  pushButton.addEventListener("click", () => {
    const userArray = document.querySelector(".new-push");
    const userElement = document.querySelector(".new-push-add");
    const answerToDisplay = document.querySelector(".array-elements");

    const answer = sendPush(userArray, userElement);
    console.log(answer);
    let arrayComponents = "";

    for (let index = 0; index < answer.length; index++) {
      arrayComponents += `<li>${answer[index]}<li>`;
    }

    answerToDisplay.innerHTML = arrayComponents;
  });
};

const startProgram = () => {
  registerEventListeners();
};

startProgram();
