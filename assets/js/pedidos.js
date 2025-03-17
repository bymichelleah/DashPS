document.addEventListener("DOMContentLoaded", function () {
  const pedidosContainer = document.querySelector(".cards-container");

  function obtenerPedidos() {
    return JSON.parse(localStorage.getItem("pedidos")) || [];
  }

  function renderizarPedidos() {
    if (!pedidosContainer) return;
    pedidosContainer.innerHTML = "";

    const pedidos = obtenerPedidos();

    if (pedidos.length === 0) {
      pedidosContainer.innerHTML = "<p>No hay pedidos aún.</p>";
      return;
    }

    pedidos.forEach((pedido, index) => {
      const estadoClase = obtenerClaseEstado(pedido.estado);

      const pedidoHTML = `
                <div class="card">
                    <h3>PEDIDO N° ${index + 1}</h3>
                    <p class="text"><strong>Código:</strong> ${
                      pedido.codigo
                    }</p>
                    <hr>
                    <p class="text"><strong>Mesa:</strong> ${pedido.mesa}</p>
                    <hr>
                    <p class="text"><strong>Cliente:</strong> ${
                      pedido.cliente
                    }</p>
                    <hr>
                    <p class="text"><strong>Producto:</strong> ${
                      pedido.producto
                    }</p>
                    <hr>
                    <p class="text"><strong>Precio:</strong> S/.${
                      pedido.precio
                    }</p>
                    <hr>
                    <p class="text"><strong>Estado:</strong> <span class="estado ${estadoClase}">${
        pedido.estado
      }</span></p>
      <hr>
                    <p class="text"><strong>Método de Pago:</strong> ${
                      pedido.metodoPago
                    }</p>
                   
                </div>
            `;
      pedidosContainer.innerHTML += pedidoHTML;
    });

    console.log("Pedidos cargados:", pedidos);
  }

  function obtenerClaseEstado(estado) {
    switch (estado.toLowerCase()) {
      case "cancelado":
        return "cancelado";
      case "pendiente":
        return "pendiente";
      case "en proceso":
        return "proceso";
      case "entregado":
        return "entregado";
      default:
        return "";
    }
  }

  // Agregar estilos dinámicamente al documento
  const estilos = `
        .cards-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
            padding: 20px;
            max-width: 900px;
            margin: 0 auto;
        }
        .card {
            background-color: var(--color-blanco);
            border-radius: 10px;
            box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
            padding: 15px;
            width: 200px;
            text-align: left;
            border: 2px solid #d6d6f5;
        }
        .card h3 {
            text-align: center;
            color: var(--color-primario);
        }
        .total {
            font-weight: bold;
            text-align: right;
            color: var(--color-negro);
        }
        .card .text {
            margin: 5px 0;
            font-size: 14px;
            color: var(--color-terciario);
            font-weight: bold;
        }
        /* Estilos de los estados */
        .estado {
            font-weight: bold;
            padding: 3px 6px;
            border-radius: 5px;
            font-size: 13px;
        }
        /* Colores de los estados */
        .cancelado {
            color: var(--color-cancelado);
        }
        .pendiente {
            color: var(--color-pendiente);
        }
        .proceso {
            color: var(--color-enproceso);
        }
        .entregado {
            color: var(--color-entregado);
        }
    `;

  const styleSheet = document.createElement("style");
  styleSheet.innerText = estilos;
  document.head.appendChild(styleSheet);

  renderizarPedidos();
});
