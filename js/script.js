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
            var argComputerMove = KAMIEŃ;
            switch (argPlayerMove) {
                case 1:
                    printMessage('Remis');
                    break;
                case 2:
                    printMessage('Zagrałem ' + getMoveName(argComputerMove) + ' a ty ' + getMoveName(playerInput) + ' więc Przegrywasz ;(');
                    break;
                case 3:
                    printMessage('Zagrałem ' + getMoveName(argComputerMove) + ' a ty ' + getMoveName(playerInput) + ' więc Wygrywasz!');
                default:
                    printMessage('Błąd')
                    break;
            }
            var argComputerMove = PAPIER;
            switch (argPlayerMove) {
                case 2:
                    printMessage('Remis');
                    break;
                case 1:
                    printMessage('Zagrałem ' + getMoveName(argComputerMove) + ' a ty ' + getMoveName(playerInput) + ' więc Przegrywasz ;(');
                    break;
                case 3:
                    printMessage('Zagrałem ' + getMoveName(argComputerMove) + ' a ty ' + getMoveName(playerInput) + ' więc Wygrywasz!');
                    break;
                default:
                    printMessage('Błąd')
                    break;
            }
            var argComputerMove = NOŻYCE;
            switch (argPlayerMove) {
                case 3:
                    printMessage('Remis');
                    break;
                case 2:
                    printMessage('Zagrałem ' + getMoveName(argComputerMove) + ' a ty ' + getMoveName(playerInput) + ' więc Przegrywasz ;(');
                    break;
                case 1:
                    printMessage('Zagrałem ' + getMoveName(argComputerMove) + ' a ty ' + getMoveName(playerInput) + ' więc Wygrywasz!');
                    break;
                default:
                    printMessage('Błąd')
                    break;
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



