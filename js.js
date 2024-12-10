// Henter Elementerne
const burgerIcon = document.getElementById('burgerIcon');
const menu = document.getElementById('menu');
const closeMenu = document.getElementById('closeMenu');

// Åbn menuen, når burger-ikonet klikkes
burgerIcon.addEventListener('click', () => {
    menu.classList.add('active');
});

// Luk menuen når x klikkes
closeMenu.addEventListener('click', () => {
    menu.classList.remove('active');
});