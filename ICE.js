document.getElementById('image-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        document.getElementById('selected-image').src = e.target.result;
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        document.getElementById('selected-image').src = './img/—Pngtree—photo icon_4490555.png';
    }
});

document.getElementById('file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const fileNameElement = document.getElementById('file-name');
    const fileIconElement = document.getElementById('selected-file-icon');

    if (file) {
        const fileType = file.type;

        // Actualiza el nombre del archivo
        fileNameElement.textContent = file.name;

        // Cambia el icono según el tipo de archivo
        let iconSrc = './img/hoja.png'; // Icono por defecto
        if (fileType === 'application/pdf') {
            iconSrc = './img/pdf-icon.png';
        } else if (fileType.includes('word')) {
            iconSrc = './img/word-icon.png';
        } else if (fileType.includes('excel')) {
            iconSrc = './img/excel-icon.png';
        } else if (fileType.includes('presentation')) {
            iconSrc = './img/powerpoint-icon.png';
        } else if (fileType.includes('rar') || fileType.includes('zip')) {
            iconSrc = './img/rar-icon.png';
        }

        // Actualiza el icono
        fileIconElement.src = iconSrc;
    } else {
        fileNameElement.textContent = 'No hay archivo seleccionado';
        fileIconElement.src = './img/hoja.png';
    }
});




