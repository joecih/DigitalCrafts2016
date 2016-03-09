var myArray = [];
var someObject = {};
var theClass = [
    'Tristan', 'Joshua', 'Bogdan', 'Joe', 'Laz', 'Keith', 'Will', 'Curtis', 'Koshan', 'Patrick', 'The Handsome One', 'Jeremy'
];


var questionArray = [];

function ClassQuizItem(_par1, _par2, _par3) {
    this.question = _par1;
    this.answer = _par2;
    this.difficulty = _par3;
}

questionArray.push(new ClassQuizItem('Question1', 'Answer1', 2));
questionArray.push(new ClassQuizItem('Question2', 'Answer2', 3));
questionArray.push(new ClassQuizItem('Question3', 'Answer3', 1));




// C O N S T R U C T O R
function ClassQuizItem(_par1, _par2, _par3) {

    this.question = _par1;
    this.answer = _par2;
    this.difficulty = _par3;

    // setArray(someObject);
}

function getObject() {
    return someObject;
}

function getArrayItem(_index) {
    return myArray[_index];
}

function setArray(_obj) {
    myArray.push(_obj);
}

function updateQuestion() {
    var rand = Math.floor(Math.random() * questionArray.length);
    var rand2 = Math.floor(Math.random() * theClass.length);
    var output = document.getElementById("question-text");
    output.innerHTML = questionArray[rand].question + ', ' + theClass[rand2];
}

// A constructor for a business that has plans for websites
function Plan(_name, _price, _space, _transfer, _pages, _discountMonths) {
    this.name = _name;
    this.price = _price;
    this.space = _space;
    this.transfer = _transfer;
    this.pages = _pages;
    this.discountMonths = _discountMonths;

}

Plan.prototype.calcAnnual = function(percentIfDisc) {
    var bestPrice = this.price;
    var currentDate = new Date();
    var currMonth = currentDate.getMonth();
    for (var i = 0; i < this.discountMonths.length; i++) {
        if (this.discountMonths[i] == currMonth) {
            bestPrice = this.price * percentIfDisc;
            break;
        }

    }

    return bestPrice * 12;
}


var plan1 = new Plan("Basic", 99, 100, 1000, 10, [0, 1]);
var plan2 = new Plan("Premium", 199, 500, 5000, 50, [2, 3]);
var plan3 = new Plan("Diamond", 299, 1000, 2000, 500, [4, 5]);