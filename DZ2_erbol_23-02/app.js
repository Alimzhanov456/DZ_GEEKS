const block = document.getElementById("block");
const shape = document.getElementById("shape");
const centerX = shape.offsetLeft + shape.offsetWidth / 2;
const centerY = shape.offsetTop + shape.offsetHeight / 2;
const radius = shape.offsetWidth / 2 - block.offsetWidth / 2;

function getPosition(angle) {
  const x = centerX + radius * Math.cos(angle);
  const y = centerY + radius * Math.sin(angle);
  return { x, y };
}

function moveBlock(angle) {
  const position = getPosition(angle);
  block.style.left = position.x + "px";
  block.style.top = position.y + "px";
  angle += 0.05;
  if (angle >= 2 * Math.PI) {
    angle = 0;
  }
  setTimeout(() => moveBlock(angle), 20);
}

moveBlock(0);