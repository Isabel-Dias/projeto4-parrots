//Card Library
const cardsContainer = [
    `<div class="card">
        <div onclick="turnCard(this)" class="front-face-start face">
            <img class="front-img" src="./images/back.png">
        </div>
        <div class="back-face-start face">
            <img class="back-gif" src="./images/bobrossparrot.gif">
        </div>
    </div>`,
    `<div class="card">
        <div onclick="turnCard(this)" class="front-face-start face">
        <img class="front-img" src="./images/back.png">
        </div>
        <div class="back-face-start face">
        <img class="back-gif" src="./images/explodyparrot.gif">
        </div>
    </div>`,
    `<div class="card">
        <div onclick="turnCard(this)" class="front-face-start face">
        <img class="front-img" src="./images/back.png">
        </div>
        <div class="back-face-start face">
        <img class="back-gif" src="./images/fiestaparrot.gif">
        </div>
    </div>`,
    `<div class="card">
        <div onclick="turnCard(this)" class="front-face-start face">
        <img class="front-img" src="./images/back.png">
        </div>
        <div class="back-face-start face">
        <img class="back-gif" src="./images/metalparrot.gif">
        </div>
    </div>`,
    `<div class="card">
        <div onclick="turnCard(this)" class="front-face-start face">
        <img class="front-img" src="./images/back.png">
        </div>
        <div class="back-face-start face">
        <img class="back-gif" src="./images/revertitparrot.gif">
        </div>
    </div>`,
    `<div class="card">
        <div onclick="turnCard(this)" class="front-face-start face">
        <img class="front-img" src="./images/back.png">
        </div>
        <div class="back-face-start face">
        <img class="back-gif" src="./images/tripletsparrot.gif">
        </div>
    </div>`,
    `<div class="card">
        <div onclick="turnCard(this)" class="front-face-start face">
        <img class="front-img" src="./images/back.png">
        </div>
        <div class="back-face-start face">
        <img class="back-gif" src="./images/unicornparrot.gif">
        </div>
    </div>`
];


let cardsNumber = 0;
let selectedCards = [];
askForCardNumber();

function askForCardNumber() {
    cardsNumber = Number(prompt('Com quantas cartas você quer jogar? (4 - 14)'));
    
    while(cardsNumber > 14 || cardsNumber < 4 || cardsNumber % 2 !== 0) {
        cardsNumber = Number(prompt('Com quantas cartas você quer jogar? (4 - 14)'));
    }    
};

let cardsIndex = (cardsNumber / 2) - 1;

//Card Selection
function cardSelection(){
    let i = 0;
    while (i < cardsIndex + 1) {
        selectedCards.push(cardsContainer[i]);
        selectedCards.push(cardsContainer[i]);
        i++;
    };
};
cardSelection();

//Card Shuffle
function shuffle (){
    for (let i = selectedCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [selectedCards[i], selectedCards[j]] = [selectedCards[j], selectedCards[i]];
    };
}
shuffle();

//Sending selectedCards to HTML
function cardSend(){
    const cardsContainer = document.querySelector('.cards-container')
    i = 0;
    while(i < selectedCards.length) {
        cardsContainer.innerHTML += selectedCards[i];
        i++;
    };
};
cardSend();

//Turn Cards and Send them to Array
let turnedCards = [];
let depositCards = [];
const hiddenDiv = document.querySelector('.block-div');

function turnCard(clickedCard) {
    const card = clickedCard.parentNode;
    turnedCards.push(card);
    
    const cardFront = card.querySelector('.front-face-start');
    const cardBack = card.querySelector('.back-face-start');
    
    cardFront.classList.add('turn-front-face');
    cardBack.classList.add('turn-back-face');
    
    let gif1 = turnedCards[0].querySelector(".back-gif").getAttribute("src");
    
    //
    if(turnedCards.length >= 2 && turnedCards.length % 2 == 0) {
        let gif2 = turnedCards[1].querySelector(".back-gif").getAttribute("src");
        hiddenDiv.classList.remove('hidden');

        checkAlike(gif1, gif2);  

    } else {
        hiddenDiv.classList.add('hidden');
    }
};

let counter = 0;
let correctMatches = 0;

//Checking if the Cards are Alike
function checkAlike(gif1, gif2){

    if(gif1 !== gif2) {
        setTimeout(function(){
            turnCardBack();
        }, 1000)
        counter += 2;
        
    } else {
        setTimeout(function() {
            hiddenDiv.classList.add('hidden');
        }, 1000)
        turnedCards = [];
        
        counter += 2;
        correctMatches += 2;
        
        if(correctMatches === cardsNumber){
            setTimeout(function(){
                alert(`Parabéns, você ganhou em ${counter} jogadas!`)
            }, 500)    
        }
    }
}

//Turning Back the Cards that are Not the Same
function turnCardBack(){
    const cardFront1 = turnedCards[0].querySelector('.front-face-start');
    const cardBack1 = turnedCards[0].querySelector('.back-face-start');

    const cardFront2 = turnedCards[1].querySelector('.front-face-start');
    const cardBack2 = turnedCards[1].querySelector('.back-face-start');

    cardFront1.classList.remove('turn-front-face');
    cardBack1.classList.remove('turn-back-face');
    cardFront2.classList.remove('turn-front-face');
    cardBack2.classList.remove('turn-back-face');

    hiddenDiv.classList.add('hidden');
    turnedCards = [];
}








