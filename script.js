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
                petFriendly: "si"
            },
            {
                name: "Lacapke",
                location: "ubicacion2",
                vegano: "no",
                sinTacc: "si",
                consume: "Salon",
                petFriendly: "si"
            },
            {
                name: "Uncafe",
                location: "ubicacion2",
                vegano: "no",
                sinTacc: "si",
                consume: "Salon y Take away",
                petFriendly: "si"
            },
            {
                name: "Leroma",
                location: "ubicacion1",
                vegano: "no",
                sinTacc: "no",
                consume: "Salon y Take away",
                petFriendly: "no"
            },
            {
                name: "Marmol",
                location: "ubicacion3",
                vegano: "si",
                sinTacc: "si",
                consume: "Salon",
                petFriendly: "no"
            },
            {
                name: "Fulano",
                location: "ubicacion1",
                vegano: "no",
                sinTacc: "si",
                consume: "Salon y Take away",
                petFriendly: "si"
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
                            <a href="https://www.instagram.com/${cafe.name.toLowerCase()}">Instagram</a><br>
                            <a href="https://${cafe.name.toLowerCase()}.com">Pagina</a>
                        </div>
                    </button>
                </p>
            `;
            resultsContainer.appendChild(cafeCard);
        });
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
