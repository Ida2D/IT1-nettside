const URL = "http://numbersapi.com/"

const outElm = document.getElementById("output")
const knappElm = document.getElementById("knapp")
const inputElm = document.getElementById("tall")

knappElm.addEventListener("click", getNumberFact)

function getNumberFact() {
    const url = URL + inputElm.value + "?json"
fetch(url)
    .then(function (response) {
        if (!response.ok) {
            throw new Error("Network response was not ok")
        }
        return response.json()
    })
    .then(function (data) {
        console.log(data)
            outElm.textContent = data.text

    })
    .catch((error) => {
        console.error("Error:", error)
    })
}




//KNAPPER-----------------------------//
function scrollToProsjektAPI() {
    document.querySelector('#prosjektAPI').scrollIntoView({ behavior: 'smooth' });
}

function scrollToCode() {
    document.querySelector('#koden').scrollIntoView({ behavior: 'smooth' });
}

/*--scrollefunksjoner ---------*/
function scrollToCode() {
    document.querySelector('#koden').scrollIntoView({ behavior: 'smooth' });
}
