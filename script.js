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

  // Música instrumental tranquila: se inicia únicamente cuando el invitado pulsa el botón.
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
        showToast("No se pudo reproducir la música. Probá nuevamente.");
        setMusicState(false);
      }
    });

    music.addEventListener("pause", () => setMusicState(false));
    music.addEventListener("ended", () => setMusicState(false));
  }

  // Desplegar/ocultar la lista de invitados.
  const toggleGuests = document.getElementById("toggleGuests");
  const guestContent = document.getElementById("guestContent");
  if (toggleGuests && guestContent) {
    toggleGuests.addEventListener("click", () => {
      const isOpening = guestContent.hidden;
      guestContent.hidden = !isOpening;
      toggleGuests.setAttribute("aria-expanded", String(isOpening));
      toggleGuests.textContent = isOpening
        ? "OCULTAR LISTA DE INVITADOS"
        : "VER LISTA DE INVITADOS Y CONFIRMAR ASISTENCIA";
    });
  }

  // Confirmación previa dentro de la página, sin window.confirm().
  const whatsappModal = document.getElementById("whatsappModal");
  const modalGuestName = document.getElementById("modalGuestName");
  const continueWhatsApp = document.getElementById("continueWhatsApp");
  const cancelWhatsApp = document.getElementById("cancelWhatsApp");
  let lastTrigger = null;

  function closeWhatsAppModal() {
    if (!whatsappModal) return;
    whatsappModal.hidden = true;
    if (continueWhatsApp) continueWhatsApp.href = "#";
    if (lastTrigger) lastTrigger.focus();
  }

  if (whatsappModal && modalGuestName && continueWhatsApp && cancelWhatsApp) {
    document.querySelectorAll(".guest-row").forEach((guest) => {
      const button = guest.querySelector(".guest-confirm");
      const name = guest.dataset.name || "";
      const quota = Number.parseInt(guest.dataset.quota || "0", 10);
      if (!button || !name || !Number.isInteger(quota) || quota < 1) return;

      const message = `¡Hola! Quiero confirmar la asistencia de la invitación a nombre de ${name}. La invitación es válida para ${quota} ${quota === 1 ? "persona" : "personas"}. ¡Gracias!`;
      const whatsappUrl = `https://wa.me/595972510330?text=${encodeURIComponent(message)}`;

      button.addEventListener("click", () => {
        lastTrigger = button;
        modalGuestName.textContent = name;
        continueWhatsApp.href = whatsappUrl;
        whatsappModal.hidden = false;
        cancelWhatsApp.focus();
      });
    });

    cancelWhatsApp.addEventListener("click", closeWhatsAppModal);
    whatsappModal.addEventListener("click", (event) => {
      if (event.target === whatsappModal) closeWhatsAppModal();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !whatsappModal.hidden) closeWhatsAppModal();
    });
  }

  // Animación progresiva del encabezado.
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
