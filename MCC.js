document.addEventListener('DOMContentLoaded', function() {
    var crearBoton = document.getElementById('crear-boton');
    
    // Función adicional para el botón crear-boton
    function segundaFuncion() {
        alert('¡Curso Creado con Exito!');
        // Redirigir a otra página diferente
        window.location.href = 'Instructor_Curso.html'; // Modificado para redirigir correctamente
    }

    // Evento para el segundo click en crear-boton
    crearBoton.addEventListener('click', function() {
        // Llamar directamente a la segunda función
        segundaFuncion();
    });

    // Evento para seleccionar imagen cuando se hace clic en image-preview
    var imagePreview = document.getElementById('image-preview');
    var fileInput = document.getElementById('file-input');
    
    imagePreview.addEventListener('click', function() {
        fileInput.click();
    });

    fileInput.addEventListener('change', function() {
        var file = this.files[0];

        if (file) {
            var reader = new FileReader();

            reader.onload = function(e) {
                var selectedImage = document.getElementById('selected-image');
                var imagePlaceholder = document.getElementById('image-placeholder');
                selectedImage.setAttribute('src', e.target.result);
                imagePlaceholder.style.display = 'none';
                imagePreview.style.cursor = 'default';
            };

            reader.readAsDataURL(file);
        }
    });
});
