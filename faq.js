// Hent knappen fra HTML ved hjælp af dens id
const sendButton = document.getElementById("sendButton");

// Funktion til at vise alerten
function showAlert() {
    // Opret overlay til alerten (Dette overlay vil hjælpe med at fremhæve alert-boksen)
    const overlay = document.createElement("div"); //oprrater en div
    overlay.id = "alert-overlay"; // Giver den et id til diven

    // Opret selve alert-boksen
    const alertBox = document.createElement("div"); //oprrater en div
    alertBox.id = "alert-box"; // Giver den et id til diven

    // Tilføj besked til alert-boksen
    const besked = document.createElement("p"); //opratter et p element
    besked.textContent = "Tak for din besked!"; // Teksten til p
    alertBox.appendChild(besked); // Tilføj beskeden til boksen (bliver barn til alertBox)

    // Opret luk-knappen
    const lukButton = document.createElement("button"); //opratter en knap
    lukButton.textContent = "LUK"; // Tekst på knappen
    alertBox.appendChild(lukButton); //Tilføjer button til boksen (bliver barn til alertBox)

    // Når man klikker på luk-knappen, fjernes overlayet
    lukButton.addEventListener("click", () => { //Pilen (=>) er en kortere måde at skrive funktioner på. 
        document.body.removeChild(overlay); // Fjern overlay fra HTML
    });
    
    overlay.appendChild(alertBox); // Tilføj boksen til overlayet (Gør det til barn)
    document.body.appendChild(overlay); // Tilføj overlayet til siden
}

// Når knappen bliver klikket på, kaldes funktionen showAlert, som opretter og viser en alert-boks.
sendButton.addEventListener("click", showAlert);



