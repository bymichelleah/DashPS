const container = document.querySelector(".container");
const registerbtn = document.querySelector(".register-btn");
const loginbtn = document.querySelector(".login-btn");

registerbtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginbtn.addEventListener("click", () => {
  container.classList.remove("active");
});
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "Michelle" && password === "1234") {
    alert("Accedió correctamente");
    window.location.href = "dash.html";
  } else {
    alert("Usuario o contraseña incorrectos");
  }
});
