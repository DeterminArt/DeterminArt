const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

canvas.style.position = "fixed";
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.zIndex = -1;
canvas.style.opacity = 0.25;

let w, h;
function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

let t = 0;

function draw() {
  ctx.fillStyle = "rgba(7,7,10,0.2)";
  ctx.fillRect(0, 0, w, h);

  for (let i = 0; i < 40; i++) {
    let x = w / 2 + Math.sin(t + i) * (i * 8);
    let y = h / 2 + Math.cos(t * 1.3 + i) * (i * 6);

    ctx.beginPath();
    ctx.fillStyle = i % 2 === 0 ? "#19d6ff" : "#d800ff";
    ctx.arc(x, y, 2, 0, Math.PI * 2);
    ctx.fill();
  }

  t += 0.01;
  requestAnimationFrame(draw);
}

draw();