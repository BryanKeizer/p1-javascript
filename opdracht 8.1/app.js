let title = document.getElementById("calculator"); 
let input1 = document.getElementById("getal1");
let input2 = document.getElementById("getal2");

//maak een functie genaamd add
function add(){
    if(input1.value <1 || input2.value < 1) {
        title.innerText ="getal is te laag"
    }else {
        let answer = Number(input1.value) + Number(input2.value);
        title.innerText = answer}
}
//maak een functie genaamd multiply
function multiply(){
    if(input1.value <1 || input2.value < 1) {
        title.innerText ="getal is te laag"
    }else {
    let answer = (input1.value) * (input2.value);
    title.innerText = answer
    }
}
//maak een functie genaamd devide
function devide(){
    if(input1.value <1 || input2.value < 1) {
        title.innerText ="getal is te laag"
    }else {
    let answer = (input1.value) / (input2.value);
    title.innerText = answer
    }
}

//maak eend functie genaamd minus
function minus(){
    if(input1.value <1 || input2.value < 1) {
        title.innerText ="getal is te laag"
    }else {
    let answer = (input1.value) - (input2.value);
    title.innerText = answer}
}
