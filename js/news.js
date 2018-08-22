


/* Google maps work only for the $200 monthly credit. After that it goes down till next month. You can also pay to get it back up before then. */
let map;

// Create a new blank array for all the listing markers.
let markers = [];


function initMap() {
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: {
            lat: 38.1288327,
            lng: 22.2382471
        }
    });
    let geocoder = new google.maps.Geocoder();
    // Geocode given address.
    geocodeAddress(geocoder, map);
}

function geocodeAddress(geocoder, resultsMap) {
    let address = "Κων/νου Μελενίκου 13, Θεσσαλονίκη 546 35";
    geocoder.geocode({
        'address': address
    }, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            resultsMap.setCenter(results[0].geometry.location);
            // Show the first result's formatted address, and LOCATION.
            console.log("The Formatted Address is:"+results[0].formatted_address); 
            console.log("The Location is"+results[0].geometry.location);
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}