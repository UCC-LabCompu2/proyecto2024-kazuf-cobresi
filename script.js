// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Guardar la ubicación seleccionada
    document.querySelectorAll('.location-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const location = this.getAttribute('data-location');
            localStorage.setItem('selectedLocation', location);
            window.location.href = this.href;
        });
    });

    // Guardar las preferencias seleccionadas
    const savePreferencesButton = document.querySelector('.boton a');
    if (savePreferencesButton) {
        savePreferencesButton.addEventListener('click', function (e) {
            e.preventDefault();

            const preferences = [];
            document.querySelectorAll('input[name="Preferencias"]:checked').forEach(input => {
                preferences.push(input.value);
            });

            const consumeType = document.querySelector('input[name="Consumir"]:checked').value;
            const petFriendly = document.querySelector('input[name="Pets"]:checked').value;

            localStorage.setItem('preferences', JSON.stringify(preferences));
            localStorage.setItem('consumeType', consumeType);
            localStorage.setItem('petFriendly', petFriendly);

            window.location.href = this.href;
        });
    }

    // Mostrar los resultados según las preferencias guardadas
    if (window.location.pathname.includes('Resultados.html')) {
        const selectedLocation = localStorage.getItem('selectedLocation');
        const preferences = JSON.parse(localStorage.getItem('preferences'));
        const consumeType = localStorage.getItem('consumeType');
        const petFriendly = localStorage.getItem('petFriendly');

        const cafes = [
            {
                name: "Selah",
                location: "ubicacion3",
                vegano: "si",
                sinTacc: "si",
                consume: "Salon",
                petFriendly: "si",
                instagram: "https://www.instagram.com/selahrefugiodecafe?igsh=MTRtcWljeGhwamFmNA==",
                page: "https://drive.google.com/file/d/1ygq3TMBbkbN1D1xglVIND04okp8pjMDu/view?fbclid=PAZXh0bgNhZW0CMTEAAaYVPYe8dZzHlTyYo_PRKw4CSYDlROPjoW2jHIP2uUprLA2Q8WgdTKZWxtA_aem_AXaGswL1NgMAGyiSxCg-R5iZVLnkXP1h9RHJlXdvyDbFVMa5cLt8j_nlLrRtuOBkSFPguDQzvuocfjcPXriyF2LX"
            },
            {
                name: "Lacapke",
                location: "ubicacion2",
                vegano: "no",
                sinTacc: "si",
                consume: "Salon",
                petFriendly: "si",
                instagram: "https://www.instagram.com/lacapke?igsh=NGlhajJsMHFuYjFx",
                page: "https://linktr.ee/LaCapke.Quiero?fbclid=PAZXh0bgNhZW0CMTEAAabCu81Zi_PAxxGq1b6bacBK6hSRXKLEDokeikUIOuSvVAZnEIWPBDRMQ-Y_aem_AXanMiaiWazSpzx35BH1pqKyTgGA-C697wKtDBGWtEt0r1Zw4bawFa5INr0NgcseUnJgu611NzXA6XEb9ATsagxG"
            },
            {
                name: "Uncafe",
                location: "ubicacion2",
                vegano: "no",
                sinTacc: "si",
                consume: "Salon y Take away",
                petFriendly: "si",
                instagram: "https://www.instagram.com/uncafe.ok?igsh=MTdldXdvNmg1MnB0aw==",
                page: ""
            },
            {
                name: "Leroma",
                location: "ubicacion1",
                vegano: "no",
                sinTacc: "no",
                consume: "Salon y Take away",
                petFriendly: "no",
                instagram: "https://www.instagram.com/leroma.ok?igsh=Zjc1aDRiZWgzM2Vr",
                page: "https://leroma.pedix.app/sucursales"
            },
            {
                name: "Marmol",
                location: "ubicacion3",
                vegano: "si",
                sinTacc: "si",
                consume: "Salon",
                petFriendly: "no",
                instagram: "https://www.instagram.com/marmolsiglo17?igsh=ZDY4N2dmZndwenZ0",
                page: "https://marmolsiglo17.com/?fbclid=PAZXh0bgNhZW0CMTEAAaYxbU-b4IHidrQbDLT7BNJSLTp0Q1dliTdLJ-E2epte3Id8R2-80X85jao_aem_AXaDo9RX38PpORDLVMWrGmd5WHTD0XsvACEymlo6vq8wvpP-e4NnZNXJLVzEgwV3S3wfq2ZM6DLF4sUR5Z-EblBP"
            },
            {
                name: "Fulano",
                location: "ubicacion1",
                vegano: "no",
                sinTacc: "si",
                consume: "Salon y Take away",
                petFriendly: "si",
                instagram: "https://www.instagram.com/fulanocafe?igsh=MTdxOGljM202ODBtbQ==",
                page: "https://linktr.ee/fulanocafe"
            }
        ];

        const filteredCafes = cafes.filter(cafe => {
            return cafe.location === selectedLocation &&
                (preferences.includes("Sin preferencias") || preferences.includes(cafe.vegano === "si" ? "Vegano" : "") || preferences.includes(cafe.sinTacc === "si" ? "Sin tacc" : "")) &&
                (cafe.consume === consumeType || cafe.consume.includes(consumeType)) &&
                cafe.petFriendly === petFriendly;
        });

        const resultsContainer = document.querySelector('.Resultado2');
        resultsContainer.innerHTML = ''; // Limpiar resultados previos

        filteredCafes.forEach(cafe => {
            const cafeCard = document.createElement('div');
            cafeCard.classList.add('card');
            cafeCard.innerHTML = `
                <p>
                    <button type="button" name="Result" value="${cafe.name}">
                        <div class="card__content">
                            <p class="card__title">${cafe.name}</p>
                            <a href="${cafe.instagram}">Instagram</a><br>
                            <a href="${cafe.page}">Pagina</a>
                        </div>
                    </button>
                </p>
            `;
            resultsContainer.appendChild(cafeCard);
        });
    }

    // Dibujar gráfico de popularidad
    const cafes = ["Marmol", "La Capke", "Selah", "Fulano", "Un Café", "Le Roma"];
    const popularidad = [85, 90, 75, 60, 70, 80]; // Ejemplo de datos de popularidad
    const canvas = document.getElementById('popularityChart');
    if (canvas) {
        const ctx = canvas.getContext('2d');

        // Definir las dimensiones del gráfico
        const chartWidth = canvas.width - 40;
        const chartHeight = canvas.height - 40;
        const barWidth = chartWidth / cafes.length;
        const maxPopularidad = Math.max(...popularidad);

        // Dibujar el gráfico de barras
        ctx.fillStyle = '#f4d2aa';
        for (let i = 0; i < cafes.length; i++) {
            const barHeight = (popularidad[i] / maxPopularidad) * chartHeight;
            const x = 20 + i * barWidth;
            const y = canvas.height - barHeight - 20;
            ctx.fillRect(x, y, barWidth - 10, barHeight);

            // Añadir etiquetas de texto
            ctx.fillStyle = '#000';
            ctx.font = '14px Arial';
            ctx.fillText(cafes[i], x, canvas.height - 5);
            ctx.fillText(popularidad[i], x, y - 5);
            ctx.fillStyle = '#f4d2aa';
        }

        // Dibujar los ejes
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(20, 20);
        ctx.lineTo(20, canvas.height - 20);
        ctx.lineTo(canvas.width - 20, canvas.height - 20);
        ctx.stroke();
    }
});




















/*document.addEventListener('DOMContentLoaded', function() {
    let selectedLocation = localStorage.getItem('selectedLocation');
    console.log('Previously selected location:', selectedLocation);

    document.querySelectorAll('.location-link').forEach(function(link) {
        link.addEventListener('click', function(event) {
            selectedLocation = this.getAttribute('data-location');
            console.log('Selected location:', selectedLocation);
            // Save the selected location to localStorage
            localStorage.setItem('selectedLocation', selectedLocation);

            // Optional: Navigate to the link
            const locationLink = this.querySelector('.location-link');
            if (locationLink) {
                window.location.href = locationLink.href;
            }

        });
    });

    document.getElementById('cafe-form').addEventListener('submit', function(event) {
         event.preventDefault();

         let preferences = document.getElementById('preferences').value;
         let consumo = document.getElementById('consumo').value;
         let petFriendly = document.getElementById('pet-friendly').value;

         let cafes = {
             lacapke: { preferences: ['sin', 'vegetariano', 'vegano'], consumo: 'salon', petFriendly: 'si' },
             leroma: { preferences: ['sin'], consumo: 'take-away', petFriendly: 'no' },
             marmol: { preferences: ['sin-tacc'], consumo: 'salon', petFriendly: 'no' },
             fulano: { preferences: ['sin', 'vegano'], consumo: 'salon', petFriendly: 'si' },
             selah: { preferences: ['sin', 'vegetariano'], consumo: 'take-away', petFriendly: 'no' },
             uncafe: { preferences: ['sin', 'vegetariano', 'vegano', 'sin-tacc'], consumo: 'salon', petFriendly: 'si' }
         };

         let recommendedCafes = Object.keys(cafes).filter(function(cafe) {
             let cafeData = cafes[cafe];
             return cafeData.preferences.includes(preferences) && cafeData.consumo === consumo && cafeData.petFriendly === petFriendly;
         });


         let recommendationText = recommendedCafes.length > 0 ? 'Te recomendamos los siguientes cafés: ' + recommendedCafes.join(', ') : 'Lo sentimos, no encontramos cafés que coincidan con tus preferencias.';
         document.getElementById('recommendation').innerText = recommendationText;
     });*/
/*
    // Select all buttons with the class 'location-button'
    const buttons = document.querySelectorAll('.location-button');

    // Add event listener to each button
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Find the link within the clicked button
            const locationLink = button.querySelector('.location-link');

            // Check if the data-location attribute is 'ubicacion2'
            if (locationLink && locationLink.dataset.location === 'ubicacion2') {
                console.log('Button with data-location="ubicacion2" selected');
                // You can add further actions here
            } else {
                console.log('Another button selected');
            }
        });
    });

});*/
