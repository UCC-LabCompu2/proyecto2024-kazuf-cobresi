// Capturamos el botón con su ID
document.getElementById("botonenviar").addEventListener("click", function() {

    // Obtenemos los valores seleccionados de los <select>
    let zona = document.getElementById("zona").value;
    let ambiente = document.getElementById("ambiente").value;
    let preferencia = document.getElementById("preferencia").value;

    // Guardamos los valores en un objeto (para organizarlos)
    let datosUsuario = {
        zona: zona,
        ambiente: ambiente,
        preferencia: preferencia
    };

    // Mostramos los datos en la consola (para probar)
    console.log("Datos seleccionados:", datosUsuario);
});
