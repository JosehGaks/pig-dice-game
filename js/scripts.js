<<<<<<< HEAD
// BUSINESS LOGIC
let rollDice = {
=======

// BUSINESS LOGIC
var pigGame = {
>>>>>>> bcd2bc059424be24a65b5b6151c35b0154690170
  player1Score: 0,
  player2Score: 0,
  playerUp: 1,
  turnScore: 0,
};

function diceRoll () {
  die1 = Math.floor(Math.random()*6) +1;
  return die1;
}


function holdThePig() {
<<<<<<< HEAD
  let currentPlayer = rollDice.playerUp;
  if (currentPlayer ===1) {
    rollDice.player1Score += rollDice.turnScore;
  } else {
    rollDice.player2Score += rollDice.turnScore;
  }
  rollDice.turnScore = 0;
  switchPlayer();
}

let playerRoll = function() {
  let roll = diceRoll();
=======
  var currentPlayer = pigGame.playerUp;
  if (currentPlayer ===1) {
    pigGame.player1Score += pigGame.turnScore;
  } else {
    pigGame.player2Score += pigGame.turnScore;
  }
  pigGame.turnScore = 0;
  switchPlayer();
}

var playerRoll = function() {
  var roll = dieRoll();
>>>>>>> bcd2bc059424be24a65b5b6151c35b0154690170
  document.getElementById('dice-1').src='images/dice-'+roll+'.png';
  if(roll ===1){
    rollDice.turnScore = 0;
    alertEndTurn();
    switchPlayer();
  } else {
    rollDice.turnScore +=roll;
    if (rollDice.playerUp === 1) {
      if (rollDice.turnScore + rollDice.player1Score >= 100) {
        alertWinner(1);
      }
    } else if (rollDice.turnScore + rollDice.player2Score >= 100) {
      alertWinner(2);
    }
  }
  return roll;

}
function switchPlayer () {
  if (rollDice.playerUp === 1) {
    $("#player1Button").hide();
    $("#player2Button").show();
    rollDice.playerUp = 2;

  } else {
    $("#player2Button").hide();
    $("#player1Button").show();
    rollDice.playerUp = 1;

  }

}

function resetGame() {
  rollDice.player1Score = 0;
  rollDice.player2Score = 0;
  rollDice.playerUp = 1;
  rollDice.turnScore = 0;
}


// USER LOGIC

function alertEndTurn(){
  alert("ooops :( .....\n..you rolled a\n....... 1.....\n...SO you score a 0");
  $(".playerStatus").text(rollDice.playerUp);
}

function alertWinner(playerNumber) {
  alert("Player " + playerNumber + "WINS");
  resetGame();
  $(".canvas").text(0);
}

$(document).ready(function() {
  $(".rollPig").click(function() {
    pigResult = playerRoll();
<<<<<<< HEAD
=======

>>>>>>> bcd2bc059424be24a65b5b6151c35b0154690170
    $(".rollResult").text(pigResult);
    $(".turnScore").text(rollDice.turnScore);
  });

  $(".holdPig").click(function(){
    holdThePig();
    $("rollResult").text("");
    $(".player1Score").text(rollDice.player1Score);
    $(".player2Score").text(rollDice.player2Score);
  });
});
