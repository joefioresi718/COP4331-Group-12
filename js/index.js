import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>COP4331 Project</h1>
// <div>
//    We use the same configuration as Parcel to bundle this sandbox, you can find more
//    info about Parcel
//    <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
//  </div>
// `;

const signupButton = document.getElementById("signUp");
const signinButton = document.getElementById("signIn");
const container = document.getElementById("container");

signupButton.addEventListener("click", () =>
  container.classList.add("right-panel-active")
);

signinButton.addEventListener("click", () =>
  container.classList.remove("right-panel-active")
);
