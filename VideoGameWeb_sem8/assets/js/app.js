// Semana 7 - JavaScript complementario para validacion del formulario de contacto.
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector("#contactForm");
  const formFeedback = document.querySelector("#formFeedback");

  if (!contactForm || !formFeedback) return;

  contactForm.addEventListener("invalid", () => {
    contactForm.classList.add("was-validated");
    formFeedback.className = "mt-3 mb-0 text-warning";
    formFeedback.textContent = "Revisa los campos marcados antes de enviar la solicitud.";
  }, true);

  contactForm.addEventListener("submit", (event) => {
    if (!contactForm.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
      contactForm.classList.add("was-validated");
      formFeedback.className = "mt-3 mb-0 text-warning";
      formFeedback.textContent = "Completa nombre, correo valido e interes para enviar la solicitud.";
      return;
    }

    event.preventDefault();
    contactForm.classList.add("was-validated");

    const formData = new FormData(contactForm);
    const name = String(formData.get("customerName")).trim();
    const interest = String(formData.get("customerInterest")).trim();

    formFeedback.className = "mt-3 mb-0 text-info";
    formFeedback.textContent = `Gracias, ${name}. Te enviaremos novedades sobre ${interest}.`;
    contactForm.reset();
    contactForm.classList.remove("was-validated");
  });
});
