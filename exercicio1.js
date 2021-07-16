// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

const constGEl = document.querySelector('#constante');
let mass1El = document.querySelector('#massa1');
let mass2El = document.querySelector('#massa2');
let distanceEl = document.querySelector('#distancia');
let resultFieldEl = document.querySelector('#resultado');
let caclButtonEl = document.querySelector('#calcular');

function calcUniversalGravity(){
    let forceF = (constGEl.value * mass1El.value * mass2El.value) / distanceEl.value ** 2;
    resultFieldEl.value = forceF;
}

caclButtonEl.addEventListener('click', calcUniversalGravity);
