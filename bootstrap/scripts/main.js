$(document).ready(() => {
  const closeModalBtn = "#modalClose";
  const loginBtn = "#login-btn";
  const modal = ".modal";
  const modalOpenedClass = "opened";

  $(closeModalBtn).on("click", () => {
    $(modal).removeClass(modalOpenedClass)
  });

  $(loginBtn).on("click", () => {
    $(modal).addClass(modalOpenedClass);
  });

});

const btnLogin = document.getElementById("loginButton");

var url = "http://localhost:3000/posts";
let xhr = new XMLHttpRequest();

btnLogin.addEventListener("click", () => {
  const emailInput = document.getElementById("exampleDropdownFormEmail1").value;
  const passwordInput = document.getElementById("exampleDropdownFormPassword1").value;

   if (emailInput.length == 0 || passwordInput.length == 0){
        alert("Заполнены не все поля");
        return;
      } else {
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");

        let j = {
          email: emailInput,
          password: passwordInput
        }

        let jss = JSON.stringify(j);

        xhr.send(jss);
      }

})
