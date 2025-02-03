// Base de datos de cafeterías disponibles
const cafeterias = [
    { nombre: "Pauza", zona: "nva_cba", ambiente: "tranquilo", preferencia: "cafe",instagram: "https://www.instagram.com/pauzaok?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",logo: "imagenes/pauza_logo.jpg"},
    { nombre: "Standard 69", zona: "nva_cba", ambiente: "tranquilo", preferencia: "comida" ,instagram: "https://www.instagram.com/standard_69?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",logo: "imagenes/standard69_logo.jpg"},
    { nombre: "Verasens", zona: "nva_cba", ambiente: "vibrante", preferencia:"comida" ,instagram: "https://www.instagram.com/verasenshelados?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",logo: "imagenes/verasens_logo.jpg"},
    { nombre: "Selah", zona: "nva_cba", ambiente: "familiar", preferencia:"cafe" ,instagram: "https://www.instagram.com/selahrefugiodecafe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",logo: "imagenes/selah_logo.jpg"},
    { nombre: "Fulano", zona: "nva_cba", ambiente: "vibrante", preferencia:"cafe" ,instagram: "https://www.instagram.com/fulanocafe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",logo: "imagenes/fulano_logo.jpg"},
    { nombre: "Cafe de Barrio", zona: "nva_cba", ambiente: "tranquilo", preferencia:"cafe" ,instagram: "https://www.instagram.com/cafedebarriook?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",logo: "imagenes/CafeDeBarrio_logo.jpg"},
    { nombre: "Un Cafe", zona: "nva_cba", ambiente: "tranquilo", preferencia:"cafe" ,instagram: "https://www.instagram.com/uncafe.ok?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",logo: "imagenes/UnCafe_logo.png"},
    { nombre: "Mousse", zona: "nva_cba", ambiente: "familiar", preferencia:"comida" ,instagram: "https://www.instagram.com/mousseok?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",logo: "imagenes/mousse_logo.jpg"},
    { nombre: "La cupke", zona: "nva_cba", ambiente: "vibrante", preferencia:"comida" ,instagram: "https://www.instagram.com/lacapke?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",logo: "imagenes/LaCapke_logo.jpg"},
    { nombre: "Leroma", zona: "nva_cba", ambiente: "tranquilo", preferencia:"cafe" ,instagram: "https://www.instagram.com/leroma.ok?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",logo: "imagenes/leroma_logo.jpg"},


    { nombre: "Anonimo", zona: "znorte", ambiente: "familiar", preferencia:"cafe" ,instagram: "https://www.instagram.com/anonimowineclub?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",logo: "imagenes/anonimo_logo.jpg"},
    { nombre: "Umami", zona: "znorte", ambiente: "familiar", preferencia:"comida" ,instagram: "https://www.instagram.com/umamicasadecafe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",logo: "imagenes/umami_logo.png"},
    { nombre: "Casa Chacana", zona: "znorte", ambiente: "vibrante", preferencia:"cafe" ,instagram: "https://www.instagram.com/casachacana?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",logo: "imagenes/CasaChacana_logo.jpg"},
    { nombre: "Cardamomo", zona: "znorte", ambiente: "vibrante", preferencia:"comida" ,instagram: "https://www.instagram.com/cardamomo.panaderiaycafe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",logo: "imagenes/cardamomo_logo.jpg"},
    { nombre: "Maria Antonieta", zona: "znorte", ambiente: "vibrante", preferencia:"comida" ,instagram: "https://www.instagram.com/mariaantonieta_universodeli?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",logo: "imagenes/MariaAntonieta_logo.jpg"},
    { nombre: "Rue Cannelle", zona: "znorte", ambiente: "vibrante", preferencia:"comida" ,instagram: "https://www.instagram.com/rue.cannelle?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",logo: "imagenes/RueCannelle_logo.jpg"},
    { nombre: "Oreste", zona: "znorte", ambiente: "tranquilo", preferencia:"comida" ,instagram: "https://www.instagram.com/oresteurca?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",logo: "imagenes/oreste_logo.jpg"},
    { nombre: "Merce", zona: "znorte", ambiente: "tranquilo", preferencia:"comida" ,instagram: "https://www.instagram.com/merce.tejeda?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",logo: "imagenes/merce_logo.jpg"},
    { nombre: "Renato", zona: "znorte", ambiente: "tranquilo", preferencia:"cafe" ,instagram: "https://www.instagram.com/renatocafe1928?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",logo: "imagenes/renato_logo.jpg"},


    { nombre: "Nonna Nera", zona: "zcentro", ambiente: "tranquilo", preferencia:"cafe" ,instagram: "https://www.instagram.com/nonna.nera?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",logo: "imagenes/NonnaNera_logo.jpg"},
    { nombre: "Giuseppe", zona: "zcentro", ambiente: "vibrante", preferencia:"comida" ,instagram: "https://www.instagram.com/giuseppebarcba?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",logo: "imagenes/giuseppe_logo.jpg"},
    { nombre: "El Papagayo", zona: "zcentro", ambiente: "tranquilo", preferencia:"cafe" ,instagram: "https://www.instagram.com/elpapagayopetit?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",logo: "imagenes/ElPapagayo_logo.jpg"},
    { nombre: "Eliseo", zona: "zcentro", ambiente: "familiar", preferencia:"cafe" ,instagram: "https://www.instagram.com/eliseo.cafe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",logo: "imagenes/eliseo_logo.jpg"},
    { nombre: "Nectar", zona: "zcentro", ambiente: "tranquilo", preferencia:"cafe" ,instagram: "https://www.instagram.com/nectar.cba?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",logo: "imagenes/nectar_logo.jpg"},
    { nombre: "Marmol", zona: "zcentro", ambiente: "vibrante", preferencia:"comida" ,instagram: "https://www.instagram.com/marmolsiglo17?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",logo: "imagenes/marmol_logo.jpg"},
    { nombre: "El Tazon", zona: "zcentro", ambiente: "familiar", preferencia:"comida" ,instagram: "https://www.instagram.com/eltazon.cafeteria?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",logo: "imagenes/ElTazon_logo.jpg"},
    { nombre: "Le Dureau", zona: "zcentro", ambiente: "vibrante", preferencia:"cafe" ,instagram: "https://www.instagram.com/ledureaucafe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",logo: "imagenes/LeDureau_logo.jpg"},
    { nombre: "Morfeta", zona: "zcentro", ambiente: "tranquilo", preferencia:"comida" ,instagram: "https://www.instagram.com/morfeta.morfeta?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",logo: "imagenes/morfeta_logo.jpg"},
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
            let cafeElemento = document.createElement("div");
            cafeElemento.classList.add("cafe-item");

            // Agregar logo si está disponible
            let logoImg = document.createElement("img");
            logoImg.src = cafe.logo;
            logoImg.alt = `Logo de ${cafe.nombre}`;
            logoImg.classList.add("logo");

            // Agregar nombre del café
            let nombre = document.createElement("span");
            nombre.textContent = cafe.nombre;

            // Agregar enlace a Instagram
            let instagramLink = document.createElement("a");
            instagramLink.href = cafe.instagram;
            instagramLink.textContent = "Instagram";
            instagramLink.target = "_blank";
            instagramLink.classList.add("instagram-link");

            // Agregar elementos al contenedor
            cafeElemento.appendChild(logoImg);
            cafeElemento.appendChild(nombre);
            cafeElemento.appendChild(instagramLink);

            contenedor.appendChild(cafeElemento);
        });
    } else {
        contenedor.innerHTML = "<p>Asegúrate de completar el cuestionario.</p>";
    }

}