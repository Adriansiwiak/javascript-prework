{
    let KAMIEŃ = '1';
    let PAPIER = '2';
    const NOŻYCE = '3';

    const playGame = function (playerInput) {
        clearMessages()

        const getMoveName = function (argMoveId) {
            if (argMoveId === 1) {
                return 'kamień';
            } else if (argMoveId === 2) {
                return 'papier';
            } else if (argMoveId === 3) {
                return 'nożyce';
            }
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }

        const randomNumber = Math.floor(Math.random() * 3 + 1);
        console.log('Wylosowana liczba to: ' + randomNumber);
        const argComputerMove = getMoveName(randomNumber);
        console.log('Gracz wpisał: ' + playerInput);
        const argPlayerMove = getMoveName(playerInput);



        const displayResult = function (argComputerMove, argPlayerMove) {
            if (argComputerMove === 'kamień' && argPlayerMove === 'papier') {
                printMessage('Zagrałem ' +argComputerMove + ' a ty ' +argPlayerMove+ ' więc Wygrywasz!');
            }
            else if (argComputerMove === 'nożyce' && argPlayerMove === 'papier') {
                printMessage('Zagrałem ' +argComputerMove + ' a ty ' +argPlayerMove+ ' więc Przegrywasz');
            }
            else if (argComputerMove === 'kamień' && argPlayerMove === 'nożyce') {
                printMessage('Zagrałem ' +argComputerMove + ' a ty ' +argPlayerMove+ ' więc Przegrywasz ;(');
            }
            else if (argComputerMove === 'papier' && argPlayerMove === 'nożyce') {
                printMessage('Zagrałem ' +argComputerMove + ' a ty ' +argPlayerMove+ ' więc Wygrywasz!');
            }
            else if (argComputerMove === argPlayerMove) {
                printMessage('Remis');
            }
            else if (argComputerMove === 'papier' && argPlayerMove === 'kamień') {
                printMessage('Zagrałem ' +argComputerMove + ' a ty ' +argPlayerMove+ ' więc Przegrywasz ;(');
            }
            else if (argComputerMove === 'nożyce' && argPlayerMove === 'kamień') {
                printMessage('Zagrałem ' +argComputerMove + ' a ty ' +argPlayerMove+ ' więc Wygrywasz!');
            }
            else if (argComputerMove === 'nożyce' && argPlayerMove === 'nieznany ruch') {
                printMessage('Błąd');
            }
            else if (argComputerMove === 'papier' && argPlayerMove === 'nieznany ruch') {
                printMessage('Błąd');
            }
            else if (argComputerMove === 'kamień' && argPlayerMove === 'nieznany ruch') {
                printMessage('Błąd');
            }
        }
        displayResult(argComputerMove, argPlayerMove);
    }
    document.getElementById('play-ro').addEventListener('click', function () {
        playGame(1);
    });
    document.getElementById('play-pa').addEventListener('click', function () {
        playGame(2);
    });
    document.getElementById('play-sc').addEventListener('click', function () {
        playGame(3);
    });
}