// greeter.ts

class Student {
	fullName: string;
	constructor (public firstName: string, public middleInitial: string, public lastName: string) {
		this.fullName = firstName + " " + middleInitial + " " + lastName;
	}
}

interface Person {
	firstName: string,
	lastName: string
}

function greeter(person: Person) {
	return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

// document.body.innerHTML = greeter(user);


interface Card {
    suit: string;
    card: number;
}
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}
let deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function(this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

// alert("card: " + pickedCard.card + " of " + pickedCard.suit);

interface UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void;
}

class Handler {
    info: string;
    onClickBad = (e:Event) => {
        // oops, used this here. using this callback would crash at runtime
        // this.info = e.type;
        console.log(e.target);
    }
}
let h = new Handler();
let uiElement: UIElement;
// uiElement.addClickListener(h.onClickBad); // error!


let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
// alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
// alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);


function identity<T>(arg: T): T {
    return arg;
}
let output = identity(1);

enum E {
    X, Y, Z
}

enum E2 {
    X = "x", Y = "y", Z = "zzz"
}

const enum Enum {
    A = 1,
    B = A * 2
}

const enum Directions {
    Up,
    Down,
    Left,
    Right
}

declare enum Enum2 {
    A = 1,
    B,
    C = 2
}
enum Enum3 {
    A = 1,
    B,
    C = 2
}
let b = Enum3.B;
let nameOfB = Enum3[b];
let c = Enum3.C;
let nameOfC = Enum3[c];
console.log(nameOfB, nameOfC);


type Tree<T> = {
    value: T;
    left: Tree<T>;
    right: Tree<T>;
}
interface Person {
    name: string
}

var people: Tree<Person>;
people.value.name = "Andrey";
var l = people.left;
l.value;


class BasicCalculator {
    public constructor(protected value: number = 0) { }
    public currentValue(): number {
        return this.value;
    }
    public add(operand: number): this {
        this.value += operand;
        return this;
    }
    public multiply(operand: number): this {
        this.value *= operand;
        return this;
    }
    // ... other operations go here ...
}

let v = new BasicCalculator(2)
    .multiply(5)
    .add(1)
    .currentValue();
