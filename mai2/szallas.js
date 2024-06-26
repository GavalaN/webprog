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
                    <button class="btn" alt="Módosítás" onclick="FetchPUTatvezet(${adat.id})">
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

if(window.location.href.includes("szallasok.html"))
{
    fetchGET();
}


function fetchPOST()
{
    let adatok = JSON.stringify({
        name: document.getElementById("name").value,
        hostname: document.getElementById("hostname").value,
        location: document.getElementById("location").value,
        price: document.getElementById("price").value,
        minimum_nights: document.getElementById("minimum_nights").value
    })
    fetch("http://nodejs.sulla.hu/data", 
    {
        method: "POST",
        body: adatok,
        headers: {
            "Content-Type": "application/json",
          }
    })
    alert("Sikeres felvétel!")
    document.getElementById("name").value = "";
    document.getElementById("hostname").value = "";
    document.getElementById("location").value = "";
    document.getElementById("price").value = "";
    document.getElementById("minimum_nights").value = "";
    location.reload();
}

function FetchDELETE(id)
{
    fetch("http://nodejs.sulla.hu/data/"+id, 
    {
        method: "DELETE"
    })
    .then(response => {  console.log(response.status); })
    setTimeout(() => {
        alert("Sikeres Törlés!")
        location.reload();
    }, 1000);
}

function FetchPUTatvezet(azon) {
    localStorage.setItem("azon", azon);
    console.log(localStorage.getItem("azon"));

    window.open("ujszallas.html","_self")
}

if((localStorage.getItem("azon") > -1) && window.location.href.includes("ujszallas.html"))
{
    fetch("http://nodejs.sulla.hu/data/"+localStorage.getItem("azon"))
    .then(function(valasz){
    return valasz.json();
    })
    .then(function(valasz2){
    console.log(valasz2);
    document.getElementById("name").value = valasz2.name;
    document.getElementById("hostname").value = valasz2.hostname;
    document.getElementById("location").value = valasz2.location;
    document.getElementById("price").value = valasz2.price;
    document.getElementById("minimum_nights").value = valasz2.minimum_nights;
    })
    document.getElementById("gomb").innerText="PUT";
    document.getElementById("gomb").setAttribute('onclick','FetchPUT()')
}

function FetchPUT() {
    let adatok = JSON.stringify({
        name: document.getElementById("name").value,
        hostname: document.getElementById("hostname").value,
        location: document.getElementById("location").value,
        price: document.getElementById("price").value,
        minimum_nights: document.getElementById("minimum_nights").value
    })
    fetch("http://nodejs.sulla.hu/data/"+localStorage.getItem("azon"),
    {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: adatok,
    })
    .then(
        alert("Sikeres módosítás!"),
        localStorage.setItem("azon", -1),
        console.log(localStorage.getItem("azon")),
        document.getElementById("name").value = "",
        document.getElementById("hostname").value = "",
        document.getElementById("location").value = "",
        document.getElementById("price").value = "",
        document.getElementById("minimum_nights").value = "",
        location.reload()
    )
}