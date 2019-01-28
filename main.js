numOfPlays = 0;
results = [];


function TicTacToe(event) {
    currentSpot = '.spot#' + event.target.id;
    if ($(currentSpot).text()==='') {
        if (numOfPlays % 2 === 0) {
            $(currentSpot).text('X');
            results[event.target.id] = 'X';
        } else {
            $(currentSpot).text('O');
            results[event.target.id] = 'O';
        }
        numOfPlays++;
    }

    for (i = 0; i < 9; i += 3) {
        if ((results[i] === 'X') && (results[i + 1] === 'X') && (results[i + 2] === 'X')) {
            $('.spot').text('X');
        }
    }

    for (i = 0; i < 9; i++) {
        if ((results[i] === 'X') && (results[i + 3] === 'X') && (results[i + 6] === 'X')) {
            $('.spot').text('X');
        }
    }

    if ((results[0] === 'X') && (results[4] === 'X') && (results[8] === 'X')) {
        $('.spot').text('X');
    }

    if ((results[2] === 'X') && (results[4] === 'X') && (results[6] === 'X')) {
        $('.spot').text('X');
    }

    for (i = 0; i < 9; i += 3) {
        if ((results[i] === 'O') && (results[i + 1] === 'O') && (results[i + 2] === 'O')) {
            $('.spot').text('O');
        }
    }

    for (i = 0; i < 9; i++) {
        if ((results[i] === 'O') && (results[i + 3] === 'O') && (results[i + 6] === 'O')) {
            $('.spot').text('O');
        }
    }

    if ((results[0] === 'O') && (results[4] === 'O') && (results[8] === 'O')) {
        $('.spot').text('O');
    }

    if ((results[2] === 'O') && (results[4] === 'O') && (results[6] === 'O')) {
        $('.spot').text('O');
    }

}

$('.spot').on('click', TicTacToe);