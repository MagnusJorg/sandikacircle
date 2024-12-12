// Funktion til at vise og skjule filteret
function skiftFilterSynlighed() {
    const filterMuligheder = document.getElementById('filterMuligheder'); // Henter article som indeholder filterets valg muligheder.
    filterMuligheder.classList.toggle('skjult'); // toogle skrifter tilstander hvis klassen er skjult på elementet fjerner den klassen. Hvis klassen ikke findes, tilføjer den klassen.
}

function anvendHoldFilter() {
    const valgtDato = document.getElementById('filterDato').value; //Henter den dato user har valgt i filterdato.
    const valgtHoldtype = document.getElementById('filterHoldtype').value.toLowerCase();//Henter det hold som user har valgt i filterdato.
    const holdSektioner = document.querySelectorAll('.hold'); //Henter alle hold sektionerne.

    holdSektioner.forEach(hold => { // et loop der gennemgår alle sektunderne med klassen hold.

        const holdDato = hold.getAttribute('data-dato'); //henter datoen fra data-dato attributten. 

        const holdType = hold.getAttribute('data-holdtype').toLowerCase(); //Henter hold typen fra data-holdtype attributten.

        const matcherDato = !valgtDato || valgtDato === holdDato; //tjekker om datoen matcher den user har valgt eller om ingen dato er valgt.

        const matcherHoldtype = !valgtHoldtype || valgtHoldtype === holdType; //tjekker om den valgre holdtype matcher med holdets type eller om user ikke har valgt holdtype.

        if (matcherDato && matcherHoldtype) {
            hold.style.display = 'block'; // Hvis både dato og holdtype matcher vises holdet
        } else {
            hold.style.display = 'none'; // Hvis der ikke er et match skjules holdet
        }
    });
}