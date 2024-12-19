// Henter Elementerne ved hjælp af deres ID
const burgerIkon = document.getElementById('burgerIkon');
const menu = document.getElementById('menu');
const lukMenu = document.getElementById('lukMenu');
const holdButton = document.getElementById('holdButton');
const holdMenu = document.getElementById('holdMenu');
const blivMedlemButton = document.getElementById('blivMedlemButton');
const blivMedlemMenu = document.getElementById('blivMedlemMenu');
const faciliteterButton = document.getElementById('faciliteterButton');
const faciliteterMenu = document.getElementById('faciliteterMenu');
const kontaktButton = document.getElementById('kontaktButton');
const kontaktMenu = document.getElementById('kontaktMenu');

const logofixed = document.getElementById('logofixed');
const footer = document.querySelector('.footer');

// Åbn menuen, når burger-ikonet klikkes
burgerIkon.addEventListener('click', () => {
    // når user klikker på burger ikonet tilføjes klassen active til menuen.
    menu.classList.add('active'); //tilføjer klassen
});

// Når x klikkes fjernes klassen active fra menu.
//active er brugt i css for at style klassen.
lukMenu.addEventListener('click', () => {
    menu.classList.remove('active');//Fjerner klassen
});

// Funktion til at toggle visning som bliver styret afhængigt af om den allerede er vist.
function toggleMenu(button, menu) {
    button.addEventListener('click', (event) => {
        // preventDefault(); er brugt fordi der er brugt <a> tags som knapper til at åbne og lukke menuen. Men vi ønsker selv at styre, hvad der sker, når de bliver klikket. preventDefault() stopper default opføresel som er at gå til en ny url eller #
        // vi bruger preventDefault(); for at bruge <a> tags som knapper frem for som links
        event.preventDefault(); 
        //tjekker om menuen er skjult
        if (menu.style.display === "none") { //Her tjekkes om værdien af menu.style.display præcist er "none", både i værdi og type ved at bruge ===.
            menu.style.display = "block"; // Hvis menuen er skjult ændre dens til display block
        } else {
            menu.style.display = "none"; // Hvis ellers menuen ikke skjult ændre dens til display none (den skjules)
        }
    });
}

// Togglemenu funktionen til at styre visningen af hver undermenu, når deres knap trykkes for at sikrer, at hver menu fungere på samme måde.
toggleMenu(holdButton, holdMenu);
toggleMenu(blivMedlemButton, blivMedlemMenu);
toggleMenu(faciliteterButton, faciliteterMenu);
toggleMenu(kontaktButton, kontaktMenu);

// Funktion til at kontrollere scroll-positionen
window.addEventListener('scroll', () => { //Lytter efter, når user scroller på siden.
    // Henter burger-menuens position
    const footerTop = footer.getBoundingClientRect().top; //getBoundClientRect Henter burger-menuens position relativt til viewport.
    const viewportHeight = window.innerHeight;
    // Skjul logoet, hvis footeren er synlig i viewporten
    if (footerTop <= viewportHeight) {
        logofixed.style.display = 'none'; // Skjul logoet
    } else {
        logofixed.style.display = 'block'; // Vis logoet
    }
});