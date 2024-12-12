// Hent elementerne fra DOM'en
const paralaxFigure1 = document.querySelector('.paralaxFigure1'); // Venstre figur
const paralaxFigure2 = document.querySelector('.paralaxFigure2'); // Højre figur

// Lyt efter rulning
window.addEventListener('scroll', function(){
    const rulPosition = window.scrollY; // Få rulningspositionen

    paralaxFigure1.style.transform = 'translateX(' + (rulPosition * 0.2) + 'px)'; // 0.2 er hastigheden.
    paralaxFigure2.style.transform = 'translateX(' + (-rulPosition * 0.2) + 'px)'; // 0.2 er hastigheden. - betyder den bevæger dig til venstre
});