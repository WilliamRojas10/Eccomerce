function registrar() {
    // Obtener el elemento del formulario
    var form = document.getElementById('crear-cuenta');

    // Verificar si el formulario existe
    if (form) {
        // Crear un objeto FormData con los datos del formulario -> Clave y valor
        var formData = new FormData(form);

        // Convertir el objeto FormData a un objeto JavaScript
        var formDataObject = {};
        formData.forEach(function(value, key){
            formDataObject[key] = value;
        });

        console.log("Numero de telefono +"+ formDataObject["codigo-pais"], formDataObject["telefono"])

        // Aquí puedes hacer lo que desees con el objeto formDataObject
        // Por ejemplo, podrías enviarlo a través de una solicitud AJAX.

        // Mostrar el objeto en la consola
        console.log(formDataObject);
    } else {
        console.error("El formulario no fue encontrado.");
    }
}


function actualizarFormatoInput() {
    var tipoDocumento= document.querySelector('.tipo-documento');
    var numeroDocumento = document.querySelector('.numero-documento');

    // Obtener el valor del tipo de documento seleccionado
    var tipoDocumento = tipoDocumento.options[tipoDocumento.selectedIndex].value;

    // Actualizar el formato del input según el tipo de documento
    switch (tipoDocumento) {
        case 'dni':
            // Formato para DNI
            numeroDocumento.placeholder = 'Formato: 12.345.678';
            numeroDocumento.maxLength = 8;
            numeroDocumento.pattern = '\\d{8}';
            break;
        case 'cuil':
            // Formato para CUIL
            numeroDocumento.placeholder = 'Formato: 20-34567890-1';
            numeroDocumento.maxLength = 11;
            numeroDocumento.pattern = '\\d{11}';
            break;
        case 'pasaporte':
            // Formato para Pasaporte
            numeroDocumento.placeholder = 'Formato: A1234567';
            numeroDocumento.maxLength = 9;
            numeroDocumento.pattern = '[A-Z]\\d{7}';
            break;
        default:
            // Restablecer el formato por defecto
            numeroDocumento.placeholder = '';
            numeroDocumento.maxLength = '';
            numeroDocumento.pattern = '';
    }
}
