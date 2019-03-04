
// BUSINESS LOGIC 
var pigGame = {
  player1Score: 0,
  player2Score: 0,
  playerUp: 1,
  turnScore: 0,
};

function dieRoll () {
  die1 = Math.floor(Math.random()*6) +1;
  return die1;
}

var playerRoll = function() {
  var roll = dieRoll();
  document.getElementById('dice-1').src='images/dice-'+roll+'.png';
  if(roll ===1){
    pigGame.turnScore = 0;
    alertEndTurn();
    switchPlayer();
  } else {
    pigGame.turnScore +=roll;
    if (pigGame.playerUp === 1) {
      if (pigGame.turnScore + pigGame.player1Score >= 100) {
        alertWinner(1);
      }
    } else if (pigGame.turnScore + pigGame.player2Score >= 100) {
      alertWinner(2);
  }
  }
  return roll;
}
function holdThePig() {
  var currentPlayer = pigGame.playerUp;
  if (currentPlayer ===1) {
    pigGame.player1Score += pigGame.turnScore;
  } else {
    pigGame.player2Score += pigGame.turnScore;
  }
  pigGame.turnScore = 0;
  switchPlayer();
}


function switchPlayer () {
  if (pigGame.playerUp === 1) {
    $("#player1Button").hide();
    $("#player2Button").show();
    pigGame.playerUp = 2;

  } else {
    $("#player2Button").hide();
    $("#player1Button").show();
    pigGame.playerUp = 1;

  }
}

function resetGame() {
  pigGame.player1Score = 0;
  pigGame.player2Score = 0;
  pigGame.playerUp = 1;
  pigGame.turnScore = 0;
}


// USER LOGIC 


function alertEndTurn(){
  alert("ooops :( .....\n..you rolled a\n....... 1.....\n...SO you score a 0");
  $(".playerStatus").text(pigGame.playerUp);
}

function alertWinner(playerNumber) {
  alert("Player " + playerNumber + "WINS");
  resetGame();
  $(".gameStatusDisplay").text(0);
}

$(document).ready(function() {
 $(".rollPig").click(function() {
    pigResult = playerRoll();
    
    $(".rollResult").text(pigResult);
    $(".turnScore").text(pigGame.turnScore);

  });

  $(".holdPig").click(function(){
    holdThePig();
    $("rollResult").text("");
    $(".player1Score").text(pigGame.player1Score);
    $(".player2Score").text(pigGame.player2Score);
    $(".playerStatus").text(pigGame.playerUp);
  });
});