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

//prototype method
Player.prototype.dieRoll = function () {
  let firstRoll = this.roll = Math.floor(Math.random() * 6 + 1);
  this.turn += 1;
  if(firstRoll === 1) {
      this.tempScore = 0;
      console.log("You lose!");
  } else if (firstRoll > 1) {
      this.tempScore += firstRoll;
      console.log(firstRoll);
  }
}
Player.prototype.hold = function () {
  this.totalScore += this.tempScore;
  this.tempScore = 0;
  this.roll = 0;
  this.turn = 0; 
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
  });
  $('#refresh').click(function() {
    location.reload();
  });

});