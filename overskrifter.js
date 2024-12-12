const ordEt = document.getElementById("ordEt"); //Henter id fra HTML og giver dem en bestemt cons (konstant variabel)
const ordTo = document.getElementById("ordTo"); 
let scrollPosition; // Denne variabel gemmer den aktuelle position, man er scrollet ned til

function rykOverskrift(){ //Tilføjer en funktion der starter når jeg scroller
    scrollPosition = Math.round(window.scrollY); // Henter hvor meget du har scrollet ned (runder tallet)
    ordEt.style.left = scrollPosition + "px"; // Flytter ordEt til højre med den scroll-baserede værdi, i pixels (px)
    ordTo.style.right = scrollPosition + "px"; // Flytter ordTo til venstre med den samme scroll-baserede værdi, i pixels (px)
}

window.onscroll = rykOverskrift; // Fortæller koden at når man scroller skal funktionen rykOverskrift sættes i gang. 
