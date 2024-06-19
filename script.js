// script.js
document.addEventListener('DOMContentLoaded', function() {
    let selectedLocation = '';

    document.querySelectorAll('.location-link').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            selectedLocation = this.getAttribute('data-location');
            alert('Ubicación seleccionada: ' + selectedLocation);
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
    });
});
