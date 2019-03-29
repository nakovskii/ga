const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
const deck = [];
let player1Card = null;
let player2Card = null;

function buildDeck(arr1,arr2) {
	for (let i = 0; i < arr1.length; i++) {
		for (let j= 0; j < arr2.length; j++){
			let card = {num:arr1[i],suit: arr2[j],value: i};
				deck.push(card);
		}
	}
	// console.log(deck);
	// return deck;
}
buildDeck(values,suits);
console.log(deck);

function dealCardsToPlayers() {
	player1Card = deck.splice([Math.floor(Math.random()* deck.length)],1);
	player2Card = deck.splice([Math.floor(Math.random()* deck.length)],1);
  	console.log(player1Card);
  	console.log(player2Card);
}


function announceCards() {
	console.log(`Player 1 is showing a ${player1Card[0].num} of ${player1Card[0].suit}.`);
	console.log(`Player 2 is showing a ${player2Card[0].num} of ${player2Card[0].suit}.`);
}

function playGame() {
	dealCardsToPlayers();
	announceCards();
	// announceWinner();
	// returnCardsToDeck();
  
  }
  
  playGame();
