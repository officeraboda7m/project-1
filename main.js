numOfPlays = 0;
results = [];


function TicTacToe(event) {
    if ($(event.target.id).text()==='') {  //printing either 'X' or 'O' in the target spot if it is empty.
        if (numOfPlays % 2 === 0) {
            $(event.target).text('X');     //since we are starting with 'X', we print 'X' for even plays starting from 0 and 'O' for add plays.
            results[event.target.id] = 'X';  //we store the result in an array while keeping them in order using array indexes.
        } else {
            $(event.target).text('O');
            results[event.target.id] = 'O';
        }   
        numOfPlays++; //increase number of plays.
    }

    for (i = 0; i < 9; i += 3) {   //checking for rows if they have a matching 'X'.
        if ((results[i] === 'X') && (results[i + 1] === 'X') && (results[i + 2] === 'X')) {
            $('.spot').text('X');  //if they do and 'X' wins, display 'X' on all spots.
        }
    }

    for (i = 0; i < 9; i++) {   //checking for columns if they have a matching 'X'.
        if ((results[i] === 'X') && (results[i + 3] === 'X') && (results[i + 6] === 'X')) {
            $('.spot').text('X');  //if they do and 'X' wins, display 'X' on all spots.
        }
    }

    if ((results[0] === 'X') && (results[4] === 'X') && (results[8] === 'X')) {   //chacking corner diameter for matching'X'.
        $('.spot').text('X');  
    }

    if ((results[2] === 'X') && (results[4] === 'X') && (results[6] === 'X')) {   //chacking corner diameter for matching'X'.
        $('.spot').text('X');
    }

    for (i = 0; i < 9; i += 3) {
        if ((results[i] === 'O') && (results[i + 1] === 'O') && (results[i + 2] === 'O')) {   //repeat for 'O'.
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