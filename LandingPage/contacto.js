// se crea una constante form y trae los elementos del id contact-form
const form = document.getElementById('contact-form');

//Los valores ingresados por el usario son almacenados en estas constantes
form.addEventListener('submit', function (event) {
    //previene algunas cosas invalidas.
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Se crea el mensaje

    alert(`Gracias por contactarnos, ${name}! se le ha enviado un mail.`);

    // Limpia el formulario
    form.reset();
});