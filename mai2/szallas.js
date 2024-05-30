function fetchGET(){
    fetch("http://nodejs.sulla.hu/data")
    .then(function(valasz){
        return valasz.json()
    })
    .then(function(valasz2){
        for (const adat of valasz2) {
            console.log(adat)
            document.getElementById("adatok").innerHTML += 
            ` <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${adat.name}</h5>
              <a  target="blank" href="www.${adat.hostname}">Szállás weboldala</a>
              <p>Hely: ${adat.location}</p>
              <p>Ár: ${adat.price} Ft</p>
              <p>Minimum éjszakák száma: ${adat.minimum_nights}</p> 
              <button id="torles" onclick="Torles(${adat.id})" class="btn btn-primary"> Törlés</button>
            </div>`;
        }
    })
}
fetchGET()

for (const item of object) {
    
}