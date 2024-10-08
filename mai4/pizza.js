function fetchGET()
{
    fetch("https://pizza.kando-dev.eu/Pizza")
    .then(function(valasz){
        return valasz.json()
    })
    .then(function(valasz2){
        for (const adat of valasz2) {
            console.log(adat)
            let gluten = ""
            if (adat.isGlutenFree == 0) {
                gluten = "nem"
            }
            else if(adat.isGlutenFree == 1)
            {
                gluten = "igen"
            }
            document.getElementById("tartalom").innerHTML += 
            `<div class="col-4 card">
                <div class="card-details">
                    <p class="text-title">${adat.name}</p>
                    <img src="${adat.kepURL}">
                    <p class="text-body">Gluténmentes: ${gluten}</p>
                </div>
                <button class="card-button" onclick="torol(${adat.id})">Törlés</button>
            </div>`;
        }
    })
}
fetchGET()

function fetchPOST()
{
    let radios = document.getElementsByName("isGlutenFree");
    let gluten = 0;
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            gluten = Number(radios[i].value)
            break;
        }
    }
    let adatok = JSON.stringify({
        name: document.getElementById("name").value,
        isGlutenFree: gluten,
        kepURL: document.getElementById("kepURL").value
    })

    if(document.getElementById("isGlutenFree").value == "igen")
    {
        adatok.isGlutenFree = 1
    }
    else if(document.getElementById("isGlutenFree").value == "nem")
    {
        adatok.isGlutenFree = 0
    }
    if(document.getElementById("name").value === "")
    {
        alert("Nincs megadva név!");
    }
    else if(document.getElementById("kepURL").value === "")
    {
        alert("Nincs megadva kép!");
    }
    else
    {
        fetch("https://pizza.kando-dev.eu/Pizza", 
        {
        method: "POST",
        body: adatok,
        headers: {
            "Content-Type": "application/json",

        }
        })
        .then(setInterval(() => {
            location.reload();
        }, 1000))
    }
}

function torol(id)
{
    if (confirm("Biztosan törlöd?")) {
        fetch("https://pizza.kando-dev.eu/Pizza/"+id, {method: "DELETE"})
        .then(() => alert('Elem sikeresen törölve'))
        .then(setInterval(() => {
        location.reload();
        }, 1000))
    }
    
}