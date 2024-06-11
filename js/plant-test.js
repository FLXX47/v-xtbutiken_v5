$(document).ready(function () {
    $('#plant-test-form').on('submit', function (event) {
        event.preventDefault();

        const sunlight = parseInt($('#sunlight').val());
        const watering = parseInt($('#watering').val());
        const care = parseInt($('#care').val());

        // Example plant data
        const plants = [
             {  name: 'Vacker Grön Växt', sunlight: 8, watering: 3, care: 3, image: 'plant1.jpg' },
             { name: 'Elegant Blommande Växt', sunlight: 6, watering: 4, care: 6, image: 'plant2.jpg' },
             { name: 'Unik Sukulent', sunlight: 5, watering: 1, care: 1, image: 'plant3.jpg' },
             { name: 'Tropisk Palm', sunlight: 8, watering: 2, care: 1, image: 'plant4.jpg' },
             { name: 'Orkidé', sunlight: 6, watering: 4, care: 8, image: 'plant5.jpg' },
             { name: 'Bonsai Träd', sunlight: 5, watering: 5, care: 9, image: 'plant6.jpg' },
             { name: 'Fredslilja', sunlight: 5, watering: 5, care: 4, image: 'plant7.jpg' },
             { name: 'Dracena', sunlight: 3, watering: 2, care: 3, image: 'plant9.jpg' },
             { name: 'Fikus', sunlight: 4, watering: 6, care: 7, image: 'plant8.jpg' },
             { name: 'Kaktus', sunlight: 10, watering: 1, care: 2, image: 'plant10.jpg' },
             { name: 'Lavendel', sunlight: 6, watering: 5, care: 4, image: 'plant11.jpg' },
             { name: 'Rosmarin', sunlight: 3, watering: 7, care: 6, image: 'plant12.jpg' },
   
        ];

        // Find the closest matching plants
        plants.sort((a, b) => {
            const aDiff = Math.abs(a.sunlight - sunlight) + Math.abs(a.watering - watering) + Math.abs(a.care - care);
            const bDiff = Math.abs(b.sunlight - sunlight) + Math.abs(b.watering - watering) + Math.abs(b.care - care);
            return aDiff - bDiff;
        });

        // Get top 3 recommendations
        const recommendations = plants.slice(0, 3);

        let recommendationsHTML = '<h3>Rekommenderade växter</h3>';
        if (recommendations.length > 0) {
            recommendationsHTML += '<div class="recommendation-list">';
            recommendations.forEach(plant => {
                recommendationsHTML += `
                    <div class="recommendation-item">
                        <h4>${plant.name}</h4>
                        <img src="images/${plant.image}" alt="${plant.name}">
                    </div>
                `;
            });
            recommendationsHTML += '</div>';
        } else {
            recommendationsHTML += '<p>Tyvärr, inga växter matchar dina preferenser.</p>';
        }

        $('#recommendations').html(recommendationsHTML);
    });
});
