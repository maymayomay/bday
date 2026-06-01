function startWebsite() {
  const music = document.getElementById("music");
  const startScreen = document.getElementById("startScreen");

  music.play();

  startScreen.style.opacity = "0";

  setTimeout(() => {
    startScreen.style.display = "none";
  }, 1000);
}
setInterval(() => {
  const heart = document.createElement("div");
  heart.innerHTML = "♡";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "-20px";
  heart.style.color = "#d9a7c7";
  heart.style.fontSize = "24px";
  heart.style.pointerEvents = "none";
  heart.style.zIndex = "1";

  document.body.appendChild(heart);

  heart.animate(
    [
      { transform: "translateY(0)", opacity: 1 },
      { transform: "translateY(-100vh)", opacity: 0 }
    ],
    { duration: 5000 }
  );

  setTimeout(() => {
    heart.remove();
  }, 5000);
}, 900);
function showWords() {
  document.getElementById("wordsBox").classList.remove("hidden");
}

function showPhoto() {
  document.getElementById("photoBox").classList.remove("hidden");
}