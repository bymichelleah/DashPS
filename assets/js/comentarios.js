document
  .getElementById("comentarioForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que la página se recargue

    // Obtener valores del formulario
    const nombre = document.getElementById("nombre").value || "Anónimo";
    const comentario = document.getElementById("comentario").value;
    const calificacion = document.getElementById("calificacion").value;

    // Crear objeto de comentario
    const nuevoComentario = {
      nombre: nombre,
      comentario: comentario,
      calificacion: "★".repeat(calificacion) + "☆".repeat(5 - calificacion),
    };

    // Obtener comentarios almacenados y agregar el nuevo
    let comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];
    comentarios.push(nuevoComentario);

    // Guardar en localStorage
    localStorage.setItem("comentarios", JSON.stringify(comentarios));

    // Limpiar formulario
    document.getElementById("comentarioForm").reset();

    alert("¡Comentario enviado con éxito!");
  });

document.addEventListener("DOMContentLoaded", function () {
  const contenedor = document.getElementById("comentariosContainer");
  const comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];

  if (comentarios.length === 0) {
    contenedor.innerHTML =
      "<p>No hay comentarios aún. ¡Sé el primero en opinar! 😊</p>";
  } else {
    comentarios.forEach((comentario) => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
                <img src="./assets/img/avatar${
                  Math.floor(Math.random() * 8) + 1
                }.png" alt="Avatar">
                <div class="info">
                    <h3>${comentario.nombre}</h3>
                    <div class="stars">${comentario.calificacion}</div>
                    <p>${comentario.comentario}</p>
                </div>
            `;

      contenedor.appendChild(card);
    });
  }
});
