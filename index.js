// three state variables that match the requirement
const numberBank = [];
const odds = [];
const evens = [];

//grab the root DOM element
const app = document.querySelector("#app");

//returns odds or evens
const oddsOrEven = (num) => {
  if (num % 2 === 0) {
    evens.push(num);
  } else odds.push(num);
};

//functionto sortOne number
const sortOne = () => {
  if (numberBank.length === 0) {
    return;
  } else {
    const sortedNum = numberBank.shift();
    oddsOrEven(sortedNum);
  }
};

//function to sort all numbers
const sortAllNumbers = () => {
  while (numberBank.length > 0) {
    sortOne();
  }
};

// form compontent
const formComponent = () => {
  const form = document.createElement("form");
  const prompt = document.createElement("label");
  prompt.textContent = "Add a number to the bank: ";
  const inputName = document.createElement("input");

  inputName.type = "number";
  inputName.name = "number";

  const submitButton = document.createElement("input");

  const sort1 = document.createElement("input");
  sort1.type = "button";
  sort1.value = "Sort 1";
  sort1.addEventListener("click", () => {
    sortOne();
    render();
  });

  const sortAll = document.createElement("input");
  sortAll.type = "button";
  sortAll.value = "Sort All";
  sortAll.addEventListener("click", () => {
    sortAllNumbers();
    render();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const num = Number(inputName.value);
    if (Number.isNaN(num)) {
      return;
    } else {
      numberBank.push(num);
    }
    inputName.value = "";

    render();
  });

  submitButton.type = "submit";
  submitButton.value = "Add number";
  form.appendChild(prompt);
  form.appendChild(inputName);
  form.appendChild(submitButton);
  form.appendChild(sort1);
  form.appendChild(sortAll);
  return form;
};

const appComponent = () => {
  //creates a container
  const mainContainer = document.createElement("div");
  const title = document.createElement("h1");
  title.textContent = "Odds and Events";

  const myForm = formComponent();

  const bankContainer = document.createElement("div");
  const numBankHeading = document.createElement("h2");
  numBankHeading.textContent = "Number Bank";

  const bankDisplay = document.createElement("p");
  bankDisplay.textContent = numberBank.join(" ");
  bankContainer.appendChild(numBankHeading);
  bankContainer.appendChild(bankDisplay);

  bankDisplay.className = "number-box";

  const oddsContainer = document.createElement("div");
  const oddsHeading = document.createElement("h2");
  oddsHeading.textContent = "Odds";

  const oddsDisplay = document.createElement("p");
  oddsDisplay.textContent = odds.join(" ");
  oddsContainer.appendChild(oddsHeading);
  oddsContainer.appendChild(oddsDisplay);

  oddsDisplay.className = "number-box";

  const evensContainer = document.createElement("div");
  const evensHeading = document.createElement("h2");
  evensHeading.textContent = "Evens";

  const evensDisplay = document.createElement("p");
  evensDisplay.textContent = evens.join(" ");
  evensContainer.appendChild(evensHeading);
  evensContainer.appendChild(evensDisplay);

  evensDisplay.className = "number-box";

  mainContainer.appendChild(title);
  mainContainer.appendChild(myForm);
  mainContainer.appendChild(bankContainer);
  mainContainer.appendChild(oddsContainer);
  mainContainer.appendChild(evensContainer);

  return mainContainer;
};

const render = () => {
  //will clear the root
  app.innerHTML = "";
  app.appendChild(appComponent());
};
render();
