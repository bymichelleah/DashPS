var ctx2 = document.getElementById("doughnut").getContext("2d");
var doughnut = new Chart(ctx2, {
  type: "doughnut",
  data: {
    labels: ["Combo1", "Combo2", "Combo3", "Combo4", "Combo5"],
    datasets: [
      {
        label: "# El favorito",
        data: [20, 16, 12, 8, 4],
        backgroundColor: [
          "rgba(120,134,199, 0.8)",
          "rgba(169,181,223, 0.8)",
          "rgba(45,51,107, 0.8)",
          "rgba(173,169,223, 0.8)",
          "rgba(255,242,242, 0.8)",
        ],
        borderColor: "rgba(0, 0, 0, 0.8)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  },
});
