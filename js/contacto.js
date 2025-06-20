"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // Elementos
  const form      = document.getElementById("form2");
  const nombreInp = document.getElementById("nombreTxt");
  const emailInp  = document.getElementById("emailTxt");
  const msgInp    = document.getElementById("mensajeTxt");
  const alerta    = document.getElementById("mensajeAlert");

  const emailReg  = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;

  // Inicializa EmailJS con tu clave pública
  emailjs.init("5ZmYdav0fSxQ77Eav");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();               // 🔑 Evita el envío “normal”

    // Valores
    const nombre  = nombreInp.value.trim();
    const email   = emailInp.value.trim();
    const mensaje = msgInp.value.trim();

    // Validaciones
    if (!nombre || !email || !mensaje) {
      alerta.textContent = "Debe llenar todos los campos";
      alerta.classList.add("alertaRoja");
      return;
    }
    if (!emailReg.test(email)) {
      alerta.textContent = "Email inválido";
      alerta.classList.add("alertaRoja");
      return;
    }

    try {
      await emailjs.sendForm("service_f2ovo0j", "template_iitspxm", form);
      alerta.textContent = "Mensaje enviado";
      alerta.classList.replace("alertaRoja", "alertaVerde");
      form.reset();                   // Limpia el formulario
    } catch (err) {
      console.error(err);
      alerta.textContent = "Error al enviar. Intenta de nuevo.";
      alerta.classList.replace("alertaVerde", "alertaRoja");
    }
  });
});