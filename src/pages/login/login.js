import "/scss/share-styles.scss";
import "/pages/login/login.scss";
import { checkLabelIsVisible } from "/js/form";
import { checkInputIsValid } from "/js/form";

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form-login");
  const inputs = document.querySelectorAll(".input");
  const inputLogin = document.querySelector("#login-name");

  inputs.forEach((input) => {
    checkLabelIsVisible(input);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputIsValid(inputLogin, "Неверный логин");
  });
});
