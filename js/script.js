{
    const KAMIEŃ = 1;
    const PAPIER = 2;
    const NOŻYCE = 3;

   
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
        console.log('Mój ruch to: ' + randomNumber);
        console.log('Twój ruch to: ' + playerInput);


        const displayResult = function (argComputerMove, argPlayerMove) {
            switch (true) {
                case argComputerMove === argPlayerMove:
                    printMessage('Remis')
                    break;
                case argComputerMove === KAMIEŃ && argPlayerMove === PAPIER:
                case argComputerMove === PAPIER && argPlayerMove === KAMIEŃ:
                case argComputerMove === PAPIER && argPlayerMove === NOŻYCE:
                case argComputerMove === NOŻYCE && argPlayerMove === KAMIEŃ:
                    printMessage('Wygrywasz!');
                    break;
                case argComputerMove === KAMIEŃ && argPlayerMove === NOŻYCE:
                case argComputerMove === NOŻYCE && argPlayerMove === PAPIER:
                case argComputerMove === PAPIER && argPlayerMove === KAMIEŃ:
                case argComputerMove === PAPIER && argPlayerMove === NOŻYCE:
                    printMessage('Przegrywasz.');
                    break;
                default:
                    printMessage('Błąd!')
                    break;
            }
            
        }
        displayResult(randomNumber, playerInput)
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