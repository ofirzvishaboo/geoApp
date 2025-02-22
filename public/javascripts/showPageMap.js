maptilersdk.config.apiKey = mapToken;
const map = new maptilersdk.Map({
  container: 'map', // container's id or the HTML element to render the map
  style: "landscape",
  center: campground.geometry.coordinates,
  zoom: 9
});

const marker = new maptilersdk.Marker()
  .setLngLat(campground.geometry.coordinates)
  .setPopup(new maptilersdk.Popup().setHTML(`<b>${campground.title}</b><p>${campground.location}`))
  .addTo(map)