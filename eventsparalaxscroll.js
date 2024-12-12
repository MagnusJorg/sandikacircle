// Hent elementerne fra DOM'en
const paralaxFigure1 = document.querySelector('.paralaxFigure1'); // Venstre figur
const paralaxFigure2 = document.querySelector('.paralaxFigure2'); // Højre figur
const paralaxBmo1 = document.querySelector('.paralaxBmo1'); // Venstre BMO figur
const paralaxBmo2 = document.querySelector('.paralaxBmo2'); // Højre BMO figur

// Lyt efter rulning
// Lyt efter rulning
window.addEventListener('scroll', function() {
    const rulPosition = window.scrollY; // Få rulningspositionen

    // Parallax-effekt for udendørs sektion
    paralaxFigure1.style.transform = 'translateX(' + (rulPosition * 0.2) + 'px)'; // 0.2 er hastigheden.
    paralaxFigure2.style.transform = 'translateX(' + (-rulPosition * 0.2) + 'px)'; // 0.2 er hastigheden. - betyder den bevæger dig til venstre

    // Parallax-effekt for BMO sektion
    paralaxBmo1.style.transform = 'translateX(' + (rulPosition * 0.3) + 'px)'; // Venstre BMO figur
    paralaxBmo2.style.transform = 'translateX(' + (-rulPosition * 0.3) + 'px)'; // Højre BMO figur
});