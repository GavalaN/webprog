function fetchGET(){
    fetch('https://nodejs.sulla.hu/data')
    .then(function(res){
        return res.json()
    })
    .then(function(adatok){
        console.log(adatok)
    })
}