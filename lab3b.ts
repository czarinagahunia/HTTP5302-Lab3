let map : any;
let addresses : any[];
let mapMarkers : MapMarker[] = [];

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

//PART 2

class MapMarker{
    Address : string;
    LatLng : LatLng;

    public constructor(address : string) {
        this.Address = address;
    }
}

$.ajax({
    url:'./AClocations.json',
    dataType: 'json',
    success: function(data) {
            addresses = data;
            for(let i of addresses) {
                console.log(i.addresses);

                //add map marker to array of  map markers
                let newMapMarker : MapMarker = new MapMarker(i.address);

                mapMarkers.push(newMapMarker);
            }
            console.log(mapMarkers);
        }
    }   
);