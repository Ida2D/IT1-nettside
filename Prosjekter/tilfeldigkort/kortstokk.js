
function tilfeldigKort() {
//Tilfeldig tall 1 til 13:
const tall = Math.floor(Math.random() * 13) + 1

//Img elementet som holder på kortet vårt:
const kortElm = document.querySelector(".container img")

//Endrer til en tilfeldig kløver
kortElm.src = "kortstokk/" + tall + "_of_clubs.png"

//Finner en tilfeldig "suit":
const suits = ["spades", "hearts", "clubs", "diamonds"]
const suit_index = Math.floor(Math.random() * 4)
const suit = suits[suit_index]

//Endrer til en tilfeldig KORT:
kortElm.src = "kortstokk/" + tall + "_of_" + suit + ".png"
}

//kortet skifter av seg selv hvert sekund
setInterval(tilfeldigKort, 1000)







//KNAPPER-----------------------------//
function scrollToProsjektKort() {
    document.querySelector('#tilfeldigkort').scrollIntoView({ behavior: 'smooth' });
}

function scrollToCode() {
    document.querySelector('#koden').scrollIntoView({ behavior: 'smooth' });
}

/*--scrollefunksjoner ---------*/
function scrollToCode() {
    document.querySelector('#koden').scrollIntoView({ behavior: 'smooth' });
}