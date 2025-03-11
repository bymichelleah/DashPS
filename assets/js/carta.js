document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const closeModal = document.querySelector(".close");
  const buttons = document.querySelectorAll(".pedir-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      modal.style.display = "flex"; // Mostrar modal
    });
  });

  closeModal.addEventListener("click", function () {
    modal.style.display = "none"; // Ocultar modal
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
