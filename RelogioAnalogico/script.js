const hora = document.querySelector(".hora");
const minuto = document.querySelector(".minuto");
const segundo = document.querySelector(".segundo");

function pegarHora() {
  const horario = new Date();

  const horaRotacao = (360 / 12) * horario.getHours();
  const minutoRotacao = (360 / 60) * horario.getMinutes();
  const segundoRotacao = (360 / 60) * horario.getSeconds();

  hora.style.transform = `rotate(${horaRotacao}deg)`;
  minuto.style.transform = `rotate(${minutoRotacao}deg)`;
  segundo.style.transform = `rotate(${segundoRotacao}deg)`;
}

setInterval(() => {
  pegarHora();
}, 1000);

pegarHora();
