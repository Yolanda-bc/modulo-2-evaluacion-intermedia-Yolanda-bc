'use strict';

// Constantes del html
const selectElement = document.querySelector('.js_gameSelect');
const playButton = document.querySelector('.js_btn-play');
const resultText = document.querySelector('.js_info');
const playerScoreEl = document.querySelector('.js_gamer');
const computerScoreEl = document.querySelector('.js_computer');
const resultGame = document.querySelector (".js_result")



// Función para obtener un número aleatorio entre 1 y max
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }
  
  // Función para obtener la elección del ordenador
  function getComputerPlay() {
    const randomNumber = getRandomNumber(9); // da el resultado de un número entre 1 y 9
  
    if (randomNumber <= 3) {
      return 'Piedra';  // Si el número es 1, 2 o 3, el ordenador elige 'piedra'
    } else if (randomNumber >= 7) {
      return 'Papel';   // Si el número es 7, 8 o 9, el ordenador elige 'papel'
    } else {
      return 'Tijeras'; // Si el número es 4, 5 o 6, el ordenador elige 'tijeras'
    }
  }

let jugador = playerPlay
let ordenador = computerPlay
   // Función para comparar las jugadas y obtener el resultado
 function getResult(playerPlay, computerPlay) {
  if (playerPlay === computerPlay) {
    return 'empate'; // Si las jugadas son iguales, es empate
  } else if (
    (playerPlay === 'piedra' && computerPlay === 'tijeras') ||
    (playerPlay === 'papel' && computerPlay === 'piedra') ||
    (playerPlay === 'tijeras' && computerPlay === 'papel')
  ) {
    return 'ganar'; // Si la jugada de la jugadora gana a la del ordenador
  } else {
    return 'perder'; // Si la jugada del ordenador gana a la de la jugadora
  }
}

// Evento para cuando la jugadora hace clic en el botón
document.querySelector('.btn-play').addEventListener('click', () => {})
    const playerPlay = document.querySelector('.js_gameSelect').value;  // La jugada de la jugadora
    const computerPlay = getComputerPlay();  // La jugada del ordenador
    const result = getResult(playerPlay, computerPlay);  // Resultado 
  
   
 



