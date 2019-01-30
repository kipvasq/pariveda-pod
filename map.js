// global variables
var map;            // NEED ONE COPY OF MAP INSTANCE
var geocoder;       // NEED ONE COPY OF GEOCODER INSTANCE
var markers = [];   // NEED ONE COPY OF MARKERS INSTANCE

// sleep for x milliseconds
function sleep(milliseconds) {
   var currentTime = new Date().getTime();
   while (currentTime + milliseconds >= new Date().getTime()) { }
}

// add marker on map
function addMarker(location){
    if(location.latLng.lat == -1.0 && location.latLng.lng == -1.0){ // offices
        var result = geocoder.geocode({'address': location.address}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                location.latLng.lat = results[0].geometry.location.lat();
                location.latLng.lng = results[0].geometry.location.lng();
                generateMarker(location);
            } else {
                console.log("failed - ", location.name, location.address, location.type, results, status);
            }
        });
    } else { // clients
        generateMarker(location);
    }
}

// generate marker, infowindow with html
function generateMarker(location){
    // define icon
    var icon = "";
    if(location.type == "office"){
        icon = "./img/pariveda_logo_icon.png"
    } else {
        icon = "./img/superman.png"
    }

    var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">' + location.name + '</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
            'sandstone rock formation in the southern part of the '+
            'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
            'south west of the nearest large town, Alice Springs; 450&#160;km '+
            '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
            'features of the Uluru - Kata Tjuta National Park. Uluru is '+
            'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
            'Aboriginal people of the area. It has many springs, waterholes, '+
            'rock caves and ancient paintings. Uluru is listed as a World '+
            'Heritage Site.</p>'+
            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
            'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
            '(last visited June 22, 2009).</p>'+
            '</div>'+
            '</div>';

    // detailed view of window
    var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

    // marker with icon
    var marker = new google.maps.Marker({
                position: {lat: location.latLng.lat, lng: location.latLng.lng},
                map: map,
                title: location.name,
                icon: icon,
                infowindow: infowindow
            });
    markers.push(marker);

    // action to open
    marker.addListener('click', function() {
            hideAllMarkers();
            map.setCenter(marker.getPosition());
            infowindow.open(map, marker);
            map.setZoom(9.0);
        });

    // action to close
    google.maps.event.addListener(map, "click", function(event) {
            infowindow.close(map, marker);
        });
}

// hide all markers on map
function hideAllMarkers(){
    markers.forEach(function(marker) {
        marker.infowindow.close(map, marker);
    });
}

// set map center given location (i.e. string)
function setMapCenter(location){
    // process location geocode
    var result = geocoder.geocode({'address': location}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            var lat = results[0].geometry.location.lat();
            var lng = results[0].geometry.location.lng();
            map.setCenter(new google.maps.LatLng(lat, lng));
            map.setZoom(9.0);
        } else {
            alert("Unable to find '" + location + "': " + status);
        }
    });
}

// pariveda center button
function CenterControl(controlDiv, map) {
    var centerUS = {lat: 39.8283, long: -98.407606};

    // Set CSS for the control border.
    var controlUI = document.createElement('img');
    controlUI.style.borderRadius ='50%';
    controlUI.style.background = 'none';
    controlUI.style.backgroundColor = 'transparent';
    controlUI.style.border = '0px solid #fff';
    controlUI.style.boxShadow = '0 6px 6px rgba(0,0,0,.3)';
    controlUI.style.cursor = 'pointer';
    controlUI.style.marginBottom = '20';
    controlUI.style.height = '50px';
    controlUI.style.width = '50px';
    controlUI.style.textAlign = 'center';
    controlUI.title = 'Click to recenter the map';
    controlUI.innerHTML = '';
    controlUI.src = "img/pariveda_logo.png";
    controlUI.style.margin = "13px";
    controlDiv.appendChild(controlUI);

    // Setup the click event listeners: simply set the map to Chicago.
    controlUI.addEventListener('click', function() {
    map.setCenter(new google.maps.LatLng(centerUS["lat"], centerUS["long"]));
    map.setZoom(4.40);
    });

}

// initalize map
function initMap() {
    var mapProp = {
        center: new google.maps.LatLng(39.8283, -98.407606),
        zoom: 4.40,
        zoomControl: true,
        scaleControl: true,
        mapTypeControl: false,
        mapTypeControlOptions: {
              style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
              position: google.maps.ControlPosition.RIGHT_TOP
        },
    };

    // map instance
    map = new google.maps.Map(document.getElementById("gMap"), mapProp);

    // geocoder instance
    geocoder = new google.maps.Geocoder();

    // initally get client location (https://developers.google.com/maps/documentation/javascript/geolocation)
    if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(function (position) {
             initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
             map.setCenter(initialLocation);
             console.log(position);
         });
     }

    // center the map button (https://developers.google.com/maps/documentation/javascript/controls#CustomPositioning)
    var centerControlDiv = document.createElement('div');
    var centerControl = new CenterControl(centerControlDiv, map);
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);

    // add content on map
    for (i = 0; i < content.length; i++) {
        addMarker(content[i]);
    }
}
