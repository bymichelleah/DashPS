var ctx = document.getElementById("barchart").getContext("2d");
var barchart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Lunes", "Miércoles", "Jueves", "Viernes", "Domingo"],
    datasets: [
      {
        label: "# El día con más gente",
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
    scales: {
      x: { ticks: { font: { size: 12 } } },
      y: { ticks: { font: { size: 12 }, beginAtZero: true } },
    },
  },
});
