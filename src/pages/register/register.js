import "/scss/share-styles.scss";
import "./register.scss";

import { checkLabelIsVisible } from "/js/form";
import { checkInputIsValid } from "/js/form";
import { checkPasswordsAreMatch } from "../../js/form";

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form-register");
  const inputs = document.querySelectorAll(".input");
  const inputLogin = document.querySelector("#register-login");
  const inputPasswords = document.querySelectorAll("[type=password]");

  inputs.forEach((input) => {
    checkLabelIsVisible(input);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputIsValid(inputLogin, "Неверный логин");
    checkPasswordsAreMatch(inputPasswords);
  });
});
