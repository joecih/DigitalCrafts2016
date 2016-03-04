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
            showImage('fleeing.png');
            showNotice("Don't be such a chicken! Fight!!!", "red");
        }
    });
};


// Method Calls ---------
function throwDie() {
    var randomDie = Math.round(Math.random() * 5) + 1;
    var imageName = "d" + randomDie + ".gif";
    document.images['myDie1'].src = imageName;

    var randomDie2 = Math.round(Math.random() * 5) + 1;
    var imageName2 = "d" + randomDie2 + ".gif";
    document.images['myDie2'].src = imageName2;

    console.log("randomDie val: " + randomDie + " | randomDie2 val: " + randomDie2 + " | total: " + (randomDie + randomDie2));
    displayDiceOutcome((randomDie + randomDie2));

}


function showImage(_img) {
    var changeImage = document.getElementById('select-image');
    changeImage.style.backgroundImage = "url('" + _img + "')";

}

function hideImage() {
    var changeImage = document.getElementById('select-image');
    changeImage.style.backgroundImage = "url('')";
}

function hideNotice() {
    var notice = document.getElementById('show-message');
    notice.innerHTML = "";
}

function showNotice(_message, _mcolor) {
    _mcolor = (_mcolor == "") ? "black" : _mcolor; // Set default
    console.log("mcolor: " + _mcolor);
    var notice = document.getElementById('show-message');
    notice.innerHTML = "<font style='color:" + _mcolor + "'>" + _message + "</font>"; // ? Should add styling here ??
}

function displayScore(_value) {

}

function displayDiceOutcome(_value) {
    var outcome = document.getElementById("outcome");
    outcome.innerHTML = _value; // TODO: Add formatting and styling.
}