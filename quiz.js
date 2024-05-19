/*--QUIZ----------------------------------------------------------*/
let refreshBtn = document.getElementById("refreshBtn");
let resultatDiv = document.getElementById("resultater");
let poeng = 0;

function riktig(knapp, event){
    poeng++;
    knapp.style.backgroundColor = "#dde5b6"; //endrer farge på knapp ved riktig svar; grønn

    /*henter alle kanppene i samme spm div*/
    const knapper = knapp.parentElement.getElementsByTagName("button");
    for (let i = 0; i < knapper.length; i++) {
        knapper[i].disabled = true; //deaktiverer de andre knappene
    }

    knapp.disabled = false; //knappen som er trykket på er ikke deaktivert
    resultatDiv.innerHTML = "<p> Antall poeng: " + poeng + "/10 </p>";

}

function feil(knapp, event){
    knapp.style.backgroundColor = "#e56b6f"; //endrer farge på knapp ved feil svar; rød

        /*henter alle kanppene i samme spm div*/
        const knapper = knapp.parentElement.getElementsByTagName("button");
        for (let i = 0; i < knapper.length; i++) {
            knapper[i].disabled = true; //deaktiverer de andre knappene
        }
    
        knapp.disabled = false; //knappen som er trykket på er ikke deaktivert
}

refreshBtn.addEventListener("click", reset);

function reset() {
    poeng = 0;
    resultatDiv.innerHTML = "<p> Antall poeng: " + poeng + "/10 </p>";

    const knapper = document.getElementsByTagName("button");
    for (let i = 0; i < knapper.length; i++) {
        knapper[i].disabled = false; //reaktvierer alle knappene
        knapper[i].style.backgroundColor = ""; //resetter farge
    }
}