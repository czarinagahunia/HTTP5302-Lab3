let map : any;

//interface
interface LatLng {
    lat : number,
    lng : number,
    //type : string
}

/*
let Toronto : LatLng;
Toronto.lat = 43;
Toronto.lng = -79.38;
*/

//let Toronto : LatLng = { lat: 43, lng: -79.38, type: "city" };

let Toronto : LatLng = { lat: 43, lng: -79.38 };

function initMap() {
    map = new google.maps.Map(
        document.getElementById("map"), 
        {
            center: Toronto,
            zoom: 8
        }
    );
}