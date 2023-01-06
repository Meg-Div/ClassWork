//creating two elements for each player
const dealerHand = document.querySelector("#dealer-hand");

const deck = [];

let fishTank1 = [
  "./img/coral.png",
  "./img/fish.png",
  "./img/penguin.png",
  "./img/peacock.png",
  "./img/shell.png",
];

let fishTank2 = [
  "./img/coral.png",
  "./img/fish.png",
  "./img/penguin.png",
  "./img/peacock.png",
  "./img/shell.png",
];

const shuffleArray = () => {
  fishTank1.sort(() => 0.5 - Math.random());
  fishTank2.sort(() => 0.5 - Math.random());
};

//creates first face up card
const firstDealerCard = () => {
  shuffleArray();

  for (let card of fishTank1) {
    let dealerCard = document.createElement("img");
    dealerCard.src = card;
    dealerCard.addEventListener("click", () => turn());
    dealerCard.classList = "dealer-back";
    dealerHand.append(dealerCard);
  }
  fishTank1.shift();

  for (let card of fishTank2) {
    let dealerCard = document.createElement("img");
    dealerCard.src = card;
    dealerCard.addEventListener("click", () => {});
    dealerCard.classList = "dealer-back";
    dealerHand.append(dealerCard);
  }
  fishTank2.shift();
};

//flips the cards over at end
const turn = (e) => {
  for (const card of dealerHand.childNodes) {
    if (card.localName === "img") {
      card.classList = "card";
      console.log;
    }
  }
};

//deal button
const onDeal = () => {
  firstDealerCard();
};

window.addEventListener("DOMContentLoaded", () => {});
