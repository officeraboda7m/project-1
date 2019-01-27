numOfPlays=0;
results = [];


function changeToXorO (event) {
currentSpot='.spot#'+ event.target.id;
if(numOfPlays%2===0) {
$(currentSpot).text('X');
results[event.target.id]='X';
} else {
$(currentSpot).text('O');
results[event.target.id]='O';
}
numOfPlays++;



// results.push (event.target.id + $(currentSpot).text());

for (i=0 ; i<9 ; i++) {
if ((results[0]===results[1]===results[2]==='X')) {
$('.spot').text('X');
// console.log('A');
}
}
}

// ('0X'&&'1X'&&'2X')||('3X'&&'4X'&&'5X')||('6X'&&'7X'&&'8X')
// ||('0X'&&'3X'&&'6X')||('1X'&&'4X'&&'7X')||('2X'&&'5X'&&'8X')||('0X'&&'4X'&&'8X')||('2X'&&'4X'&&'6X')

// ||(results[3]===results[4]===results[5]==='X')||(results[6]===results[7]===results[8]==='X')||(results[0]===results[3]===results[6]==='X')||(results[1]===results[4]===results[7]==='X')||(results[2]===results[5]===results[8]==='X')||(results[0]===results[4]===results[8]==='X')||(results[2]===results[4]===results[6]==='X')

$('.spot').on('click', changeToXorO);