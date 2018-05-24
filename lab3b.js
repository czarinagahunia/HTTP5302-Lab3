var map;
var addresses;
var mapMarkers = [];
/*
let Toronto : LatLng;
Toronto.lat = 43;
Toronto.lng = -79.38;
*/
//let Toronto : LatLng = { lat: 43, lng: -79.38, type: "city" };
var Toronto = { lat: 43, lng: -79.38 };
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: Toronto,
        zoom: 8
    });
}
//PART 2
var MapMarker = /** @class */ (function () {
    function MapMarker(address) {
        this.Address = address;
    }
    return MapMarker;
}());
$.ajax({
    url: './AClocations.json',
    dataType: 'json',
    success: function (data) {
        addresses = data;
        for (var _i = 0, addresses_1 = addresses; _i < addresses_1.length; _i++) {
            var i = addresses_1[_i];
            console.log(i.addresses);
            //add map marker to array of  map markers
            var newMapMarker = new MapMarker(i.address);
            mapMarkers.push(newMapMarker);
        }
        console.log(mapMarkers);
    }
});
function initMap() {
    var geocoder = ;
}
//START getLatLng
function getLatLang(address) {
    var resultLatLang = { lat: 0, lng: 0 };
    geocoder.geocode({
        'address': address
    }, function (results, status) {
        if (status === 'OK') {
            resultLatLang.lat = results[0].geometry.location.lat();
            resultLatLang.lng = results[0].geometry.location.lng();
        }
    });
    return resultLatLng;
} //end of getLatLang
