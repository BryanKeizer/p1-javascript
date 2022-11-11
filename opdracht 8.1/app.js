let title = document.getElementById("calculator"); 
let input1 = document.getElementById("getal1");
let input2 = document.getElementById("getal2");

//maak een functie genaamd add
function add(){
 let answer = Number(input1.value) + Number(input2.value);
 console.log(answer);
}
//maak een functie genaamd multiply
function multiply(){
    let answer = (input1.value) * (input2.value);
    console.log(answer);
}
//maak een functie genaamd devide
function devide(){
    let answer = (input1.value) / (input2.value);
    console.log(answer);
}

//maak eend functie genaamd minus
function minus(){
    let answer = (input1.value) - (input2.value);
    console.log(answer);
}