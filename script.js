(() => {
  "use strict";

  const eventDate = new Date("2026-12-12T21:00:00-03:00").getTime();
  const countdownParts = {
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds")
  };
  const countdownStatus = document.getElementById("countdownStatus");
  const countdownLabel = document.querySelector(".countdown-wrap .card-label");

  function updateCountdown() {
    const difference = eventDate - Date.now();
    if (difference <= 0) {
      Object.values(countdownParts).forEach((part) => {
        if (part) part.textContent = "00";
      });
      if (countdownLabel) countdownLabel.textContent = "¡LLEGÓ EL GRAN DÍA!";
      if (countdownStatus) countdownStatus.textContent = "¡Hoy celebramos este logro juntos!";
      return;
    }

    const units = {
      days: Math.floor(difference / 86_400_000),
      hours: Math.floor((difference % 86_400_000) / 3_600_000),
      minutes: Math.floor((difference % 3_600_000) / 60_000),
      seconds: Math.floor((difference % 60_000) / 1_000)
    };

    Object.entries(units).forEach(([key, value]) => {
      const node = countdownParts[key];
      if (node) node.textContent = key === "days" ? String(value) : String(value).padStart(2, "0");
    });
  }

  updateCountdown();
  window.setInterval(updateCountdown, 1000);

  const music = document.getElementById("backgroundMusic");
  const musicButton = document.getElementById("musicButton");
  const musicLabel = document.getElementById("musicLabel");
  const toast = document.getElementById("musicToast");
  let toastTimeout;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(toastTimeout);
    toastTimeout = window.setTimeout(() => toast.classList.remove("show"), 4200);
  }

  function setMusicState(isPlaying) {
    if (!musicButton || !musicLabel) return;
    musicButton.classList.toggle("is-playing", isPlaying);
    musicButton.setAttribute("aria-pressed", String(isPlaying));
    musicButton.setAttribute("aria-label", isPlaying ? "Pausar música de fondo" : "Reproducir música de fondo");
    musicLabel.textContent = isPlaying ? "PAUSAR MÚSICA" : "REPRODUCIR MÚSICA";
  }

  if (music && musicButton) {
    music.volume = 0.34;
    musicButton.addEventListener("click", async () => {
      if (!music.paused) {
        music.pause();
        setMusicState(false);
        return;
      }

      try {
        await music.play();
        setMusicState(true);
      } catch (error) {
        showToast("No se pudo reproducir la música. Probá nuevamente o revisá que el archivo esté en la carpeta assets.");
        setMusicState(false);
      }
    });

    music.addEventListener("pause", () => setMusicState(false));
    music.addEventListener("ended", () => setMusicState(false));
  }

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.documentElement.classList.add("js-ready");
    const observer = new IntersectionObserver((entries, activeObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          activeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
  }

  // Enlaces externos configurados para abrir en una pestaña nueva.
  document.querySelectorAll('a[target="_blank"]').forEach((link) => {
    link.rel = "noopener noreferrer";
  });
})();
