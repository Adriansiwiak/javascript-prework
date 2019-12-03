{
    let KAMIEŃ = 1;
    let PAPIER = 2;
    let NOŻYCE = 3;

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
        console.log('Gracz wpisał: ' + playerInput)


        const displayResult = function (argComputerMove, argPlayerMove) {
            if (argComputerMove === KAMIEŃ && argPlayerMove === PAPIER) {
                printMessage('Zagrałem ' + getMoveName(argComputerMove) + ' a ty ' + getMoveName(playerInput) + ' więc Wygrywasz!');
            }
            else if (argComputerMove === NOŻYCE && argPlayerMove === PAPIER) {
                printMessage('Zagrałem ' + getMoveName(argComputerMove) + ' a ty ' + getMoveName(playerInput) + ' więc Przegrywasz');
            }
            else if (argComputerMove === KAMIEŃ && argPlayerMove === NOŻYCE) {
                printMessage('Zagrałem ' + getMoveName(argComputerMove) + ' a ty ' + getMoveName(playerInput) + ' więc Przegrywasz ;(');
            }
            else if (argComputerMove === PAPIER && argPlayerMove === NOŻYCE) {
                printMessage('Zagrałem ' + getMoveName(argComputerMove) + ' a ty ' + getMoveName(playerInput) + ' więc Wygrywasz!');
            }
            else if (argComputerMove === argPlayerMove) {
                printMessage('Remis');
            }
            else if (argComputerMove === PAPIER && argPlayerMove === KAMIEŃ) {
                printMessage('Zagrałem ' + getMoveName(argComputerMove) + ' a ty ' + getMoveName(playerInput) + ' więc Przegrywasz ;(');
            }
            else if (argComputerMove === NOŻYCE && argPlayerMove === KAMIEŃ) {
                printMessage('Zagrałem ' + getMoveName(argComputerMove) + ' a ty ' + getMoveName(playerInput) + ' więc Wygrywasz!');
            }
            else if (argComputerMove === NOŻYCE && argPlayerMove === 'nieznany ruch') {
                printMessage('Błąd');
            }
            else if (argComputerMove === PAPIER && argPlayerMove === 'nieznany ruch') {
                printMessage('Błąd');
            }
            else if (argComputerMove === KAMIEŃ && argPlayerMove === 'nieznany ruch') {
                printMessage('Błąd');
            }
        }
        displayResult(randomNumber, playerInput);
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