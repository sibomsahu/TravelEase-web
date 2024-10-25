document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('parking-form');
    const resultDiv = document.getElementById('parking-results');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const location = document.getElementById('location').value;

        if (location) {
            // Simulated parking space data
            const parkingSpaces = [
                { name: "Janpath Parking", distance: "500m", availableSpaces: 12 },
                { name: "Master Canteen Parking", distance: "800m", availableSpaces: 5 },
                { name: "Unit-4 Market Parking", distance: "1.2km", availableSpaces: 20 },
                { name: "BMC Bhawani Mall Parking", distance: "2.5km", availableSpaces: 8 }
            ];

            // Build the results HTML
            let resultHTML = `<h3>Available Parking Spaces near ${location}:</h3><ul>`;
            parkingSpaces.forEach(space => {
                resultHTML += `
                    <li>
                        <strong>${space.name}</strong> - ${space.distance} away - ${space.availableSpaces} spaces available
                    </li>
                `;
            });
            resultHTML += '</ul>';

            resultDiv.innerHTML = resultHTML;
        } else {
            resultDiv.innerHTML = '<p>Please enter a valid location.</p>';
        }
    });
});
