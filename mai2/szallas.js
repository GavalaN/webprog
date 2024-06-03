function fetchGET() {
    fetch("http://nodejs.sulla.hu/data")
    .then(function(valasz){
        return valasz.json()
    })
    .then(function(valasz2){
        for (const adat of valasz2) {
            console.log(adat);
            const card = document.createElement('div');
            card.classList.add('card', 'col-md-3');
            card.innerHTML = `
                <div class="card-details">
                    <h5 class="text-title">${adat.name}</h5>
                    <div id="demo${adat.id}" class="collapse">
                        <a target="_blank" href="www.${adat.hostname}">Szállás weboldala</a>
                        <p class="text-body">Hely: ${adat.location}</p>
                        <p class="text-body">Ár: ${adat.price} Ft</p>
                        <p class="text-body">Minimum éjszakák száma: ${adat.minimum_nights}</p> 
                    </div>
                </div>
                <div class="card-footer d-flex justify-content-between">
                    <button class="btn" alt="Információk" type="button" onclick="toggleCollapse(${adat.id})">
                        <i class="bi bi-info-circle"></i>
                    </button>
                    <button class="btn" alt="Módosítás" onclick="FetchPUT(${adat.id})">
                        <i class="bi bi-wrench"></i>
                    </button>
                    <button class="btn" alt="Törlés" onclick="FetchDELETE(${adat.id})">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
            `;
            document.getElementById('adatok').appendChild(card);
        }
    });
}

function toggleCollapse(id) {
    const demo = document.getElementById(`demo${id}`);
    const isCollapsed = demo.classList.contains('show');
    if (isCollapsed) {
        demo.classList.remove('show');
    } else {
        demo.classList.add('show');
    }
}

fetchGET();

function fetchPOST() {
    
}
