//CURRENT CODE 02.21.22
function Player(playerName) {
  this.roll = 0;
  this.tempScore = 0;
  this.totalScore = 0;
  this.turn = 0;
  this.playerName = playerName;
}

let player1 = new Player();
let player2 = new Player();

//prototype method ONLY WORKS IN CONSOLE
Player.prototype.name = function () {
  const nameInput=$("input#player1").val();
  this.playerName = nameInput;
}

Player.prototype.dieRoll = function () {
  this.roll = Math.floor(Math.random() * 6 + 1);
  this.turn += 1;
  if(this.roll === 1) {
      this.tempScore = 0;
      console.log("You lose!");
  } else if (this.roll > 1) {
      this.tempScore += this.roll;
      console.log(this.roll);
  }
}

Player.prototype.hold = function () {
  this.totalScore += this.tempScore;
  this.tempScore = 0;
  this.roll = 0;
  this.turn = 0; 
}

Player.prototype.winner = function () {
  if (this.totalScore >= 20) {
    alert(this.playerName + " You won! Wow!");
  }
}

//UI interface
$(document).ready(function() {
  $("#buttonRoll").click(function(event) {
    event.preventDefault();
    player1.name();
    $(".player1").text(player1.playerName);
    $("#weeknd").show()
    player1.dieRoll();
    $("#tempScore").text("Your temporary score: " + player1.tempScore);
    $("#dieRoll").text("Your current die roll: " + player1.roll);
    
  });
  $("#buttonHold").click(function(event) {
    player1.hold();
    $("#totalScore").text("Your total score: " + player1.totalScore);
    player1.winner();
  });
  $('#refresh').click(function() {
    location.reload();
  });
});