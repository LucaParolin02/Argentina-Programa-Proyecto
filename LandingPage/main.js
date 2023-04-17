const contactoForm = document.getElementById("contact-form");
contactoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(contactoForm);
  fetch("https://formspree.io/your-email-address", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Object.fromEntries(formData)),
  })
    .then((response) => {
      if (response.ok) {
        alert("Mensaje enviado correctamente.");
        contactoForm.reset();
      } else {
        alert("No se pudo enviar el mensaje. Inténtelo de nuevo más tarde.");
      }
    })
    .catch((error) => {
      console.error("Error al enviar el mensaje:", error);
    });
});