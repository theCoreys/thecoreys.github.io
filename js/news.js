/* Google maps now REQUIRES a credit card and will work only for free only for the first $200 monthly credit.
 After that you pay or wait till next month. */
let map;

// Create a new blank array for all the listing markers.
let markers = [];
let liveLatLng; // Used to store the lat-lng of the live's location.


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

    console.log('The lat-lng format taken from the geocodeAddress() func is:'+ liveLatLng);
    // Create a single marker for the latest live's location on initialize.
    let title = 'LIVE\'S TITLE';
    let marker = new google.maps.Marker({
        position: liveLatLng,
        map: map,
        title: title,
        animation: google.maps.Animation.DROP,
    });

    // Create a single infowindow that will appear on the marker.
    let largeInfowindow = new google.maps.InfoWindow();

    // This function populates the infowindow when the marker is clicked.
    function populateInfoWindow(marker, infowindow) {
        // Check to make sure the infowindow is not already opened on this marker.
        if (infowindow.marker != marker) {
            // Clear the infowindow content to give the streetview time to load.
            //infowindow.setContent('');
            infowindow.marker = marker;
            // Make sure the marker property is cleared if the infowindow is closed.
            infowindow.addListener('closeclick', function () {
                infowindow.marker = null;
            });
            let streetViewService = new google.maps.StreetViewService();
            let radius = 150;
            // In case the status is OK, which means the pano was found, compute the
            // position of the streetview image, then calculate the heading, then get a
            // panorama from that and set the options
            function getStreetView(data, status) {
                if (status == google.maps.StreetViewStatus.OK) {
                    let nearStreetViewLocation = data.location.latLng;

                    let heading = google.maps.geometry.spherical.computeHeading(
                        nearStreetViewLocation, marker.position);
                    infowindow.setContent('<div>' + marker.title + '</div><div id="pano"></div>');
                    let panoramaOptions = {
                        position: nearStreetViewLocation,
                        pov: {
                            heading: heading,
                            pitch: 30
                        }
                    };
                    let panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), panoramaOptions);
                    console.log(panorama);
                } else {
                    infowindow.setContent('<div>' + marker.title + '</div>' +
                        '<div>No Street View Found</div>');
                }
            }
            // Use streetview service to get the closest streetview image within
            // 50 meters of the markers position
            streetViewService.getPanoramaByLocation(marker.position, radius, getStreetView);
            // Open the infowindow on the correct marker.
            infowindow.open(map, marker);
        }
    }

    //  create an EVENT LISTENER so that the infowindow opens when
    // the marker is clicked!
    marker.addListener('click', function () {
        populateInfoWindow(this, largeInfowindow);
    });
}

function geocodeAddress(geocoder, resultsMap) {
    let address = "Κων/νου Μελενίκου 13, Θεσσαλονίκη 546 35";
    geocoder.geocode({
        'address': address
    }, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            resultsMap.setCenter(results[0].geometry.location);
            // Show the first result's formatted address, and LOCATION.
            console.log("The Formatted Address is:" + results[0].formatted_address);
            console.log("The Location is" + results[0].geometry.location);
            liveLatLng = results[0].geometry.location;
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}