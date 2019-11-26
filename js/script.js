const STONE = 'kamień';
const PAPER = 'papier';
const SCISSORS = 'nozyczki';

function getMoveName(argMoveId) {
    console.log('Funkcja getMoveName z arg' + argMoveId + '');
    if (argMoveId === 1) {
        return stone;
    }
    else if (argMoveId === 2) {
        return paper;
    }
    else if (argMoveId === 3) {
        return scissors;
    }
    else {
        printMessage('Nie znany jest mi ten ruch ' + argMoveId + ' Pewnie chodziło Ci o "Kamień"');
        return stone;
    }
}
function displayResults(argPlayerMove, argComputerMove) {
    console.log('wywołanie funkcji displayResults z arg ' + argPlayerMove + ' , ' + argComputerMove + '');
    if (argPlayerMove === paper && argComputerMove === stone) {
        printMessage('Wygrywasz');
    } 
    else if (argPlayerMove === stone && argComputerMove === scissors) {
        printMessage('Wygrywasz');
    } 
    else if (argPlayerMove === scissors && argComputerMove === paper) {
        printMessage('Wygrywasz');
    } 
    else if (argPlayerMove === argComputerMove) {
        printMessage('Remis');
    } 
    else {
        printMessage('Przegrywasz :(');
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}