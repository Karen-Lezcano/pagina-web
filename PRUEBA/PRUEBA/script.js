document.getElementById('infoButton').addEventListener('click', function() {
    var info = document.getElementById('info');
    if (info.style.display === 'none') {
        info.style.display = 'block';
        this.textContent = 'Ocultar Información';
    } else {
        info.style.display = 'none';
        this.textContent = 'Más Información';
    }
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Formulario enviado. ¡Gracias por contactarnos!');
    this.reset(); // Limpiar el formulario
});