"use strict";
//// aos animation
AOS.init();

// leflet map

var map = L.map("map").setView([17.3365, 43.13829], 20);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
var greenIcon = L.icon({
  iconUrl: "/images/transparent.png",
  // shadowUrl: "transparent.png",

  iconSize: [30, 70], // size of the icon

  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location

  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});
var marker = L.marker([17.3365, 43.13829], { icon: greenIcon }).addTo(map);
marker
  .bindPopup("<b>أهلا وسهلا</b><br>  هنا آيس كريمي لبيع المثلجات")
  .openPopup();

//  Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: false,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
      slidesPerGroup: 2,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
      slidesPerGroup: 2,
    },
    630: {
      slidesPerView: 2,
      spaceBetween: 10,
      slidesPerGroup: 2,
    },
    545: {
      slidesPerView: 2,
      spaceBetween: 10,
      slidesPerGroup: 2,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    294: {
      slidesPerView: 1,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    240: {
      slidesPerView: 1,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
  },
});

///Moudle script

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

/////////////MAP

// let map;

// function initMap() {
//   let options = {
//     zoom: 18,
//     center: { lat: 17.336432, lng: 43.13832 },
//   };
//   let map = new google.maps.Map(document.getElementById("map"), options);

//   let marker = new google.maps.Marker({
//     position: { lat: 17.336432, lng: 43.13832 },
//     map: map,
//   });

//   let contentString = "<h1>آيس كريمي لبيع المثلجات</h1>";

//   let infowindow = new google.maps.InfoWindow({
//     content: contentString,
//     ariaLabel: "<h1>آس كريمي لبيع المثلجات</h1>",
//   });

//   marker.addListener("click", () => {
//     infowindow.open({
//       anchor: marker,
//       map,
//     });
//   });
// }
