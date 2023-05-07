import arrays from "./newArrayfunctions.js";

const sendPush = (userInput, newElement) => {
  const makeArray = userInput.value.split(" ");
  const elementToAdd = newElement.value.split(" ");

  for (let index = 0; index < elementToAdd.length; index++) {
    arrays.newPush(makeArray, elementToAdd[index]);
  }

  return makeArray;
};

const sendPop = (userInput) => {
  const makeArray = userInput.value.split(" ");

  arrays.newPop(makeArray);
  return makeArray;
};

const sendUnshift = (userInput, newElement) => {
  const makeArray = userInput.value.split(" ");
  const elementToAdd = newElement.value.split(" ");

  for (let index = 0; index < elementToAdd.length; index++) {
    arrays.newUnshift(makeArray, elementToAdd[index]);
  }

  return makeArray;
};

const sendShift = (userInput) => {
  const makeArray = userInput.value.split(" ");

  arrays.newShift(makeArray);
  return makeArray;
};

const registerPushEventListener = () => {
  const pushButton = document.querySelector(".push-send");

  pushButton.addEventListener("click", () => {
    const userArray = document.querySelector(".new-push");
    const userElement = document.querySelector(".new-push-add");
    const answerToDisplay = document.querySelector(".array-elements-push");

    const answer = sendPush(userArray, userElement);

    let arrayComponents = "";

    for (let index = 0; index < answer.length; index++) {
      arrayComponents += `<li>${answer[index]}<li>`;
    }

    answerToDisplay.innerHTML = arrayComponents;
  });
};

const registerPopEventListener = () => {
  const popButton = document.querySelector(".pop-send");

  popButton.addEventListener("click", () => {
    const userArray = document.querySelector(".new-pop");
    const answerToDisplay = document.querySelector(".array-elements-pop");

    const answer = sendPop(userArray);

    let arrayComponents = "";

    for (let index = 0; index < answer.length; index++) {
      arrayComponents += `<li>${answer[index]}<li>`;

      answerToDisplay.innerHTML = arrayComponents;
    }
  });
};

const registerUnshiftEventListener = () => {
  const unshiftButton = document.querySelector(".unshift-send");

  unshiftButton.addEventListener("click", () => {
    const userArray = document.querySelector(".new-unshift");
    const userElement = document.querySelector(".new-unshift-add");
    const answerToDisplay = document.querySelector(".array-elements-unshift");

    const answer = sendUnshift(userArray, userElement);

    let arrayComponents = "";

    for (let index = 0; index < answer.length; index++) {
      arrayComponents += `<li>${answer[index]}<li>`;
    }

    answerToDisplay.innerHTML = arrayComponents;
  });
};

const registerShiftEventListeners = () => {
  const shiftButton = document.querySelector(".shift-send");

  shiftButton.addEventListener("click", () => {
    const userArray = document.querySelector(".new-shift");
    const answerToDisplay = document.querySelector(".array-elements-shift");

    const answer = sendShift(userArray);

    let arrayComponents = "";

    for (let index = 0; index < answer.length; index++) {
      arrayComponents += `<li>${answer[index]}<li>`;

      answerToDisplay.innerHTML = arrayComponents;
    }
  });
};

const startProgram = () => {
  registerPushEventListener();
  registerPopEventListener();
  registerUnshiftEventListener();
  registerShiftEventListeners();
};

startProgram();
