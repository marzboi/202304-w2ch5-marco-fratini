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

const sendSome = (userInput, callbackFunction) => {
  const makeArray = userInput.value.split(" ");
  return arrays.newSome(makeArray, callbackFunction);
};

const sendEvery = (userInput, callbackFunction) => {
  const makeArray = userInput.value.split(" ");
  return arrays.newEvery(makeArray, callbackFunction);
};

const sendFind = (userInput, callbackFunction) => {
  const makeArray = userInput.value.split(" ");
  return arrays.newFind(makeArray, callbackFunction);
};

const sendFilter = (userInput, callbackFunction) => {
  const makeArray = userInput.value.split(" ");
  return arrays.newFilter(makeArray, callbackFunction);
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

const registerShiftEventListener = () => {
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

const registerSomeEventListener = () => {
  const someButton = document.querySelector(".some-send");

  someButton.addEventListener("click", () => {
    const userArray = document.querySelector(".new-some");
    const userCallbackCode = document.querySelector(".new-some-add").value;
    const userCallback = executeCode(userCallbackCode);

    const answerToDisplay = document.querySelector(".array-elements-some");
    const answer = sendSome(userArray, userCallback);

    answerToDisplay.innerHTML = answer;
  });
};

const registerEveryEventListener = () => {
  const everyButton = document.querySelector(".every-send");

  everyButton.addEventListener("click", () => {
    const userArray = document.querySelector(".new-every");
    const userCallbackCode = document.querySelector(".new-every-add").value;
    const userCallback = executeCode(userCallbackCode);

    const answerToDisplay = document.querySelector(".array-elements-every");
    const answer = sendEvery(userArray, userCallback);

    answerToDisplay.innerHTML = answer;
  });
};

const registerFindEventListener = () => {
  const findButton = document.querySelector(".find-send");

  findButton.addEventListener("click", () => {
    const userArray = document.querySelector(".new-find");
    const userCallbackCode = document.querySelector(".new-find-add").value;
    const userCallback = executeCode(userCallbackCode);

    const answerToDisplay = document.querySelector(".array-elements-find");
    const answer = sendFind(userArray, userCallback);

    answerToDisplay.innerHTML = answer;
  });
};

const registerFilterEventListener = () => {
  const filterButton = document.querySelector(".filter-send");

  filterButton.addEventListener("click", () => {
    const userArray = document.querySelector(".new-filter");
    const userCallbackCode = executeCode(
      document.querySelector(".new-filter-add").value
    );

    const answerToDisplay = document.querySelector(".array-elements-filter");
    const answer = sendFilter(userArray, userCallbackCode);

    let arrayComponents = "";

    for (let index = 0; index < answer.length; index++) {
      arrayComponents += `<li>${answer[index]}<li>`;
    }

    answerToDisplay.innerHTML = arrayComponents;
  });
};

const executeCode = (code) => {
  const func = new Function(`return ${code}`);
  return func();
};

const startProgram = () => {
  registerPushEventListener();
  registerPopEventListener();
  registerUnshiftEventListener();
  registerShiftEventListener();
  registerSomeEventListener();
  registerEveryEventListener();
  registerFindEventListener();
  registerFilterEventListener();
};

startProgram();
