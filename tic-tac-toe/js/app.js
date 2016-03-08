var winners = [
    ['b1', 'b2', 'b3'],
    ['b4', 'b5', 'b6'],
    ['b7', 'b8', 'b9'],
    ['b1', 'b5', 'b9'],
    ['b2', 'b5', '8'],
    ['b3', 'b5', 'b7']
];

var configApp = {
    'firstPlayer': 'Player 1',
    'secondPlayer': 'Computer',
}

var whosTurn = 1;
updatePlayer2();
initSessionConfig();

function addSelection(who) {

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

function updatePlayer1() {
    var ePlayer1Name = document.getElementById("player1-name");
    var ePlayer1ScoreLabel = document.getElementById("player1-score-label");
    // configApp.firstPlayer = ePlayer1Name.value;
    
    updatePlayerNameLabels(ePlayer1ScoreLabel, configApp.firstPlayer);
}

function updatePlayer2() {
    var eTick = document.getElementById("player-tick");
    var ePlayer2Name = document.getElementById("player2-name");

    try {
        if (eTick.checked) {
            ePlayer2Name.disabled = false;
            ePlayer2Name.style.backgroundColor = "lightgoldenrodyellow";
            ePlayer2Name.style.color = "black";

            if (eTick.checked && ePlayer2Name.value == "") throw "No name was given for the 2nd player!";
        } else {
            ePlayer2Name.disabled = true;
            ePlayer2Name.style.backgroundColor = "lightgrey";
            ePlayer2Name.style.color = "white";
            updatePlaceHolderInput(ePlayer2Name, 'Default: Computer');
        }
    } catch (e) {
        alert("[Warning] : " + e);
    }

}

// function updatePlayerNames() {
//     var eInputName = document.getElementById("player-name");
//     var ePlayer1Name = document.getElementById("player1-name");
//     var ePlayer2Name = document.getElementById("player2-name");
// }

function updatePlaceHolderMessage(_obj, message) {
    message = (message == undefined) ? "" : message;  
    _obj.setAttribute('placeholder', message);
}

function updatePlayerNameLabels(_obj, message) {
    message = (message == undefined) ? "" : message;
    _obj.innerHTML = message;
}

function initSessionConfig() {
    for ( var key in configApp ) {
         window.sessionStorage.setItem(key, configApp[key]);
    }
}

function updateAppConfigItem(_key, _value) {
    try {
        for ( var key in configApp ) {
            
            console.log("Key: " + key);
            if ( key.toString() == _key ) {
                configApp[key] = _value;
            } else { throw "Key value: " + _key + " is invalid!"}
        }        
    } catch(e) {
        console.log("[ERROR] : " + e);
    }
}

function saveConfiguration() {
    updateAppConfigItem('firstPlayer', document.getElementById("player1-name").value);
    updateAppConfigItem('secondPlayer', document.getElementById("player2-name").value);
}

