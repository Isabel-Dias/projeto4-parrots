//Valid card number check
let cardsNumber;
let checker;

askForCardNumber();
checkNumber();

function askForCardNumber() {
    cardsNumber = Number(prompt('Com quantas cartas você quer jogar?'));
    if(cardsNumber <= 14 && cardsNumber >= 4 && cardsNumber % 2 == 0) {
        checker = true;
    }
}
function checkNumber() {
    while (checker !== true) {
        askForCardNumber();
    }
}

//Card Selection
let cardsIndex = (cardsNumber / 2) - 1;
let selectedCards = [];

function cardSelection(){
    let i = 0;
    while (i < cardsIndex) {
        selectedCards.push(cardsContainer[i]);
        selectedCards.push(cardsContainer[i]);
        i++;
    }
}

cardSelection()

//Card Shuffle
for (let i = selectedCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [selectedCards[i], selectedCards[j]] = [selectedCards[j], selectedCards[i]];
}

//Card Library
const cardsContainer = [
    `<div class="card">
        <div class="front-face face">
        <img class="front-img" src="./images/back.png">
        </div>
        <div class="back-face face">
        <img class="back-gif" src="./images/bobrossparrot.gif">
        </div>
    </div>`,
    `<div class="card">
        <div class="front-face face">
        <img class="front-img" src="./images/back.png">
        </div>
        <div class="back-face face">
        <img class="back-gif" src="./images/explodyparrot.gif">
        </div>
    </div>`,
    `<div class="card">
        <div class="front-face face">
        <img class="front-img" src="./images/back.png">
        </div>
        <div class="back-face face">
        <img class="back-gif" src="./images/fiestaparrot.gif">
        </div>
    </div>`,
    `<div class="card">
        <div class="front-face face">
        <img class="front-img" src="./images/back.png">
        </div>
        <div class="back-face face">
        <img class="back-gif" src="./images/metalparrot.gif">
        </div>
    </div>`,
    `<div class="card">
        <div class="front-face face">
        <img class="front-img" src="./images/back.png">
        </div>
        <div class="back-face face">
        <img class="back-gif" src="./images/revertitparrot">
        </div>
    </div>`,
    `<div class="card">
        <div class="front-face face">
        <img class="front-img" src="./images/back.png">
        </div>
        <div class="back-face face">
        <img class="back-gif" src="./images/tripletsparrot.gif">
        </div>
    </div>`,
    `<div class="card">
        <div class="front-face face">
        <img class="front-img" src="./images/back.png">
        </div>
        <div class="back-face face">
        <img class="back-gif" src="./images/unicornparrot.gif">
        </div>
    </div>`
]






