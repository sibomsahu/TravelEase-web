document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('shortest-routes-form');
    const resultDiv = document.getElementById('shortest-routes-results');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const locationA = document.getElementById('location-a').value;
        const locationB = document.getElementById('location-b').value;

        if (locationA && locationB) {
            const shortestRoute = {
                distance: "5.2 km",
                time: "15 minutes"
            };

            let resultHTML = `<h3>Shortest Route from ${locationA} to ${locationB}:</h3>`;
            resultHTML += `<p>Distance: ${shortestRoute.distance}</p>`;
            resultHTML += `<p>Estimated Time: ${shortestRoute.time}</p>`;

            resultDiv.innerHTML = resultHTML;
        } else {
            resultDiv.innerHTML = '<p>Please enter valid locations for both start and destination.</p>';
        }
    });
});
