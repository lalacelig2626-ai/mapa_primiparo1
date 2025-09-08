var map = L.map('map').setView([4.594952543585618, -74.20787875806789], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([4.594952543585618, -74.20787875806789]).addTo(map);
fetch('rutas_zonales_sitp.json')
  .then(r => r.json())
  .then(data => L.geoJSON(data).addTo(map));