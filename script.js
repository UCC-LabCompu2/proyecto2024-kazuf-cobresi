// Base de datos de cafeterías disponibles
const cafeterias = [
    {
        nombre: "Pauza",
        zona: "nva_cba",
        ambiente: "tranquilo",
        preferencia: "cafe",
        instagram: "https://www.instagram.com/pauzaok?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        logo: "imagenes/pauza_logo.jpg"
    },
    {
        nombre: "Standard 69",
        zona: "nva_cba",
        ambiente: "tranquilo",
        preferencia: "comida",
        instagram: "https://www.instagram.com/standard_69?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        logo: "imagenes/standard69_logo.jpg"
    },
    {
        nombre: "Verasens",
        zona: "nva_cba",
        ambiente: "vibrante",
        preferencia: "comida",
        instagram: "https://www.instagram.com/verasenshelados?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        logo: "imagenes/verasens_logo.jpg"
    },
    {
        nombre: "Selah",
        zona: "nva_cba",
        ambiente: "familiar",
        preferencia: "cafe",
        instagram: "https://www.instagram.com/selahrefugiodecafe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        logo: "imagenes/selah_logo.jpg"
    },
    {
        nombre: "Fulano",
        zona: "nva_cba",
        ambiente: "vibrante",
        preferencia: "cafe",
        instagram: "https://www.instagram.com/fulanocafe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        logo: "imagenes/fulano_logo.jpg"
    },
    {
        nombre: "Cafe de Barrio",
        zona: "nva_cba",
        ambiente: "tranquilo",
        preferencia: "cafe",
        instagram: "https://www.instagram.com/cafedebarriook?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        logo: "imagenes/CafeDeBarrio_logo.jpg"
    },
    {
        nombre: "Un Cafe",
        zona: "nva_cba",
        ambiente: "tranquilo",
        preferencia: "cafe",
        instagram: "https://www.instagram.com/uncafe.ok?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        logo: "imagenes/UnCafe_logo.png"
    },
    {
        nombre: "Mousse",
        zona: "nva_cba",
        ambiente: "familiar",
        preferencia: "comida",
        instagram: "https://www.instagram.com/mousseok?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        logo: "imagenes/mousse_logo.jpg"
    },
    {
        nombre: "La cupke",
        zona: "nva_cba",
        ambiente: "vibrante",
        preferencia: "comida",
        instagram: "https://www.instagram.com/lacapke?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        logo: "imagenes/LaCapke_logo.jpg"
    },
    {
        nombre: "Leroma",
        zona: "nva_cba",
        ambiente: "tranquilo",
        preferencia: "cafe",
        instagram: "https://www.instagram.com/leroma.ok?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        logo: "imagenes/leroma_logo.jpg"
    },


    {
        nombre: "Anonimo",
        zona: "znorte",
        ambiente: "familiar",
        preferencia: "cafe",
        instagram: "https://www.instagram.com/anonimowineclub?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        logo: "imagenes/anonimo_logo.jpg"
    },
    {
        nombre: "Umami",
        zona: "znorte",
        ambiente: "familiar",
        preferencia: "comida",
        instagram: "https://www.instagram.com/umamicasadecafe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        logo: "imagenes/umami_logo.png"
    },
    {
        nombre: "Casa Chacana",
        zona: "znorte",
        ambiente: "vibrante",
        preferencia: "cafe",
        instagram: "https://www.instagram.com/casachacana?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        logo: "imagenes/CasaChacana_logo.jpg"
    },
    {
        nombre: "Cardamomo",
        zona: "znorte",
        ambiente: "vibrante",
        preferencia: "comida",
        instagram: "https://www.instagram.com/cardamomo.panaderiaycafe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        logo: "imagenes/cardamomo_logo.jpg"
    },
    {
        nombre: "Maria Antonieta",
        zona: "znorte",
        ambiente: "vibrante",
        preferencia: "comida",
        instagram: "https://www.instagram.com/mariaantonieta_universodeli?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        logo: "imagenes/MariaAntonieta_logo.jpg"
    },
    {
        nombre: "Rue Cannelle",
        zona: "znorte",
        ambiente: "vibrante",
        preferencia: "comida",
        instagram: "https://www.instagram.com/rue.cannelle?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        logo: "imagenes/RueCannelle_logo.jpg"
    },
    {
        nombre: "Oreste",
        zona: "znorte",
        ambiente: "tranquilo",
        preferencia: "comida",
        instagram: "https://www.instagram.com/oresteurca?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        logo: "imagenes/oreste_logo.jpg"
    },
    {
        nombre: "Merce",
        zona: "znorte",
        ambiente: "tranquilo",
        preferencia: "comida",
        instagram: "https://www.instagram.com/merce.tejeda?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        logo: "imagenes/merce_logo.jpg"
    },
    {
        nombre: "Renato",
        zona: "znorte",
        ambiente: "tranquilo",
        preferencia: "cafe",
        instagram: "https://www.instagram.com/renatocafe1928?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        logo: "imagenes/renato_logo.jpg"
    },


    {
        nombre: "Nonna Nera",
        zona: "zcentro",
        ambiente: "tranquilo",
        preferencia: "cafe",
        instagram: "https://www.instagram.com/nonna.nera?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        logo: "imagenes/NonnaNera_logo.jpg"
    },
    {
        nombre: "Giuseppe",
        zona: "zcentro",
        ambiente: "vibrante",
        preferencia: "comida",
        instagram: "https://www.instagram.com/giuseppebarcba?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        logo: "imagenes/giuseppe_logo.jpg"
    },
    {
        nombre: "El Papagayo",
        zona: "zcentro",
        ambiente: "tranquilo",
        preferencia: "cafe",
        instagram: "https://www.instagram.com/elpapagayopetit?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        logo: "imagenes/ElPapagayo_logo.jpg"
    },
    {
        nombre: "Eliseo",
        zona: "zcentro",
        ambiente: "familiar",
        preferencia: "cafe",
        instagram: "https://www.instagram.com/eliseo.cafe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        logo: "imagenes/eliseo_logo.jpg"
    },
    {
        nombre: "Nectar",
        zona: "zcentro",
        ambiente: "tranquilo",
        preferencia: "cafe",
        instagram: "https://www.instagram.com/nectar.cba?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        logo: "imagenes/nectar_logo.jpg"
    },
    {
        nombre: "Marmol",
        zona: "zcentro",
        ambiente: "vibrante",
        preferencia: "comida",
        instagram: "https://www.instagram.com/marmolsiglo17?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        logo: "imagenes/marmol_logo.jpg"
    },
    {
        nombre: "El Tazon",
        zona: "zcentro",
        ambiente: "familiar",
        preferencia: "comida",
        instagram: "https://www.instagram.com/eltazon.cafeteria?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        logo: "imagenes/ElTazon_logo.jpg"
    },
    {
        nombre: "Le Dureau",
        zona: "zcentro",
        ambiente: "vibrante",
        preferencia: "cafe",
        instagram: "https://www.instagram.com/ledureaucafe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        logo: "imagenes/LeDureau_logo.jpg"
    },
    {
        nombre: "Morfeta",
        zona: "zcentro",
        ambiente: "tranquilo",
        preferencia: "comida",
        instagram: "https://www.instagram.com/morfeta.morfeta?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        logo: "imagenes/morfeta_logo.jpg"
    },
];

//  Detectar en qué página estamos
function enviarDatosCafeteria() {
    let zona = document.getElementById("zona").value;
    let ambiente = document.getElementById("ambiente").value;
    let preferencia = document.getElementById("preferencia").value;

    // Verificar si alguna opción sigue sin seleccionarse
    if (zona === "OpcionZona" || ambiente === "OpcionAmbiente" || preferencia === "OpcionPreferencia") {
        alert("⚠️ Debes seleccionar una opción en todas las categorías antes de continuar.");
        return; // Detiene la ejecución
    }

    // Guardamos en localStorage y redirigimos
    localStorage.setItem("zona", zona);
    localStorage.setItem("ambiente", ambiente);
    localStorage.setItem("preferencia", preferencia);

    console.log("Redirigiendo a resultados.html...");
    window.location.href = "resultados.html";
}


// Si estamos en `resultados.html`, mostramos las cafeterías filtradas
if (document.getElementById("cafeterias")) {
    let zonaSeleccionada = localStorage.getItem("zona");
    let ambienteSeleccionado = localStorage.getItem("ambiente");
    let preferenciaSeleccionada = localStorage.getItem("preferencia");

    // Filtrar cafeterías según la selección del usuario
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

            // Imagen del café
            let logoImg = document.createElement("img");
            logoImg.src = cafe.logo;
            logoImg.alt = `Logo de ${cafe.nombre}`;
            logoImg.classList.add("imagen-cafeteria");

            // Contenedor del texto
            let textoDiv = document.createElement("div");
            textoDiv.classList.add("texto-cafeteria");

            // Nombre del café
            let nombre = document.createElement("div");
            nombre.textContent = cafe.nombre;
            nombre.classList.add("nombre-cafeteria");

            // Link de Instagram
            let instagramLink = document.createElement("a");
            instagramLink.href = cafe.instagram;
            instagramLink.textContent = "Instagram";
            instagramLink.target = "_blank";
            instagramLink.classList.add("instagram-link");

            // Agregar texto al contenedor
            textoDiv.appendChild(nombre);
            textoDiv.appendChild(instagramLink);

            // Agregar imagen y texto al contenedor principal
            cafeElemento.appendChild(logoImg);
            cafeElemento.appendChild(textoDiv);

            // Agregar al contenedor de cafeterías
            contenedor.appendChild(cafeElemento);
        });
    } else {
        contenedor.innerHTML = "<p>Asegúrate de completar el cuestionario.</p>";
    }
}

// Botón para volver a `index.html`
function volverAlInicio() {
    console.log("Redirigiendo a index.html...");
    window.location.href = "index.html";
}


// Botón para empezar el cuestionario
function iniciarCuestionario() {
    console.log("Redirigiendo a cuestionario.html...");
    window.location.href = "cuestionario.html";
}


// Botón para volver a información
function volverDesdeInfo() {
    window.location.href = "index.html";
}

// Canvas
const initRuleta = () => {
    const canvas = document.getElementById("ruletaCanvas");
    if (!canvas) {
        // Si no hay canvas en la página, no seguimos
        return;
    }
    const ctx = canvas.getContext("2d");
    const btnGirar = document.getElementById("girarRuleta");
    const resultadoTexto = document.getElementById("resultadoCafeteria");

    // Lista de cafeterías (28 en total)
    const cafeterias = [
        "Pauza", "Standard 69", "Verasens", "Selah", "Fulano",
        "Cafe de Barrio", "Un Cafe", "Mousse", "La Capke", "Leroma",
        "Anonimo", "Umami", "Casa Chacana", "Cardamomo", "Maria Antonieta",
        "Rue Cannelle", "Oreste", "Merce", "Renato", "Nonna Nera",
        "Giuseppe", "El Papagayo", "Eliseo", "Nectar", "Marmol",
        "El Tazon", "Le Dureau", "Morfeta"
    ];

    // Paleta de colores marrón aesthetic
    const colores = ["#8B5E3B", "#D2B48C", "#A67B5B", "#5C3A1D", "#C19A6B", "#E1C699", "#A07B5F"];

    let anguloActual = 0;
    let girando = false;
    const cantidad = 28; // 28 espacios en la ruleta
    const anguloSeccion = (Math.PI * 2) / cantidad;

    // Función para dibujar la ruleta
    const dibujarRuleta = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < cantidad; i++) {
            let anguloInicio = anguloActual + i * anguloSeccion;
            let anguloFin = anguloInicio + anguloSeccion;

            // Dibujar el sector
            ctx.beginPath();
            ctx.moveTo(200, 200);
            ctx.arc(200, 200, 200, anguloInicio, anguloFin);
            ctx.fillStyle = colores[i % colores.length];
            ctx.fill();
            ctx.stroke();

            // Dibujar el texto (nombre de la cafetería)
            ctx.save();
            ctx.translate(200, 200);
            ctx.rotate(anguloInicio + anguloSeccion / 2);
            ctx.fillStyle = "white";
            ctx.font = "15px Times New Roman";
            ctx.fillText(cafeterias[i], 100, 4);
            ctx.restore();
        }
    };

    // Función para girar la ruleta
    const girarRuleta = () => {
        if (girando) return;
        girando = true;

        let velocidad = Math.random() * 10 + 20;
        let desaceleracion = 0.98;

        const animarGiro = () => {
            anguloActual += velocidad * 0.01;
            velocidad *= desaceleracion;

            if (velocidad > 0.01) {
                requestAnimationFrame(animarGiro);
            } else {
                girando = false;
                mostrarResultado();
            }

            dibujarRuleta();
        };

        animarGiro();
    };

    // Función para mostrar el resultado
    const mostrarResultado = () => {
        // Determinar el sector donde cayó el señalador
        let indiceSeleccionado = Math.floor((Math.PI * 1.5 - anguloActual) / anguloSeccion) % cantidad;
        if (indiceSeleccionado < 0) {
            indiceSeleccionado += cantidad; // Asegura que sea positivo
        }

        let cafeteriaSeleccionada = cafeterias[indiceSeleccionado];
        resultadoTexto.innerText = `☕︎ ¡Visita ${cafeteriaSeleccionada}!`;
    };

    btnGirar.onclick = girarRuleta;

    // Por último, dibujar la ruleta al cargar
    dibujarRuleta();
};

// Llamada directa para inicializar la ruleta
initRuleta();

// Boton para la rouleta aleatoria
function irAleatorio() {
    window.location.href = "rouleta.html";
}

