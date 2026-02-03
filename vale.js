const noBtn = document.getElementById("no-btn");
const container = document.querySelector(".container");

document.addEventListener("mousemove", (e) => {
  const rect = noBtn.getBoundingClientRect();
  const distance = Math.hypot(
    e.clientX - (rect.left + rect.width / 2),
    e.clientY - (rect.top + rect.height / 2)
  );

  if (distance < 50) {
    const containerRect = container.getBoundingClientRect();
    const maxLeft = containerRect.width - rect.width;
    const maxTop = containerRect.height - rect.height;

    const newLeft = Math.random() * maxLeft;
    const newTop = Math.random() * maxTop;

    noBtn.style.position = "absolute";
    noBtn.style.left = newLeft + "px";
    noBtn.style.top = newTop + "px";
  }
});