document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('less-traffic-form');
    const resultDiv = document.getElementById('less-traffic-results');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const startLocation = document.getElementById('start-location').value;
        const endLocation = document.getElementById('end-location').value;

        if (startLocation && endLocation) {
            const lessTrafficRoute = {
                distance: "6.0 km",
                time: "18 minutes",
                trafficCondition: "Moderate Traffic"
            };

            let resultHTML = `<h3>Less Traffic Route from ${startLocation} to ${endLocation}:</h3>`;
            resultHTML += `<p>Distance: ${lessTrafficRoute.distance}</p>`;
            resultHTML += `<p>Estimated Time: ${lessTrafficRoute.time}</p>`;
            resultHTML += `<p>Traffic Condition: ${lessTrafficRoute.trafficCondition}</p>`;

            resultDiv.innerHTML = resultHTML;
        } else {
            resultDiv.innerHTML = '<p>Please enter valid locations for both start and destination.</p>';
        }
    });
});
