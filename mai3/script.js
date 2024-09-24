let a = "a";
let b = 5;
let c = true;
let d = null;
let e = undefined;

let gomb = [0,1,2,3,4,5];

for (let i = 0; i < gomb.length; i++) {
    console.log(gomb[i]);
}
console.log(gomb[0]);
console.log(gomb.length);
gomb.push(6);
let f = {
    asd: 2,
    asd2: "string",
    asd3: null,
    asd4: undefined
}
console.log(f, f.asd);

if (0<1) {
    console.log("Szia");
}
else{
    console.log("nem");
}

switch (0) {
    case 0:
        console.log("asda");
        break;

    default:
        console.log("asds");
        break;
}

console.log(0>1? "Szia":"nem")
/*
for (let index = 0; index < array.length; index++) {
    const element = array[index];
}

for (const iterator of object) {
    
}

while (condition) {
    
}

do
{

}
while (condition) 
*/
for (const item of gomb) {
    console.log(item);
}
console.log(b++)
console.log(++b)

/*
1.) Megkérdezitek a felhasználót, hogy hányszor dobjunk egy dobókockával.
Egy for ciklust használva generáljatok annyi dobást, és írjátok ki az eredményeket a felhasználónak.
*/
// let var1 = Number(prompt("Hányszor a dobás?"));
// for (let i = 0; i < var1; i++) {
//     console.log(Math.floor(Math.random() * (6) + 1));
// }
// let szam1 = Number(prompt("1."));
// let szam2 = Number(prompt("2."));
// function fugveny(szam1, szam2) {
//     return(szam1 * szam2)
// }

// console.log(fugveny(szam1, szam2));

document.getElementById('container').style = "background-color: red; height: 200px; width: 200px;";
document.getElementById('container').onclick = function(){
    document.getElementById('container').style.backgroundColor = "green";
}
document.getElementById('container').onmouseover = function(){
    let szeles = parseInt(document.getElementById('container').style.width);
    document.getElementById('container').style.height = `${szeles*1.1}px`;
    document.getElementById('container').style.width = `${szeles*1.1}px`;
}    

document.getElementById('container').onmouseleave = function(){
    let szeles = parseInt(document.getElementById('container').style.width);
    document.getElementById('container').style.height = `${szeles*0.9}px`;
    document.getElementById('container').style.width = `${szeles*0.9}px`;
}