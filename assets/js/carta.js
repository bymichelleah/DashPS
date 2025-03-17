document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const closeModal = document.querySelector(".close");
  const buttons = document.querySelectorAll(".pedir-btn");

  modal.style.display = "none";

  buttons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault(); // 🚀 Evita que el enlace se active
      modal.style.display = "flex"; // Mostrar el modal
    });
  });

  closeModal.addEventListener("click", function () {
    modal.style.display = "none"; // Ocultar el modal
    window.location.href = "pedidos.html"; // Redirigir después de cerrar el modal
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none"; // Cierra si se hace clic fuera del modal
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const pedirBotones = document.querySelectorAll(".pedir-btn");

  function obtenerPedidos() {
    return JSON.parse(localStorage.getItem("pedidos")) || [];
  }

  function guardarPedidos(pedidos) {
    localStorage.setItem("pedidos", JSON.stringify(pedidos));
  }

  // Función para obtener un valor aleatorio de un array
  function obtenerValorAleatorio(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  pedirBotones.forEach((boton) => {
    boton.addEventListener("click", function () {
      const card = boton.closest(".carta"); // Asegúrate de que coincida con tu estructura HTML
      const producto = card.querySelector("h3").textContent.trim();
      const precio = card
        .querySelector(".precio")
        .textContent.replace("S/.", "")
        .trim();

      // Crear el pedido con estado y método de pago aleatorio
      const nuevoPedido = {
        codigo: Math.floor(10000 + Math.random() * 90000),
        mesa: Math.floor(Math.random() * 10) + 1,
        cliente: obtenerValorAleatorio([
          "Michelle",
          "Junior",
          "Nathali",
          "Damaris",
          "Ore",
          "Daniel",
          "Gian",
          "Alessandro",
        ]),
        producto: producto,
        precio: precio,
        estado: obtenerValorAleatorio([
          "Pendiente",
          "En proceso",
          "Entregado",
          "Cancelado",
        ]),
        metodoPago: obtenerValorAleatorio([
          "Efectivo 💵",
          "Yape 📱",
          "Tarjeta 💳",
        ]),
      };

      // Verificar si el pedido se está generando bien
      console.log("Nuevo pedido:", nuevoPedido);

      // Guardar en LocalStorage
      const pedidos = obtenerPedidos();
      pedidos.push(nuevoPedido);
      guardarPedidos(pedidos);

      // Redirigir a pedidos.html
      window.location.href = "pedidos.html";
    });
  });
});
