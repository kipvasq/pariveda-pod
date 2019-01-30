
var map; // NEED ONE COPY OF MAP INSTNCE

function addMarker(name, address, type){
    var geocoder = new google.maps.Geocoder();

    console.log(address)
    var result = geocoder.geocode({'address': address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            var lat = results[0].geometry.location.lat();
            var lng = results[0].geometry.location.lng();

            console.log(name + " - " + lat + ", " + lng);

            var marker = new google.maps.Marker({
                  position: {lat: lat, lng: lng},
                  map: map,
                  title: name + " - " + type
                });
        } else {
            console.log("failed - ", name, address, type, results, status);
        }
    });
}

function setMapCenter(location){
    var geocoder = new google.maps.Geocoder();

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

    // add offices on map
    for (i = 0; i < content.length; i++) {
        addMarker(content[i].name, content[i].address, content[i].type);
    }
}
