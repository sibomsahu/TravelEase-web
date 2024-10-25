document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('public-transport-form');
    const resultDiv = document.getElementById('public-transport-results');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const location = document.getElementById('location').value;

        if (location) {
            const publicTransportOptions = [
                { name: "Bus A", route: "Route 1", time: "10:00 AM" },
                { name: "Bus B", route: "Route 2", time: "11:00 AM" },
                { name: "Metro Line 1", time: "12:00 PM" }
            ];

            let resultHTML = `<h3>Public Transport Options from ${location}:</h3><ul>`;
            publicTransportOptions.forEach(option => {
                resultHTML += `
                    <li>
                        <strong>${option.name}</strong> - ${option.route ? `Route: ${option.route}` : ''} - ${option.time}
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
