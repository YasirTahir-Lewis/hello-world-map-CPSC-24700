function initMap(): void {
  const myLatlng = { lat: -25.363, lng: 131.044 };

  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 4,
      center: myLatlng,
    }
  );

  const marker = new google.maps.Marker({
    position: myLatlng,
    map,
    title: "Click to zoom",
  });

  map.addListener("center_changed", () => {
    // 3 seconds after the center of the map has changed, pan back to the
    // marker.
    window.setTimeout(() => {
      map.panTo(marker.getPosition() as google.maps.LatLng);
    }, 3000);
  });

  marker.addListener("click", () => {
    map.setZoom(8);
    map.setCenter(marker.getPosition() as google.maps.LatLng);
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