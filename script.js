// Base de datos de cafeterías disponibles
const cafeterias = [
    { nombre: "Pauza", zona: "nva_cba", ambiente: "tranquilo", preferencia: "cafe" },
    { nombre: "Standard 69", zona: "nva_cba", ambiente: "tranquilo", preferencia: "comida" },
    { nombre: "Verasens", zona: "nva_cba", ambiente: "vibrante", preferencia:"comida" },
    { nombre: "Selah", zona: "nva_cba", ambiente: "vibrante", preferencia:"cafe" },
    { nombre: "Fulano", zona: "nva_cba", ambiente: "vibrante", preferencia:"cafe" },
    { nombre: "Cafe de Barrio", zona: "nva_cba", ambiente: "tranquilo", preferencia:"cafe" },
    { nombre: "Un Cafe", zona: "nva_cba", ambiente: "tranquilo", preferencia:"cafe" },
    { nombre: "Mousse", zona: "nva_cba", ambiente: "familiar", preferencia:"comida" },
    { nombre: "La cupke", zona: "nva_cba", ambiente: "vibrante", preferencia:"comida" },
    { nombre: "Leroma", zona: "nva_cba", ambiente: "tranquilo", preferencia:"cafe" },


    { nombre: "Anonimo", zona: "znorte", ambiente: "familiar", preferencia:"cafe" },
    { nombre: "Umami", zona: "znorte", ambiente: "familiar", preferencia:"comida" },
    { nombre: "Casa Chacana", zona: "znorte", ambiente: "vibrante", preferencia:"cafe" },
    { nombre: "Cardamomo", zona: "znorte", ambiente: "vibrante", preferencia:"comida" },
    { nombre: "Maria Antonieta", zona: "znorte", ambiente: "vibrante", preferencia:"comida" },
    { nombre: "Rue Cannelle", zona: "znorte", ambiente: "vibrante", preferencia:"comida" },
    { nombre: "Oreste", zona: "znorte", ambiente: "tranquilo", preferencia:"comida" },
    { nombre: "Renato", zona: "znorte", ambiente: "tranquilo", preferencia:"cafe" },


    { nombre: "Nonna Nera", zona: "zcentro", ambiente: "tranquilo", preferencia:"cafe" },
    { nombre: "Giuseppe", zona: "zcentro", ambiente: "vibrante", preferencia:"comida" },
    { nombre: "El Papagayo", zona: "zcentro", ambiente: "tranquilo", preferencia:"cafe" },
    { nombre: "Eliseo", zona: "zcentro", ambiente: "familiar", preferencia:"cafe" },
    { nombre: "Nectar", zona: "zcentro", ambiente: "tranquilo", preferencia:"cafe" },
    { nombre: "Marmol", zona: "zcentro", ambiente: "vibrante", preferencia:"comida" },
];

//  Detectar en qué página estamos
if (document.getElementById("btnEnviar")) {
    //  Estamos en `index.html`, capturamos los datos y redirigimos
    document.getElementById("btnEnviar").addEventListener("click", function () {
        let zona = document.getElementById("zona").value;
        let ambiente = document.getElementById("ambiente").value;
        let preferencia = document.getElementById("preferencia").value;

        // Guardamos los valores en localStorage
        localStorage.setItem("zona", zona);
        localStorage.setItem("ambiente", ambiente);
        localStorage.setItem("preferencia", preferencia);

        // Redirigir a `resultados.html`
        window.location.href = "resultados.html";
    });
}


if (document.getElementById("cafeterias")) {
    //  Estamos en `resultados.html`, mostramos las cafeterías filtradas
    let zonaSeleccionada = localStorage.getItem("zona");
    let ambienteSeleccionado = localStorage.getItem("ambiente");
    let preferenciaSeleccionada = localStorage.getItem("preferencia");


// Filtrar cafeterías según la selección
    const cafeteriasFiltradas = cafeterias.filter(cafe =>
        (zonaSeleccionada === "sin_preferencia" || cafe.zona === zonaSeleccionada) &&
        (ambienteSeleccionado === "sin_ambiente" || cafe.ambiente === ambienteSeleccionado) &&
        (preferenciaSeleccionada === "sin_preferencia" || cafe.preferencia === preferenciaSeleccionada)
    );


    // Mostrar cafeterías en `resultados.html`
    const contenedor = document.getElementById("cafeterias");

    if (cafeteriasFiltradas.length > 0) {
        cafeteriasFiltradas.forEach(cafe => {
            let cafeElemento = document.createElement("p");
            cafeElemento.textContent = `☕ ${cafe.nombre} - Zona: ${cafe.zona.toUpperCase()}, Ambiente: ${cafe.ambiente.toUpperCase()}, Preferencia: ${cafe.preferencia.toUpperCase()}`;
            contenedor.appendChild(cafeElemento);
        });
    } else {
        contenedor.innerHTML = "<p>Asegurate de elegir tus preferencias.</p>";
    }


    // Botón para volver a la página principal
    document.getElementById("btnVolver").addEventListener("click", function () {
        window.location.href = "index.html";
    });
}