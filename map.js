function initMap() {
    var mapProp= {
        center:new google.maps.LatLng(23.792750,90.407606),
        zoom:5,
    };
    var map=new google.maps.Map(document.getElementById("map"),mapProp);
}
