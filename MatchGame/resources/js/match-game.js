var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
  var cardValuesInOrder = [];
  for (var i = 1; i < 9; i++) {
    cardValuesInOrder.push(i);
    cardValuesInOrder.push(i);
  }
  var cardValues = [];
  while (cardValuesInOrder.length > 0) {
    var removedItem = cardValuesInOrder.splice(Math.floor(Math.random() * cardValuesInOrder.length), 1);
    cardValues.push(removedItem);
  } return cardValues;
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {
  var $game = $('.game').empty();
  for (var i = 0; i < cardValues.length; i++) {
    var $card = $('<div class="col-xs-3 card"></div>');
  }
};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
