//variable
const contactLabel = document.querySelectorAll("[js-contact-label]");
const contactInput = document.querySelectorAll("[js-contact-input]");

// Utility function to handle error state
function handleErrorState(parent, label, condition) {
  parent.classList.toggle("in-error", condition);
  label.classList.toggle("in-error", condition);
  //errorElement.classList.toggle("is-hidden", !condition);
}

// General validation function for name and lastname
function handleNameOrLastnameEvent(event, parent) {
  const dataInput = event.target.value;
  const size = dataInput.length;
  const label = parent.querySelector("label");
  handleErrorState(parent, label, (size < 3 || size > 50) && size !== 0);
}

function handlePhoneEvent(event, parent) {
  const board = event.key;
  let dataInput = event.target.value.replace(/\D+/g, "");
  const label = parent.querySelector("label");
  //const error = parent.querySelector(`[js-error]`);

  const size = dataInput.length;
  let isError =
    (!/^[0-9]$/i.test(board) && !["Backspace", "Delete"].includes(board)) ||
    size >= 12 ||
    size < 10;

  if (size > 10) {
    dataInput = dataInput.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
  } else if (size > 5) {
    dataInput = dataInput.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
  } else if (size > 2) {
    dataInput = dataInput.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
  }

  if (["Backspace", "Delete"].includes(board)) {
    isError = false;
  }
  event.target.value = dataInput;
  handleErrorState(parent, label, isError);
}

function handleEmailEvent(event, parent) {
  const dataInput = event.target.value;
  const label = parent.querySelector("label");
  const re = /\S+@\S+\.\S+/;
  //const error = parent.querySelector(`[js-error]`);
  handleErrorState(parent, label, !re.test(dataInput));
}

function handleMessageEvent(event, parent) {
  const dataInput = event.target.value;
  const size = dataInput.length;
  const label = parent.querySelector("label");
  //const error = parent.querySelector(`[js-error]`);
  const maxLength = parent.querySelector("[name='message']").maxLength;

  // Update letter counter
  document.querySelector(`[js-letterCounter]`).innerHTML = size - maxLength;

  const blankSpaces = (words) => words.split(" ").length - 1;
  const justChar = (chars) => chars.replace(/\s/g, "").length;

  const isError =
    blankSpaces(dataInput) < 1 ||
    dataInput.indexOf(" ") < 1 ||
    blankSpaces(dataInput) - justChar(dataInput) >= 0 ||
    ((size < 10 || size > 300) && size !== 0);

  handleErrorState(parent, label, isError);
}

// Main function to add event listeners
function addEventListenersToInput(input) {
  input.addEventListener("blur", function () {
    const labelOnce = document.querySelector(`label[for="${input.name}"]`);
    labelOnce.classList.toggle("is-filled", input.value);
  });

  input.addEventListener("focusin", function () {
    const labelOnce = document.querySelector(`label[for="${input.name}"]`);
    labelOnce.classList.add("is-filled");
  });

  input.addEventListener("keyup", function (event) {
    const parent = input.parentElement;
    switch (input.name) {
      case "name":
      case "lastname":
        handleNameOrLastnameEvent(event, parent);
        break;
      case "phone":
        handlePhoneEvent(event, parent);
        break;
      case "email":
        handleEmailEvent(event, parent);
        break;
      case "message":
        handleMessageEvent(event, parent);
        break;
    }
  });
}

// Apply event listeners to all contact inputs
contactInput.forEach(addEventListenersToInput);
