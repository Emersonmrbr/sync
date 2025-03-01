//maps;
//async function containerMaps() {
//  let mapCanvas = document.querySelector(".js-maps");
//  let mapCenter = new google.maps.LatLng(-25.4979, -49.31375);
//  let mapIcon = "app/assets/image/NucleoMAP_Pin_mapa.png";
//  let mapOptions = { center: mapCenter, zoom: 17 };
//  let map = new google.maps.Map(mapCanvas, mapOptions);
//  const marker = new google.maps.Marker({
//    position: mapCenter,
//    icon: mapIcon,
//  });
//  marker.setMap(map);
//}



// Initialize and add the map
let map;

async function initMap() {
  // The location of Núcleo MAP
  const position = { lat: -25.4979, lng: -49.31375 };
  const mapPin = document.createElement("img");
  mapPin.src = "img/pin_map.png";
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");
  const { Place } = await google.maps.importLibrary("places");

  // The map, centered at Núcleo MAP
  map = new Map(document.getElementById("map"), {
    center: position,
    zoom: 18,
    mapId: "4db79b3b192b41bf",
  });

  // The marker, positioned at Núcleo MAP
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    content: mapPin,
    title: 'Núcleo MAP',
  });
}

  initMap();