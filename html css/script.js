const partierContainer = document.getElementById("partier-container");
const knapper = partierContainer.querySelectorAll("img");
const voteKnapp = document.getElementById("voteknapp");
const params = new URLSearchParams(window.location.search);
const personNumber = params.get("personNumber");

let valgtParti = null;

// Marker valgt parti
function aktiverstemning(knapp) {
    knapper.forEach(k => k.style.border = '');
    knapp.style.border = '4px solid black';
    valgtParti = knapp.alt;    
}

knapper.forEach(knapp => {
    knapp.addEventListener("click", () => aktiverstemning(knapp));
});


voteKnapp.addEventListener("click", () => {
    if (!personNumber) {
        alert("Du må være logget inn for å stemme!");
        window.location.href = "login.html";
        return;
    }

    
    if (localStorage.getItem(personNumber)) {
        alert("Du har allerede stemt! Du kan ikke stemme flere ganger.");
        return;
    }

    if (valgtParti) {
        localStorage.setItem(personNumber, valgtParti);
        alert(`Du har stemt på ${valgtParti}! Du blir nå sendt tilbake til resultatene.`);
        window.location.href = "login.html";
    } else {
        alert("Velg et parti før du stemmer!");
    }
});

