const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

let w, h;

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

let t = 0;

function draw() {
  ctx.fillStyle = "rgba(7,7,10,0.15)";
  ctx.fillRect(0, 0, w, h);

  for (let i = 0; i < 60; i++) {
    let x = w / 2 + Math.sin(t + i * 0.2) * (i * 6);
    let y = h / 2 + Math.cos(t * 1.2 + i * 0.3) * (i * 5);

    ctx.beginPath();
    ctx.fillStyle = i % 2 === 0 ? "#19d6ff" : "#d800ff";
    ctx.arc(x, y, 2.2, 0, Math.PI * 2);
    ctx.fill();
  }

  t += 0.012;
  requestAnimationFrame(draw);
}

draw();