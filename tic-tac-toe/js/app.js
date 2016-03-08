var winners = [
  ['b1','b2','b3'],
  ['b4','b5','b6'],
  ['b7','b8','b9'],
  ['b1','b5','b9'],
  ['b2','b5','8'],
  ['b3','b5','b7'] 
];

var whosTurn = 1;
updatePlayer();

function addSelection(who){
    
    if (whosTurn == 1) {
        // it's X's turn, put an X in empty square.
        who.innerHTML = 'X';
        whosTurn = 2;
    } else {
        // it has tobe O's turn .. put an O in.
        who.innerHTML = 'O';
        whosTurn = 1;
    }
    
}

function showMenu() {

    var e = document.getElementById("drop-down-menu");
    
    if (e.style.display == 'block' || e.style.display == '') {
        e.style.display = "none";
    } else {
        e.style.display = "block";
    }

}

function update2ndPlayerField() {
    var eTick = document.getElementById("player-tick");
    var ePlayerName = document.getElementById("player-name");
    
    if (eTick.checked == true) {
        ePlayerName.disabled = false;
        ePlayerName.style.backgroundColor = "lightgoldenrodyellow";
    } else {
        ePlayerName.disabled = true;
        ePlayerName.style.backgroundColor = "darkgrey";
    }
}

function updatePlayerNames() {
    var eInputName = document.getElementById("player-name");
    var ePlayer1Name = document.getElementById("player1-name");
    var ePlayer2Name = document.getElementById("player2-name");
}