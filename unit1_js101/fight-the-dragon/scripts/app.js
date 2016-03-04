hideImage(); // Initially
hideNotice();

// Button Event Listeners ------
var eButton = document.getElementsByTagName('button');
for (var i = 0; i < eButton.length; i++) {
    eButton[i].addEventListener("click", function() {
        if (this.name == "btn1") {
            // do someting for Fight!
        }

        if (this.name == "btn2") {
            // do something for flee?
            showImage('select-image','fleeing.png');
            showNotice("Don't be such a chicken! Fight!!!", "red");
        }
    });
};


// Method Calls ---------
function throwDie() {
    var randomDie = Math.round(Math.random() * 5) + 1;
    var imageName = "d" + randomDie + ".gif";
    document.images['myDie1'].src = "images/" + imageName;

    var randomDie2 = Math.round(Math.random() * 5) + 1;
    var imageName2 = "d" + randomDie2 + ".gif";
    document.images['myDie2'].src = "images/" + imageName2;
    
    var totalDie = (randomDie + randomDie2);

    //console.log("randomDie val: " + randomDie + " | randomDie2 val: " + randomDie2 + " | total: " + totalDie);
    displayDiceOutcome(totalDie);
    
    if ( totalDie >= 9 ) {
        // Set player score
        hideImage();
        hideNotice();
    } else {
        // you got burned!
        hideImage();
        hideNotice();
        showImage("big-image", "big-dragon.jpg");
        showNotice("Deebo! You should have been bobbin and weavin!", "black", "40px");
    }

}


function showImage(_obj, _img) {
    _img = (_img == "") ? "" : _img;
    // _obj = (_obj == "") ? "" : _obj; REQUIRED
     
    var changeImage = document.getElementById(_obj);
    changeImage.style.backgroundImage = "url('images/" + _img + "')";

}

function hideImage() {
    var changeImage = document.getElementById('select-image');
    changeImage.style.backgroundImage = "url('')";
}

function hideNotice() {
    var notice = document.getElementById('show-message');
    notice.innerHTML = "";
}

function showNotice(_message, _mcolor, _fontSize) {
    _mcolor = (_mcolor == "") ? "black" : _mcolor; // Set default
    _fontSize = (_fontSize == "") ? "25px" : _fontSize;
    
    
    // console.log("mcolor: " + _mcolor);
    var notice = document.getElementById('show-message');
    notice.innerHTML = "<font style='color:" + _mcolor + "; font-size:" + _fontSize + "'>" + _message + "</font>"; // ? Should add styling here ??
}

function displayScore(_value) {

}

function displayDiceOutcome(_value) {
    var outcome = document.getElementById("outcome");
    outcome.innerHTML = _value; // TODO: Add formatting and styling.
}