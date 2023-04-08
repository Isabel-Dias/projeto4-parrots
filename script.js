//Card Library
const cardsContainer = [
    `<div onclick="turnCard(this)" class="card">
        <div class="front-face-start face">
            <img class="front-img" src="./images/back.png">
        </div>
        <div class="back-face-start face">
            <img class="back-gif" src="./images/bobrossparrot.gif">
        </div>
    </div>`,
    `<div onclick="turnCard(this)" class="card">
        <div class="front-face-start face">
        <img class="front-img" src="./images/back.png">
        </div>
        <div class="back-face-start face">
        <img class="back-gif" src="./images/explodyparrot.gif">
        </div>
    </div>`,
    `<div onclick="turnCard(this)" class="card">
        <div class="front-face-start face">
        <img class="front-img" src="./images/back.png">
        </div>
        <div class="back-face-start face">
        <img class="back-gif" src="./images/fiestaparrot.gif">
        </div>
    </div>`,
    `<div onclick="turnCard(this)" class="card">
        <div class="front-face-start face">
        <img class="front-img" src="./images/back.png">
        </div>
        <div class="back-face-start face">
        <img class="back-gif" src="./images/metalparrot.gif">
        </div>
    </div>`,
    `<div onclick="turnCard(this)" class="card">
        <div class="front-face-start face">
        <img class="front-img" src="./images/back.png">
        </div>
        <div class="back-face-start face">
        <img class="back-gif" src="./images/revertitparrot.gif">
        </div>
    </div>`,
    `<div onclick="turnCard(this)" class="card">
        <div class="front-face-start face">
        <img class="front-img" src="./images/back.png">
        </div>
        <div class="back-face-start face">
        <img class="back-gif" src="./images/tripletsparrot.gif">
        </div>
    </div>`,
    `<div onclick="turnCard(this)" class="card">
        <div class="front-face-start face">
        <img class="front-img" src="./images/back.png">
        </div>
        <div class="back-face-start face">
        <img class="back-gif" src="./images/unicornparrot.gif">
        </div>
    </div>`
]

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
    while (i < cardsIndex + 1) {
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

//Sending selectedCards to HTML
function cardSend(){
    const cc = document.querySelector('.cards-container')
    i = 0;
    while(i < selectedCards.length) {
        cc.innerHTML += selectedCards[i];
        i++;
    }
}

cardSend();

//Turn Cards
function turnCard(card) {
    console.log(card)
    const cardFront = card.children[0];
    console.log(cardFront)
    const cardBack = card.children[1];
    console.log(cardBack)
    cardFront.classList.add('turn-front-face');
    cardBack.classList.add('turn-back-face');
}








