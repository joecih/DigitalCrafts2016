var winners = [
    ['b1', 'b2', 'b3'],
    ['b4', 'b5', 'b6'],
    ['b7', 'b8', 'b9'],
    ['b1', 'b5', 'b9'],
    ['b2', 'b5', '8'],
    ['b3', 'b5', 'b7']
];

var configApp = {
    player1name: 'Player 1',
    player2name: 'Computer'
}

var whosTurn = 1;
updatePlayer2();
//initSessionConfig();

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

function sessionVariableValue(_Name) {
    var sess = window.sessionStorage;
    
    for ( key in sess ) {

        if ( key === _Name ) {
            // Check session variable, if empty use the default;
            return (sess.getItem(key) === '') ? configApp[key] : sess.getItem(key);
        }
    }
    
    return -1;
    
}

function updatePlayer1() {
    var ePlayer1ScoreLabel = document.getElementById("player1-score-label");
    updatePlayerNameLabels(ePlayer1ScoreLabel, sessionVariableValue('player1name'));
}

function updatePlayer2() {
    var eTick = document.getElementById("player-tick");
    var ePlayer2Name = document.getElementById("player2name");
    var ePlayer2ScoreLabel = document.getElementById("player2-score-label");

    try {
        if (eTick.checked) {
            ePlayer2Name.disabled = false;
            ePlayer2Name.style.backgroundColor = "lightgoldenrodyellow";
            ePlayer2Name.style.color = "black";
            updatePlayerNameLabels(ePlayer2ScoreLabel, sessionVariableValue('player2name'));
            
            //if (eTick.checked && ePlayer2Name.value == "") throw "No name was given for the 2nd player!";
        } else {
            ePlayer2Name.disabled = true;
            ePlayer2Name.style.backgroundColor = "lightgrey";
            ePlayer2Name.style.color = "white";
            
           
            updatePlaceHolderInput(ePlayer2Name, sessionVariableValue('player2name'));
        }
    } catch (e) {
        //alert("[Warning] : " + e);
    }

}


function updatePlaceHolderMessage(_obj, message) {
    message = (message == undefined) ? "" : message;  
    _obj.setAttribute('placeholder', message);
}

function updatePlayerNameLabels(_obj, message) {
    message = (message == undefined) ? "" : message;
    _obj.innerHTML = message;
}

function getPlayerNameLabel(_obj) {
    return _obj.innerHTML;
}

function initSessionConfig() {
    for ( var key in configApp ) {
         window.sessionStorage.setItem(key, configApp[key]);
    }
}

// Saves configuration to the open session ONLY!
function saveConfiguration() {

    var everyID = document.querySelectorAll("input[id*='play']");
    for (var i=0; i < everyID.length; i++) {
        console.log(everyID[i].id);
        for ( var key in configApp ) {
            if ( key == everyID[i].id ) {
                var item = document.getElementById(key).value;
                configApp[key] = (item != '') ? item : configApp[key];
                break;
            }
        }
    }
    
    initSessionConfig();
    updatePlayer1();
    updatePlayer2();
}

// function updateAppConfigObject(_name, _value) {
//     try {
//         for ( var key in configApp ) {

//             if ( key == _name ) {
//                 configApp[key] = _value;
//                 break;
//             } else {
//                 // throw "Key value: '" + key + "' is invalid!";
//             }
//         }        
//     } catch(e) {
//         console.log("[ERROR] : " + e);
//     }
// }



