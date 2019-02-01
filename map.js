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
    try{
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
    } catch(error){
        // fin
    }
}

//used to populate the fins tab of office markers
function populateFins(location) {
    var finlist = location.finlist;
    var info = "";

    if(finlist.length > 0){
        for (var i = 0; i < finlist.length; i++) {
            info = info + "<div>" + finlist[i].name + ", " + finlist[i].cohort + "</div>";
        }
    }
    return info;
}

//used to populate the info tab of office markers
function populateInfo(location) {
    var info = "";
    info += "<div>" + "Address: " + location.address +"</div>";
    info += "<div>" + "Phone: " + location.phone +"</div>";
    info += "<div>" + "Email: " + location.email +"</div>";
    return info;
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

    var infoString = 'Info';
    var finString = 'Fins';
    var connectionString = 'Connections';

    var contentString = '<div id="iw-container">' +
                        '<div class="iw-title">' + location.name + '</div>' +
                        '<div class="iw-content">' +
                            '<button class="tablink" style="background: #123456;"onclick="openPage(\'Info\', this, \'#123456\')" id="defaultOpen">Info</button>' +
                            '<button class="tablink" onclick="openPage(\'Fins\', this, \'#123456\')">Fins</button>' +
                            '<div id="Info" style="display:block" class="tabcontent">' +
                                populateInfo(location) +
                            '</div>' +
                            '<div id="Fins" class="tabcontent">' +
                                populateFins(location) +
                            '</div>' +
                            '<div id="Links" class="tabcontent">' +
                                '<h3>Links</h3>' +
                                '<p>Get in touch, or swing by for a cup of coffee.</p>' +
                            '</div>' +
                            '<div id="About" class="tabcontent">' +
                                '<h3>About</h3>' +
                                '<p>Who we are and what we do.</p>' +
                            '</div>' +
                            '<div class="iw-bottom-gradient"></div>' +
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

    // style infowindow
    styleInfoWindow(infowindow);
}

function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
}


function styleInfoWindow(infowindow){
    google.maps.event.addListener(infowindow, 'domready', function() {

        // Reference to the DIV that wraps the bottom of infowindow
        var iwOuter = $('.gm-style-iw');

        /* Since this div is in a position prior to .gm-div style-iw.
        * We use jQuery and create a iwBackground variable,
        * and took advantage of the existing reference .gm-style-iw for the previous div with .prev().
        */
        var iwBackground = iwOuter.prev();

        // Removes background shadow DIV
        iwBackground.children(':nth-child(2)').css({'display' : 'none'});

        // Removes white background DIV
        iwBackground.children(':nth-child(4)').css({'display' : 'none'});

        // Moves the infowindow 115px to the right.
        // iwOuter.parent().parent().css({left: '115px'});

        // Moves the shadow of the arrow 76px to the left margin.
        // iwBackground.children(':nth-child(1)').attr('style', function(i,s){ return s + 'left: 76px !important;'});

        // Moves the arrow 76px to the left margin.
        // iwBackground.children(':nth-child(3)').attr('style', function(i,s){ return s + 'left: 76px !important;'});

        // Changes the desired tail shadow color.
        // iwBackground.children(':nth-child(3)').find('div').children().css({'box-shadow': 'rgba(72, 181, 233, 0.6) 0px 1px 6px', 'z-index' : '1'});

        // Reference to the div that groups the close button elements.
        var iwCloseBtn = iwOuter.next();

        // Apply the desired effect to the close button
        iwCloseBtn.css({opacity: '1', right: '50px', top: '15px'});

        // If the content of infowindow not exceed the set maximum height, then the gradient is removed.
        if($('.iw-content').height() < 140){
        $('.iw-bottom-gradient').css({display: 'none'});
        }

        // The API automatically applies 0.7 opacity to the button after the mouseout event. This function reverses this event to the desired value.
        iwCloseBtn.mouseout(function(){
            $(this).css({opacity: '1'});
        });
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
            openMarker(location);
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
    hideAllMarkers();
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
