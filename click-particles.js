document.addEventListener("click", (e) => {
  for (let i = 0; i < 8; i++) {
    const particle = document.createElement("div");
    particle.textContent = "❤";
    particle.style.position = "absolute";
    particle.style.left = e.clientX + (Math.random() * 40 - 20) + "px";
    particle.style.top = e.clientY + (Math.random() * 40 - 20) + "px";
    particle.style.color = "pink";
    particle.style.fontSize = 20 + Math.random() * 10 + "px";
    particle.style.userSelect = "none";
    particle.style.pointerEvents = "none";
    particle.style.zIndex = 9999;
    particle.style.opacity = "1";
    particle.style.transition = "transform 1s ease-out, opacity 1s ease-out";

    document.body.appendChild(particle);

    requestAnimationFrame(() => {
      particle.style.transform = `translateY(-100px) translateX(${Math.random() * 40 - 20}px)`;
      particle.style.opacity = "0";
    });

    setTimeout(() => particle.remove(), 1000);
  }
});
