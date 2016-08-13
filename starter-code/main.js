var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [ ];
var board = document.getElementById('game-board');

function createBoard () {
	for (var i=0; i<cards.length; i++) {
	var cardDiv = document.createElement('div');
	cardDiv.className = 'card';
	cardDiv.setAttribute('data-card', cards[i]);
	board.appendChild(cardDiv);
	board.appendChild(cardDiv);
    cardDiv.addEventListener('click', isTwoCards);
	}
}
function isTwoCards() {
  cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='https://a.fsdn.com/con/app/proj/vector-cards/screenshots/KH.png'>"; 
	} else {
		this.innerHTML = "<img src='http://www.madore.org/~david/images/cards/english/queen-hearts.png'>"; 
	}
    if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
}
function isMatch(cards) {
    if (cards[0] === cards[1]) {
    alert("You found a match! Woohoo");
    } else {
    alert("Sorry, try again. Whomp whomp");
    }
}
function playAgain() {
	location.reload();
}
createBoard();