"use strict";

document.addEventListener("DOMContentLoaded", () => {

  const form      = document.getElementById("form2");
  const nombreInp = document.getElementById("nombreTxt");
  const emailInp  = document.getElementById("emailTxt");
  const msgInp    = document.getElementById("mensajeTxt");
  const alerta    = document.getElementById("mensajeAlert");

  const startTime = Date.now();

  // Inicializar EmailJS
  emailjs.init("UMGs0cdeHruaD__NR");

  // =========================
  // FORM SUBMIT
  // =========================
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre  = nombreInp.value.trim();
    const email   = emailInp.value.trim();
    const mensaje = msgInp.value.trim();

    //  Honeypot
    const honeypot = form.company?.value;
    if (honeypot) return;

    //  Anti-bot (envío demasiado rápido)
    if (Date.now() - startTime < 3000) {
      alerta.textContent = "Envio sospechoso";
      alerta.classList.add("alertaRoja");
      return;
    }

    //  Validaciones
    if (!nombre || !email || !mensaje) {
      alerta.textContent = "Debe llenar todos los campos";
      alerta.classList.add("alertaRoja");
      return;
    }

    if (mensaje.length < 10) {
      alerta.textContent = "Mensaje muy corto";
      alerta.classList.add("alertaRoja");
      return;
    }

    try {
      await emailjs.send("service_lq3eo48", "template_3d6qdlp", {
        name: nombre,
        email: email,
        message: mensaje,
      });

      alerta.textContent = "Mensaje enviado ✔";
      alerta.classList.remove("alertaRoja");
      alerta.classList.add("alertaVerde");

      form.reset();

    } catch (err) {
      console.log("FULL ERROR:", err);

      alerta.textContent =
        err?.text || err?.message || "Error al enviar";

      alerta.classList.remove("alertaVerde");
      alerta.classList.add("alertaRoja");
    }
  });

  // =========================
  // EMAIL BUTTON (ANTI-SPAM)
  // =========================
  const emailBtn = document.getElementById("emailBtn");

  if (emailBtn) {
    emailBtn.addEventListener("click", (e) => {
      e.preventDefault();

      const user = "hola";
      const domain = "walterfallascr.com";

      window.location.href = `mailto:${user}@${domain}`;
    });
  }

});