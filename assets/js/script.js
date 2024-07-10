//import a data for another sheet 'data.js'
import { datajo, dataShops } from './data.js';

//data copy pasted from leatlet site for display a map into site
var map = L.map('mymap');

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

map.setView([48.863761583029394, 2.34735791870776], 10)
let icon = L.icon({ iconUrl: 'assets/img/ping2.svg', iconSize: [80, 80] })

//functonality search button open and close
const card = document.getElementById('card');
const containerRight = document.getElementById('containerRight');

//function open and close a search button //and there is two search button one for pc and opne for mobile
const searchButtonMobile = document.getElementById('searchButtonMobile');
const searchButton = document.getElementById('searchButton');
const toggleCardAndContainer = () => {
    card.classList.toggle('cardActive');
    containerRight.classList.toggle('containerRightActive');
    containerRight.classList.remove('containerRightActiveFull');
    reloadMap();
};

searchButtonMobile.addEventListener('click', toggleCardAndContainer);
searchButton.addEventListener('click', toggleCardAndContainer);


//functonality of closebutton to close the card
const closeButton = document.getElementById('closeButton');
closeButton.addEventListener('click', () => {
    card.classList.remove('cardActive');
    containerRight.classList.remove('containerRightActive');
    reloadMap();
});

//functonality of full viwe and partial viwe map
const mapPane = document.getElementsByClassName('leaflet-map-pane');
const fullMap = document.getElementById('fullMap');
fullMap.addEventListener('click', () => {
    containerRight.classList.toggle('containerRightActiveFull');
    reloadMap();
})
//loop for fecth information from table of datajo
for (let i = 0; i < datajo.length; i++) {
    var popup = L.marker([datajo[i].lat, datajo[i].long], { icon: icon }).addTo(map);
    popup.bindPopup(datajo[i].nom_site);
    popup.addEventListener('click', () => {
        openCard()
        displayCard(i);
    });
}
//function for display a information about clicked posistion
const displayCard = (i) => {

    const infoLocation = document.createElement('div');
    infoLocation.classList.add('allSearch');

    card.appendChild(infoLocation);

    const sportImg = document.createElement('div');
    sportImg.classList.add('sportImg');
    sportImg.innerHTML = `<img src="/assets/img/sports/${datajo[i].img}.png" alt="sportImage">`
    infoLocation.appendChild(sportImg);

    const infos = document.createElement('div');
    infos.classList.add('infos');
    infoLocation.appendChild(infos);

    const sportName = document.createElement('div');
    sportName.classList.add('sportName');
    sportName.innerHTML = `${datajo[i].sports}`
    infos.appendChild(sportName);

    const sportPlace = document.createElement('div');
    sportPlace.classList.add('sportPlace');
    sportPlace.innerHTML = `${datajo[i].nom_site}`
    infos.appendChild(sportPlace);

    const locationTime = document.createElement('div');
    locationTime.classList.add('locationTime');
    locationTime.innerHTML = `${datajo[i].start_date}`
    infos.appendChild(locationTime);

};
//function for open a information and search area card
const openCard = () => {
    card.classList.add('cardActive');
    containerRight.classList.add('containerRightActive');
    containerRight.classList.remove('containerRightActiveFull');
    setTimeout(function () {
        mapPane[0].classList.add('inmove')
        map.invalidateSize();
        setTimeout(function () {
            mapPane[0].classList.remove('inmove')
        }, 300);
    }, 300);
}
//function for reload a map after change a size of map to full viwe of map
const reloadMap = () =>{
    setTimeout(() => {
        mapPane[0].classList.add('inmove');
        map.invalidateSize();
        setTimeout(() => {
            mapPane[0].classList.remove('inmove');
        }, 300);
    }, 300);
}