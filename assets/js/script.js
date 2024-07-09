
var map = L.map('mymap');

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


map.setView([48.863761583029394, 2.34735791870776], 1)

// let myIcon = L.icon({
//     iconUrl: 'airplan.png',
//     iconSize: [38, 95]
// });

map.setView([48.863761583029394, 2.34735791870776], 10)

var marker = L.marker([48.863761583029394, 2.34735791870776]).addTo(map);


let icon = L.icon({iconUrl: 'assets/img/group 1.svg', iconSize: [80, 80]})




let trocadero = L.marker([48.86221786472036, 2.2881789193394355], {icon:icon}).addTo(map);
trocadero.bindPopup('Trocadero')

let chateauroux = L.marker([46.83826807854533, 1.6759953869880373], {icon:icon}).addTo(map);
chateauroux.bindPopup('Châteauroux')

let stadeDeFrance = L.marker([48.92458786188343, 2.3601497975306898], {icon:icon}).addTo(map);
stadeDeFrance.bindPopup('Stade de France')

let stadeTourEiffel = L.marker([48.8559659293032, 2.2978320261429452], {icon:icon}).addTo(map);
stadeTourEiffel.bindPopup('stade Tour Eiffel')

let arenaChampDeMars = L.marker([48.85284420490173, 2.303036183245992], {icon:icon}).addTo(map);
arenaChampDeMars.bindPopup('Arena Champ De Mars')

let parisDefenseArena = L.marker([48.89573971479303, 2.2294563684830515], {icon:icon}).addTo(map);
parisDefenseArena.bindPopup('Paris La Défense Arena')

let tahiti = L.marker([-17.845587734823845, -149.25896128026113], {icon:icon}).addTo(map);
tahiti.bindPopup("Teahupo'o, Tahiti")



// var circle = L.circle([48.863761583029394, 2.34735791870776], {
//     color: 'blue',
//     fillColor: 'blue',
//     fillOpacity: 0.5,
//     radius: 5000
// }).addTo(map);

trocadero.on("click", () => {
    console.log('yo');

var circle = L.circle([48.863761583029394, 2.34735791870776], {
    color: 'red',
    fillColor: 'red',
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