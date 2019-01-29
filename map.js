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
    map.setZoom(4.25);
    });

}

function initMap() {
    var mapProp = {
        center: new google.maps.LatLng(23.792750, 90.407606),
        zoom: 5,
        zoomControl: true,
        scaleControl: true,
        mapTypeControl: true,
        mapTypeControlOptions: {
              style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
              position: google.maps.ControlPosition.RIGHT_TOP
        },
    };

    // map instance
    var map = new google.maps.Map(document.getElementById("map"), mapProp);

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

}
