let cardsNumber;
let checker;

askForCardNumber();
checkNumber();

//Valid card number check
function askForCardNumber() {
    cardsNumber = prompt('Com quantas cartas você quer jogar?');
    Number(cardsNumber);
    if(cardsNumber <= 14 && cardsNumber >= 4 && cardsNumber % 2 == 0) {
        checker = true;
    }
}
function checkNumber() {
    while (checker !== true) {
        askForCardNumber();
    }
}


