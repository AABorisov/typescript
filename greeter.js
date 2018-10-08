// greeter.ts
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
var Handler = /** @class */ (function () {
    function Handler() {
        this.onClickBad = function (e) {
            // oops, used this here. using this callback would crash at runtime
            // this.info = e.type;
            console.log(e.target);
        };
    }
    return Handler;
}());
var h = new Handler();
var uiElement;
// uiElement.addClickListener(h.onClickBad); // error!
var suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x) {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        var pickedCard_1 = Math.floor(Math.random() * x.length);
        return pickedCard_1;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
var pickedCard1 = myDeck[pickCard(myDeck)];
// alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);
var pickedCard2 = pickCard(15);
// alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
function identity(arg) {
    return arg;
}
var output = identity(1);
var E;
(function (E) {
    E[E["X"] = 0] = "X";
    E[E["Y"] = 1] = "Y";
    E[E["Z"] = 2] = "Z";
})(E || (E = {}));
var E2;
(function (E2) {
    E2["X"] = "x";
    E2["Y"] = "y";
    E2["Z"] = "zzz";
})(E2 || (E2 = {}));
var Enum3;
(function (Enum3) {
    Enum3[Enum3["A"] = 1] = "A";
    Enum3[Enum3["B"] = 2] = "B";
    Enum3[Enum3["C"] = 2] = "C";
})(Enum3 || (Enum3 = {}));
var b = Enum3.B;
var nameOfB = Enum3[b];
var c = Enum3.C;
var nameOfC = Enum3[c];
console.log(nameOfB, nameOfC);
var people;
people.value.name = "Andrey";
var l = people.left;
l.value;
var BasicCalculator = /** @class */ (function () {
    function BasicCalculator(value) {
        if (value === void 0) { value = 0; }
        this.value = value;
    }
    BasicCalculator.prototype.currentValue = function () {
        return this.value;
    };
    BasicCalculator.prototype.add = function (operand) {
        this.value += operand;
        return this;
    };
    BasicCalculator.prototype.multiply = function (operand) {
        this.value *= operand;
        return this;
    };
    return BasicCalculator;
}());
var v = new BasicCalculator(2)
    .multiply(5)
    .add(1)
    .currentValue();
