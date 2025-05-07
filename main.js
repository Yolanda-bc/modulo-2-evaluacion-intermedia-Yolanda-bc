'use strict';

// Constantes del html
const selectElement = document.querySelector('.js_gameSelect');
const playButton = document.querySelector('.js_btn-play');
const resultText = document.querySelector('.js_info');
const playerScoreEl = document.querySelector('.js_gamer');
const computerScoreEl = document.querySelector('.js_computer');

// Funcion para la jugada
function roundPlay () {
    const options =[ "Piedra", "Papel", "Tijeras"];
    //math.floor redondear el numero decimal
    // math.random genera nº del 0al1
    const resultRound = Math.floor (Math.random() * options.length);
    return options [resultRound];
    
}



