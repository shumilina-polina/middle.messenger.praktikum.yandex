export function checkLabelIsVisible(input) {
  input.addEventListener("input", () => {
    const label = input.labels[0];
    if (input.value === "") {
      label.classList.add("label-hidden");
    } else {
      label.classList.remove("label-hidden");
    }
  });
}

export function checkInputIsValid(input, errorText) {
  input.addEventListener("input", () => {
    if (!input.validity.valid && input.value !== "") {
      showInputError(input, errorText);
    } else {
      hideInputError(input);
    }
  });
}

const showInputError = (input, errorText) => {
  const errorElement = input.parentNode.querySelector(".input-error");
  errorElement.textContent = errorText;
};
const hideInputError = (input) => {
  const errorElement = input.parentNode.querySelector(".input-error");
  errorElement.textContent = "";
};

export function checkPasswordsAreMatch(inputPasswords) {
  if (inputPasswords[0].value !== inputPasswords[1].value) {
    inputPasswords.forEach((input) => input.classList.add("input-invalid"));
    showInputError(inputPasswords[1], "Пароли не совпадают");
  } else {
    inputPasswords.forEach((input) => input.classList.remove("input-invalid"));
    hideInputError(inputPasswords[1]);
  }
}
