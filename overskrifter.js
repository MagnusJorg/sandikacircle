const body = document.querySelector("body")
const ordEt = document.querySelector("h1"); //Henter elementer fra HTML og giver dem en bestemt const
const ordTo = document.getElementById("ordTo"); //Henter elementer fra HTML og giver dem en bestemt const
let scrollPosition; // Denne variabel gemmer den aktuelle position, man er scrollet ned til

function rykOverskrift(){ //Tilføjer en funktion der starter når jeg scroller
    scrollPosition = Math.round(window.scrollY);
    // console.log(scrollPosition);
    ordEt.style.left = scrollPosition + "px"; //Værdien kan ændres, eks. style.rights
    ordTo.style.right = scrollPosition + "px";
    //julle.style.bottom = scrollPosition + "px"; //Værdien kan ændres, eks. style.bottom 
}

window.onscroll = rykOverskrift; //kan ændres til window i stedet krop, så kommer alerten frem
