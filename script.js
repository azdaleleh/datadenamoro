// === CONTADOR ===
const inicio = new Date("2025-06-30T18:52:00");

function atualizarContador() {
  const agora = new Date();
  const diff = agora - inicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  document.getElementById("contador").innerHTML = 
    `Estamos juntos há:<br>${dias} dias, ${horas}h ${minutos}min ${segundos}s <img src="assets/lele.png" alt="emoji" style="width: 40px; vertical-align: middle;">`;
}

setInterval(atualizarContador, 1000);
atualizarContador();

// === CORAÇÕES CAINDO ===
const canvas = document.getElementById("hearts-canvas");
const ctx = canvas.getContext("2d");

let hearts = [];
let width, height;

function resizeCanvas() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function criarCoracao() {
  return {
    x: Math.random() * width,
    y: -20,
    size: 20 + Math.random() * 20,
    speed: 1 + Math.random() * 2,
    alpha: 0.6 + Math.random() * 0.4
  };
}

function desenharCoracoes() {
  ctx.clearRect(0, 0, width, height);
  hearts.forEach((c, i) => {
    ctx.globalAlpha = c.alpha;
    ctx.font = `${c.size}px Arial`;
    ctx.fillStyle = "pink";
    ctx.fillText("❤", c.x, c.y);
    c.y += c.speed;

    if (c.y > height) {
      hearts[i] = criarCoracao();
      hearts[i].y = -20;
    }
  });

  while (hearts.length < 60) {
    hearts.push(criarCoracao());
  }

  requestAnimationFrame(desenharCoracoes);
}

desenharCoracoes();

// === MÚSICA ===
const musica = document.getElementById("musica");
const toggleBtn = document.getElementById("toggleMusic");
let tocando = false;

toggleBtn.addEventListener("click", () => {
  if (tocando) {
    musica.pause();
    toggleBtn.textContent = "▶️";
  } else {
    musica.play();
    toggleBtn.textContent = "⏸️";
  }
  tocando = !tocando;
});
