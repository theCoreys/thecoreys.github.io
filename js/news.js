// The featured live's name.
let liveTitle = "not set";
// The featured live's date.
let date = "not set";
// The featured live's address.
let address = "not set";

/**
 * Create a new instance of a XMLHttpRequest and load asynchronously the contents of oldShows.json.
 * @param {*} callback 
 */
function loadJSON(callback) {

    let xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', '../data/oldShows.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode.
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}


//A script to fetch the quiz questions from the json file, shuflle them, add them one by one to the dom, by listening to the submit event the submit event of the previous one.
loadJSON(function (response) {
    // Parse JSON string into object
    let liveData = JSON.parse(response);
    // Select the unsorted list in which the live data will be appended to.
    let list = document.getElementById("live-list");

    for (i = 0; i < liveData.length; i++) {
        // Create a list item for a live show.
        let listItem = document.createElement('li');
        listItem.className = 'linews';

        // Create the link to the live's page.
        let listLink
        if (liveData[i].link == "") {
            listLink = liveData[i].name;
        } else {
            listLink = '<a href="' + liveData[i].link + '" class="list-link">' + liveData[i].name + '</a>';
        }

        listItem.innerHTML = liveData[i].date + " - " + listLink + " - " + liveData[i].address;
        list.appendChild(listItem);
    }

});

/**
 * Create a new instance of a XMLHttpRequest and load asynchronously the contents of upcomingShows.json.
 * @param {*} callback 
 */
function loadJSON(callback) {

    let xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', '../data/upcomingShows.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode.
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}


//A script to fetch the quiz questions from the json file, shuflle them, add them one by one to the dom, by listening to the submit event the submit event of the previous one.
loadJSON(function (response) {
    // Parse JSON string into object
    let liveData = JSON.parse(response);
    // Select the unsorted list in which the live data will be appended to.
    let list = document.getElementById("upcoming");

    for (i = 0; i < liveData.length; i++) {
        // Create a list item for a live show.
        let listItem = document.createElement('li');
        listItem.className = 'linews';

        // Create the link to the live's page.
        let listLink
        if (liveData[i].link == "") {
            listLink = liveData[i].name;
        } else {
            listLink = '<a href="' + liveData[i].link + '" class="list-link">' + liveData[i].name + '</a>';
        }

        listItem.innerHTML = liveData[i].date + " - " + listLink + " - " + liveData[i].address;
        list.appendChild(listItem);
    }

});


/* Google maps now REQUIRES a credit card and will work only for free only for the first $200 monthly credit.
 After that you pay or wait till next month. 

 // Get the latest live's title.
    liveTitle=liveData[liveData.length-1].name;
    console.log(liveTitle);
    // Get the latest live's date.
    date=liveData[liveData.length-1].date;
    // Get the latest live's address.
    address=liveData[liveData.length-1].address;
    
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
    
    
    // Geocode given address and set it to the liveLatLng parameter.
    geocodeAddress(geocoder, map, address);
    console.log('The lat-lng format taken from the geocodeAddress() func is:' + liveLatLng);

    // Create a single marker for the latest live's location on initialize.
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

function geocodeAddress(geocoder, resultsMap, address) {
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
*/