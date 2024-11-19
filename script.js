const animationContainer = document.querySelector(".animation");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 7 + "s";
  animationContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

// Generate hearts
setInterval(createHeart, 300);
