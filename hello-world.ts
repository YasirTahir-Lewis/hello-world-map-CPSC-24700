let map: google.maps.Map;

function initMap(): void {
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });


  google.maps.event.addListener( map, "bounds_changed", function() {
    var bounds = map.getBounds();
    var NE = bounds.getNorthEast();
    var SW = bounds.getSouthWest();
    var strHTML = "North East: " + NE.lat() + ", " + NE.lng() + " </br>";
    strHTML = "South West: " + SW.lat() + ", " + SW.lng();
    document.getElementById("info").innerHTML = strHTML;
    });
}
