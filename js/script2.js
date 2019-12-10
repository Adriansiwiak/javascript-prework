let computerMove, randomNumber; 
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);



if(randomNumber === 1){
  computerMove === 'kamień';
}
else if(randomNumber === 2){
    computerMove === 'papier';
}
else if(randomNumber === 3){
    computerMove === 'nozyce'
}
else {
    computerMove === 'nieznany ruch';
}


let playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");{
let prompt = parseInt(playerInput);
}
console.log('Gracz wpisał: ' + playerInput);

if(playerInput === 1){
  playerMove === 'kamień';
}
else if(playerInput === 2){
    playerMove === 'papier';
}
else if(playerInput === 3){
    playerMove === 'nozyce';
}
else{
    console.log(błąd);
}
printMessage('Twój ruch to: ' + playerMove);

if (computerMove === 'kamień' && playerMove === 'papier')
    printMessage('Wygrywasz!');
else if (computerMove === playerMove)
    printMessage('Remis!');
else if (computerMove === 'kamień' && playerMove === 'nożyce')
    printMessage('Przegrywasz!');
else if (computerMove === 'papier' && playerMove === 'kamień')
    printMessage('Przegrywasz!');
else if (computerMove === 'papier' && playerMove === 'nożyce')
    printMessage('Wygrywasz!');
else if (computerMove === 'nożyce' && playerMove === 'papier')
    printMessage('Przegrywasz!');
else if (computerMove === 'nożyce' && playerMove === 'kamień')
    printMessage('Wygrywasz!');
