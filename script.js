const hourhand = document.querySelector("#hour");
const minutehand = document.querySelector("#minute");
const secondhand = document.querySelector("#seconds");

setInterval(setClock, 1000);

function setClock() {
  const D = new Date();
  const H = D.getHours();
  const M = D.getMinutes();
  const S = D.getSeconds();

  const H_rotation = 30 * H + M / 2;
  const M_rotation = 6 * M;
  const S_rotation = 6 * S;

  hourhand.style.transform = `rotate(${H_rotation}deg)`;
  minutehand.style.transform = `rotate(${M_rotation}deg)`;
  secondhand.style.transform = `rotate(${S_rotation}deg)`;
}
setClock();
