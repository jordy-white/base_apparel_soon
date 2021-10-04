const input = document.getElementById("email");
const submit = document.querySelector(".submit");
const errorMessage = document.querySelector(".error-msg");
const errorLogo = document.getElementById("error");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const validateEmail = (e) => {
  if (input.value.match(emailRegex)) {
    // valid
    errorMessage.innerHTML = "";
    errorLogo.style.display = "none";
  } else {
    // invalid
    errorMessage.innerHTML = "Please provide a valid email";
    errorLogo.style.display = "block";
  }
};

// listen for click: not working
submit.addEventListener("click", validateEmail);
