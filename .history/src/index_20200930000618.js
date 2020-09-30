const signupButton = document.getElementById("signUpGhost");
const signinButton = document.getElementById("loginGhost");
const container = document.getElementById("container");

signupButton.addEventListener("click", () =>
  container.classList.add("right-panel-active")
);

signinButton.addEventListener("click", () =>
  container.classList.remove("right-panel-active")
);
//