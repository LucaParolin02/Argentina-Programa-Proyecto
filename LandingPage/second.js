// Espera a que se cargue la página
window.addEventListener('load', function () {
    // Encuentra el botón "Generar PDF"
    let pdfBtn = document.querySelector('#pdf-btn');

    // Agrega el evento "click" al botón
    pdfBtn.addEventListener('click', function () {
        // Obtén los valores del formulario
        let name = document.querySelector('#name').value;
        let email = document.querySelector('#email').value;
        let queja = document.querySelector('#queja').value;

        // Crea un objeto jsPDF
        let doc = new jsPDF();

        // Agrega el contenido al PDF
        doc.text(`Nombre: ${name}`, 10, 10);
        doc.text(`Correo electrónico: ${email}`, 10, 20);
        doc.text(`Queja: ${queja}`, 10, 30);

        // Descarga el archivo PDF
        doc.save('queja.pdf');
    });
});

