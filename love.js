const bgVideo = document.getElementById("bgVideo");
const soundToggle = document.getElementById("soundToggle");
const returnLink = document.getElementById("returnLink");

soundToggle.addEventListener("click", async () => {
  try {
    bgVideo.muted = false;
    bgVideo.volume = 1.0;
    await bgVideo.play();

    soundToggle.textContent = "sound on";
    soundToggle.style.opacity = "0.55";

    returnLink.classList.remove("hidden");
    returnLink.classList.add("show");
  } catch (error) {
    soundToggle.textContent = "tap again";
    console.error(error);
  }
});