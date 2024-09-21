if (window.location.pathname === '/cctv') {
  window.location.href = '/cctv.html';
}const flightPlans = [
    {
        id: 1,
        aircraftId: 'BA123',
        departure: 'VABB (Mumbai)',
        destination: 'TFFR (Caribbean)',
        flightLevel: 'FL350',
        coordinates: [[18.5793, 73.7929], [16.265, -61.5258]], // Mumbai to Caribbean
        flightRules: 'IFR',         // Instrument Flight Rules
        flightType: 'G',            // General Aviation
        departureTime: '1200Z',     // Time in UTC
        cruisingSpeed: 'M082',      // Mach 0.82
        route: 'DCT DUBAX/N0498F350 DCT KODAP/N0498F350 DCT', // Example route
        arrivalTime: '1800Z'
    },
    {
        id: 2,
        aircraftId: 'AI456',
        departure: 'VIDP (Delhi)',
        destination: 'OMDB (Dubai)',
        flightLevel: 'FL360',
        coordinates: [[28.5562, 77.1000], [25.2532, 55.3657]], // Delhi to Dubai
        flightRules: 'VFR',
        flightType: 'S',            // Scheduled Air Service
        departureTime: '1400Z',
        cruisingSpeed: 'N0480',      // Speed in knots
        route: 'DCT KAGAZ/N0480F360 DCT VIKIT/N0480F360 DCT',
        arrivalTime: '1900Z'
    },
    {
        id: 3,
        aircraftId: 'LH789',
        departure: 'EDDF (Frankfurt)',
        destination: 'JFK (New York)',
        flightLevel: 'FL370',
        coordinates: [[50.0379, 8.5622], [40.6413, -73.7781]], // Frankfurt to New York
        flightRules: 'IFR',
        flightType: 'S',
        departureTime: '0800Z',
        cruisingSpeed: 'M085',
        route: 'DCT RATSU/N0485F370 DCT OCEAN/N0485F370 DCT',
        arrivalTime: '1600Z'
    },
    {
        id: 4,
        aircraftId: 'QF123',
        departure: 'YSSY (Sydney)',
        destination: 'LAX (Los Angeles)',
        flightLevel: 'FL380',
        coordinates: [[-33.8688, 151.2093], [33.9416, -118.4085]], // Sydney to Los Angeles
        flightRules: 'IFR',
        flightType: 'S',
        departureTime: '0600Z',
        cruisingSpeed: 'M084',
        route: 'DCT BALUS/N0484F380 DCT GINLA/N0484F380 DCT',
        arrivalTime: '1300Z'
    },
    {
        id: 5,
        aircraftId: 'AF456',
        departure: 'LFPG (Paris)',
        destination: 'RKSI (Seoul)',
        flightLevel: 'FL340',
        coordinates: [[49.0097, 2.5479], [37.5665, 126.978]], // Paris to Seoul
        flightRules: 'IFR',
        flightType: 'S',
        departureTime: '0700Z',
        cruisingSpeed: 'M083',
        route: 'DCT IRMOM/N0485F340 DCT HOSIV/N0485F340 DCT',
        arrivalTime: '1500Z'
    },
    {
        id: 6,
        aircraftId: 'EK999',
        departure: 'OMDB (Dubai)',
        destination: 'YSSY (Sydney)',
        flightLevel: 'FL360',
        coordinates: [[25.2532, 55.3657], [-33.8688, 151.2093]], // Dubai to Sydney
        flightRules: 'IFR',
        flightType: 'S',
        departureTime: '0900Z',
        cruisingSpeed: 'M086',
        route: 'DCT KAPET/N0484F360 DCT NITSO/N0484F360 DCT',
        arrivalTime: '2200Z'
    }
];

// Function to create a map for each flight and connect the locations
function createFlightMap(plan, mapId) {
    const map = L.map(mapId).setView(plan.coordinates[0], 3);

    // Load OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Draw a line connecting the departure and destination
    L.polyline(plan.coordinates, { color: 'black', weight: 2 }).addTo(map);

    // Add click event to the entire map
    map.on('click', function() {
        displayFlightDetails(plan);
    });
}

// Function to display flight details in ICAO format in the sidebar
function displayFlightDetails(plan) {
    const flightInfoDiv = document.getElementById('flight-info');
    flightInfoDiv.innerHTML = `
        <h4>ICAO Flight Plan</h4>
        <p><strong>Aircraft ID:</strong> ${plan.aircraftId}</p>
        <p><strong>Flight Rules:</strong> ${plan.flightRules}</p>
        <p><strong>Flight Type:</strong> ${plan.flightType}</p>
        <p><strong>Departure:</strong> ${plan.departure} at ${plan.departureTime}</p>
        <p><strong>Destination:</strong> ${plan.destination} (ETA: ${plan.arrivalTime})</p>
        <p><strong>Cruising Speed:</strong> ${plan.cruisingSpeed}</p>
        <p><strong>Flight Level:</strong> ${plan.flightLevel}</p>
        <p><strong>Route:</strong> ${plan.route}</p>
    `;
}

// Function to dynamically generate map containers and initialize maps
function generateFlightMaps() {
    const mapsContainer = document.getElementById('maps-container');
    
    flightPlans.forEach((plan, index) => {
        // Create a unique map container for each flight
        const mapId = `map-${index}`;
        const mapDiv = document.createElement('div');
        mapDiv.id = mapId;
        mapDiv.classList.add('map-container'); // Set up class for styling
        mapDiv.innerHTML = `<div id="map-${index}-inner" class="map"></div>`;
        mapsContainer.appendChild(mapDiv);

        // Create the map for the current flight plan
        createFlightMap(plan, `map-${index}-inner`);
    });
}

// Initialize the maps for all flights
generateFlightMaps();






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
