const buttons = document.getElementsByClassName("buttons");

const continents = [
  "Africa",
  "Antarctica",
  "Asia",
  "Australia",
  "Europe",
  "North America",
  "South America",
];

document.getElementById("africa").addEventListener(
  "click",
  function () {
    location.href = "/pages/africa.html";
  },
  false
);
document.getElementById("antarctica").addEventListener(
  "click",
  function () {
    location.href = "/pages/antarctica.html";
  },
  false
);
document.getElementById("asia").addEventListener(
  "click",
  function () {
    location.href = "/pages/asia.html";
  },
  false
);
document.getElementById("australia").addEventListener(
  "click",
  function () {
    location.href = "/pages/australia.html";
  },
  false
);
document.getElementById("europe").addEventListener(
  "click",
  function () {
    location.href = "/pages/europe.html";
  },
  false
);
document.getElementById("na").addEventListener(
  "click",
  function () {
    location.href = "/pages/northamerica.html";
  },
  false
);
document.getElementById("sa").addEventListener(
  "click",
  function () {
    location.href = "/pages/southamerica.html";
  },
  false
);
