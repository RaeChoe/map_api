const mapElement = document.querySelector("gmp-map");

async function init() {
  // Request needed libraries.
  const [{ AdvancedMarkerElement }] = await Promise.all([
    google.maps.importLibrary("marker"),
    google.maps.importLibrary("maps"),
  ]);

  const priceTag = document.createElement("div");
  priceTag.className = "price-tag";
  priceTag.textContent = "$2.5M";

  const marker = new AdvancedMarkerElement({
    position: { lat: 37.5665851, lng: 126.9782038 },
  });
  marker.append(priceTag);
  mapElement.append(marker);
}
void init();
