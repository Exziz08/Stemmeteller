const registerUser = document.getElementById("registerUser");
const svPartiSøyle = document.getElementById("svPartiSøyle");







registerUser.addEventListener("click", () => {
const personNumber = document.getElementById("personNumber").value;

    if(personNumber === ""){
        alert("tast inn personnummer")
        return;
    }else{      
        window.location.href = `./index.html?personNumber=${personNumber}`;
    }   
})
const showDiagram = () => {
    let countSenterParti = 0; 
    let countApParti = 0; 
    let countFrpParti = 0; 
    let countMdgParti = 0;
    let countKrfParti = 0;
    let countRødtParti = 0;   
    let countHøyreParti = 0;   
    let countSvParti = 0;
    
    
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const parti = localStorage.getItem(key);

        if (parti === "Senterpartiet") {
            countSenterParti++;
        }else if(parti === "Arbeiderpartiet"){
            countApParti++;
        }else if(parti === "SV"){
            countSvParti++;
        }else if(parti === "Fremskritspartiet"){
        countFrpParti++;
    }else if(parti === "Milijø partiet de grønne"){
        countMdgParti++;
    }else if(parti === "Kristilg folkepartiet"){
        countKrfParti++;
    }else if(parti === "Høyre"){
        countHøyreParti++;
    }else if(parti === "rødt"){
        countRødtParti++;
    }
        
    }

    // Oppdater diagrammet
    const senterPartiSøyle = document.getElementById("senterPartiSøyle");
    const apPartiSøyle = document.getElementById("apPartiSøyle");
    const svPartiSøyle = document.getElementById("svPartiSøyle");
    const frpPartiSøyle = document.getElementById("frpPartiSøyle");
    const mdgPartiSøyle = document.getElementById("mdgPartiSøyle");
    const krfPartiSøyle = document.getElementById("krfPartiSøyle");
    const høyrePartiSøyle = document.getElementById("høyrePartiSøyle");
    const rødtPartiSøyle = document.getElementById("rødtPartiSøyle");

    if (senterPartiSøyle) {
        senterPartiSøyle.innerHTML = `  <div class="voting-bar" 
          style="height: ${countSenterParti * 10}px; width: 50px; background-color: green;">
          <div class="tooltip">Voted: ${countSenterParti} people</div>
        </div>
      `;
    }
    if (apPartiSøyle) {
        apPartiSøyle.innerHTML = `
        <div class="voting-bar" 
          style="height: ${countApParti * 10}px; width: 50px; background-color: red;">
          <div class="tooltip">Voted: ${countApParti} people</div>
        </div>
      `;
          }

    if (svPartiSøyle) {
        svPartiSøyle.innerHTML = `<div class="voting-bar" 
          style="height: ${countSvParti * 10}px; width: 50px; background-color: yellow;">
          <div class="tooltip">Voted: ${countSvParti} people</div>
        </div>`;
    }
    if (frpPartiSøyle) {
        frpPartiSøyle.innerHTML = `<div class="voting-bar" 
          style="height: ${countFrpParti * 10}px; width: 50px; background-color: blue;">
          <div class="tooltip">Voted: ${countFrpParti} people</div>
        </div>`;
    }


    if (mdgPartiSøyle) {
        mdgPartiSøyle.innerHTML = `<div class="voting-bar" 
          style="height: ${countMdgParti * 10}px; width: 50px; background-color: pink;">
          <div class="tooltip">Voted: ${countMdgParti} people</div>
        </div>`;
    }

    if (krfPartiSøyle) {
        krfPartiSøyle.innerHTML = `<div class="voting-bar" 
          style="height: ${countKrfParti * 10}px; width: 50px; background-color: orange;">
          <div class="tooltip">Voted: ${countKrfParti} people</div>
        </div>`;
    }

    if (høyrePartiSøyle) {
        høyrePartiSøyle.innerHTML = `<div class="voting-bar" 
          style="height: ${countHøyreParti * 10}px; width: 50px; background-color: cyan ;">
          <div class="tooltip">Voted: ${countHøyreParti} people</div>
        </div>`;
    }


    if (rødtPartiSøyle) {
        rødtPartiSøyle.innerHTML = `<div class="voting-bar" 
          style="height: ${countRødtParti * 10}px; width: 50px; background-color: purple ;">
          <div class="tooltip">Voted: ${countRødtParti} people</div>
        </div>`;
    }


};

// Kjør funksjonen
showDiagram();



