// // Initialize the map
const map = L.map('map').setView([20.5937, 78.9629], 5); // Centered over India

// Load OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Sample flight plans data with airport coordinates
const flightPlans = [
    {
        id: 1,
        aircraftId: 'BA123',
        departure: 'VABB (Mumbai)',
        destination: 'TFFR (Caribbean)',
        flightLevel: 'FL350',
        coordinates: [18.5793, 73.7929] // Mumbai Coordinates
    },
    {
        id: 2,
        aircraftId: 'AI456',
        departure: 'VIDP (Delhi)',
        destination: 'OMDB (Dubai)',
        flightLevel: 'FL360',
        coordinates: [28.5562, 77.1000] // Delhi Coordinates
    },
    {
        id: 3,
        aircraftId: 'LH789',
        departure: 'EDDF (Frankfurt)',
        destination: 'JFK (New York)',
        flightLevel: 'FL370',
        coordinates: [50.0379, 8.5622] // Frankfurt Coordinates
    },
    {
        id: 4,
        aircraftId: 'QF123',
        departure: 'YSSY (Sydney)',
        destination: 'LAX (Los Angeles)',
        flightLevel: 'FL380',
        coordinates: [-33.8688, 151.2093] // Sydney Coordinates
    },
    {
        id: 5,
        aircraftId: 'AF456',
        departure: 'CDG (Paris)',
        destination: 'ICN (Seoul)',
        flightLevel: 'FL340',
        coordinates: [49.0097, 2.5479] // Paris Coordinates
    }
];

// Function to add flight plan markers to the map
function addFlightMarkers() {
    flightPlans.forEach(plan => {
        const marker = L.marker(plan.coordinates).addTo(map);
        marker.bindPopup(`<strong>Aircraft ID:</strong> ${plan.aircraftId}<br>
                          <strong>Departure:</strong> ${plan.departure}<br>
                          <strong>Destination:</strong> ${plan.destination}<br>
                          <strong>Flight Level:</strong> ${plan.flightLevel}`);
        // Add click event to display flight details in the sidebar
        marker.on('click', function() {
            displayFlightDetails(plan);
        });
    });
}

// Function to display flight details in the sidebar
function displayFlightDetails(plan) {
    const flightInfoDiv = document.getElementById('flight-info');
    flightInfoDiv.innerHTML = `
        <h4>Flight Details</h4>
        <p><strong>Aircraft ID:</strong> ${plan.aircraftId}</p>
        <p><strong>Departure:</strong> ${plan.departure}</p>
        <p><strong>Destination:</strong> ${plan.destination}</p>
        <p><strong>Flight Level:</strong> ${plan.flightLevel}</p>
    `;
}

// Initialize the map with flight markers
addFlightMarkers();




// Initialize the map
// const map = L.map('map').setView([20.5937, 78.9629], 5); // Centered over India

// // Load OpenStreetMap tiles
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

// // Sample flight plans with routes
// const flightPlans = [
//     {
//         id: 1,
//         aircraftId: 'BA123',
//         departure: 'VABB (Mumbai)',
//         destination: 'TFFR (Caribbean)',
//         flightLevel: 'FL350',
//         route: [
//             [18.5793, 73.7929], // Mumbai
//             [16.2514, -61.5870], // Guadeloupe, Caribbean
//         ],
//         coordinates: [18.5793, 73.7929] // Mumbai Coordinates
//     },
//     {
//         id: 2,
//         aircraftId: 'AI456',
//         departure: 'VIDP (Delhi)',
//         destination: 'OMDB (Dubai)',
//         flightLevel: 'FL360',
//         route: [
//             [28.5562, 77.1000], // Delhi
//             [25.276987, 55.296249], // Dubai
//         ],
//         coordinates: [28.5562, 77.1000] // Delhi Coordinates
//     },
//     {
//         id: 3,
//         aircraftId: 'LH789',
//         departure: 'EDDF (Frankfurt)',
//         destination: 'JFK (New York)',
//         flightLevel: 'FL370',
//         route: [
//             [50.0379, 8.5622], // Frankfurt
//             [40.6413, -73.7781], // New York JFK
//         ],
//         coordinates: [50.0379, 8.5622] // Frankfurt Coordinates
//     },
//     {
//         id: 4,
//         aircraftId: 'QF123',
//         departure: 'YSSY (Sydney)',
//         destination: 'LAX (Los Angeles)',
//         flightLevel: 'FL380',
//         route: [
//             [-33.8688, 151.2093], // Sydney
//             [33.9416, -118.4085], // Los Angeles
//         ],
//         coordinates: [-33.8688, 151.2093] // Sydney Coordinates
//     },
//     {
//         id: 5,
//         aircraftId: 'AF456',
//         departure: 'CDG (Paris)',
//         destination: 'ICN (Seoul)',
//         flightLevel: 'FL340',
//         route: [
//             [49.0097, 2.5479], // Paris
//             [37.5665, 126.9780], // Seoul
//         ],
//         coordinates: [49.0097, 2.5479] // Paris Coordinates
//     }
// ];

// // Function to add flight plan routes to the map
// function addFlightRoutes() {
//     flightPlans.forEach(plan => {
//         // Add route polyline to the map
//         const routeLine = L.polyline(plan.route, { color: 'blue', weight: 3 }).addTo(map);
//         // Add marker at the start point
//         const startMarker = L.marker(plan.route[0]).addTo(map);
//         startMarker.bindPopup(`<strong>Aircraft ID:</strong> ${plan.aircraftId}<br>
//                               <strong>Departure:</strong> ${plan.departure}<br>
//                               <strong>Destination:</strong> ${plan.destination}<br>
//                               <strong>Flight Level:</strong> ${plan.flightLevel}<br>
//                               <strong>Route:</strong> ${plan.route.map(coord => `(${coord[0]}, ${coord[1]})`).join(' → ')}`);
//         // Add marker at the end point
//         const endMarker = L.marker(plan.route[plan.route.length - 1]).addTo(map);
//         endMarker.bindPopup(`<strong>Aircraft ID:</strong> ${plan.aircraftId}<br>
//                             <strong>Departure:</strong> ${plan.departure}<br>
//                             <strong>Destination:</strong> ${plan.destination}<br>
//                             <strong>Flight Level:</strong> ${plan.flightLevel}<br>
//                             <strong>Route:</strong> ${plan.route.map(coord => `(${coord[0]}, ${coord[1]})`).join(' → ')}`);
//     });
// }

// // Function to display flight details in the sidebar
// function displayFlightDetails(plan) {
//     const flightInfoDiv = document.getElementById('flight-info');
//     flightInfoDiv.innerHTML = `
//         <h4>Flight Details</h4>
//         <p><strong>Aircraft ID:</strong> ${plan.aircraftId}</p>
//         <p><strong>Departure:</strong> ${plan.departure}</p>
//         <p><strong>Destination:</strong> ${plan.destination}</p>
//         <p><strong>Flight Level:</strong> ${plan.flightLevel}</p>
//         <p><strong>Route:</strong> ${plan.route.map(coord => `(${coord[0]}, ${coord[1]})`).join(' → ')}</p>
//     `;
// }

// // Initialize the map with flight routes
// addFlightRoutes();
