var computerMove, randomNumber;
let rundomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to ' + randomNumber);
let computerMove = 'nieznany ruch';

if (randomNumber == '1') {
    computerMove = 'kamień';
}
else if (randomNumber == '2') {
    computerMove = 'papier';
}
else if (randomNumber == '3') {
    computerMove = 'nozyce';
}

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if (playerInput == '1') {
    playerMove = 'kamień';
}
else if (playerInput == '2') {
    playerMove = 'papier';
}
else if (playerInput == '3') {
    playerMove = 'nozyce';
}
else {
    playerMove = 'nieznany ruch';
}
printMessage('Mój ruch: ' + computerMove);


if (computerMove == 'kamień' && playerMove == 'papier') {
    printMessage('Ty wygrywasz!');
}
if (computerMove == 'Papier' && playerMove == 'kamień') {
    printMessage('Ty przegrywasz!');
}
if (computerMove == 'nozyczki' && playerMove == 'papier') {
    printMessage('Ty przegrywasz!');
}
if (computerMove == 'papier' && playerMove == 'nozyczki') {
    printMessage('Ty wygrywasz!');
}
if (computerMove == 'kamień' && playerMove == 'nozyczki') {
    printMessage('Ty przegrywasz!');
}
if (computerMove == 'nozczki' && playerMove == 'kamień') {
    printMessage('Ty wygrywasz!');
}
if (computerMove == 'nozczki' && playerMove =='nieznany ruch') {
    printMessage(' Wartość spoza przedziału 1-3, wybierz jeszce raz! ');
}
if (computerMove == 'kamień' && playerMove =='nieznany ruch') {
    printMessage(' Wartość spoza przedziału 1-3, wybierz jeszce raz! ');
}
if (computerMove == 'papier' && playerMove =='nieznany ruch') {
    printMessage(' Wartość spoza przedziału 1-3, wybierz jeszce raz! ');
}