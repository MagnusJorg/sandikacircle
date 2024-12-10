// Henter Elementerne
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

// Åbn menuen, når burger-ikonet klikkes
burgerIkon.addEventListener('click', () => {
    menu.classList.add('active');
});

// Luk menuen når x klikkes
lukMenu.addEventListener('click', () => {
    menu.classList.remove('active');
});

// Funktion til at toggle visning
function toggleMenu(button, menu) {
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Forhindre standard link-adfærd
        if (menu.style.display === "none") {
            menu.style.display = "block"; // Vis menuen
        } else {
            menu.style.display = "none"; // Skjul menuen
        }
    });
}

// funktion til hvert menupunkt
toggleMenu(holdButton, holdMenu);
toggleMenu(blivMedlemButton, blivMedlemMenu);
toggleMenu(faciliteterButton, faciliteterMenu);
toggleMenu(kontaktButton, kontaktMenu);