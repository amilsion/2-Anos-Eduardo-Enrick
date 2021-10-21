const diasEl = document.getElementById('dias');
const horasEl = document.getElementById('horas');
const minutosEl = document.getElementById('minutos');
const segundosEl = document.getElementById('segundos');

const niver = "25 Dec 2021";

function contagem() {
    const newNiverDate = new Date(niver);
    const dataAtual = new Date();

    const segundosTotal = (newNiverDate - dataAtual) / 1000;

    const dias = Math.floor(segundosTotal / 3600 / 24);
    const horas = Math.floor(segundosTotal / 3600) % 24;
    const minutos = Math.floor(segundosTotal / 60) % 60;
    const segundos = Math.floor(segundosTotal) % 60;

    console.clear();
    console.log(dias, horas, minutos, segundos);

    diasEl.innerHTML = dias;
    horasEl.innerHTML = formatacao(horas);
    minutosEl.innerHTML = formatacao(minutos);
    segundosEl.innerHTML = formatacao(segundos);
    
}

function formatacao(tempo) {
    return tempo < 10 ? `0${tempo}` : tempo;
}


contagem();
setInterval (contagem, 1000);