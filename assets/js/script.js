
var map = L.map('mymap');

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

map.setView([35, 35], 2)

var marker = L.marker([51.5, -0.09]).addTo(map);

// 48.863761583029394, 2.3473579187077673

var circle = L.circle([48.863761583029394, 2.34735791870776], {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.5,
    radius: 5000
}).addTo(map);

circle.bindPopup('bonswaarrr pariiiiis')


//functonality search button

const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', () => {
    const card = document.getElementById('card');
    const containerRight = document.getElementById('containerRight');
    card.classList.toggle('cardActive');
    containerRight.classList.toggle('containerRightActive');


    setTimeout(function () {
        const mapPane = document.getElementsByClassName('leaflet-map-pane');
        mapPane[0].classList.add('inmove')
        map.invalidateSize();

        setTimeout(function () {
            mapPane[0].classList.remove('inmove')
        }, 300);
    }, 300);
    // mymap.
})