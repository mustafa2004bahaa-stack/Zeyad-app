const myform = document.getElementById("registerForm"),
  uname = document.getElementById("uname"),
  uemail = document.getElementById("uemail"),
  upass = document.getElementById("upass"),
  confpass = document.getElementById("urepass");

myform.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validate()) {
   
    localStorage.setItem("username", uname.value);
    localStorage.setItem("useremail", uemail.value);
    window.location.href = "home.html";
  }
});

myform.addEventListener("reset", () => {
  window.location.reload();
});

const setError = (input, errorMsg) => {
  const inputControl = input.parentElement;
  const errorParagraph = inputControl.querySelector(".error");
  errorParagraph.innerText = errorMsg;
  inputControl.classList.remove("success");
  inputControl.classList.add("error");
};

const setSuccess = (input) => {
  const inputControl = input.parentElement;
  const errorParagraph = inputControl.querySelector(".error");
  errorParagraph.innerText = "";
  inputControl.classList.remove("error");
  inputControl.classList.add("success");
};

const validate = () => {
  let valid = true;

  if (uname.value === "") {
    setError(uname, "Name is required");
    valid = false;
  } else {
    setSuccess(uname);
  }

  if (!uemail.value.includes("@")) {
    setError(uemail, "Invalid email");
    valid = false;
  } else {
    setSuccess(uemail);
  }

  if (upass.value.length < 8) {
    setError(upass, "Password must be at least 8 characters");
    valid = false;
  } else {
    setSuccess(upass);
  }

  if (confpass.value !== upass.value) {
    setError(confpass, "Passwords do not match");
    valid = false;
  } else {
    setSuccess(confpass);
  }

  return valid;
};
