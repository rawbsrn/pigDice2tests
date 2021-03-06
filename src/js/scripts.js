import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import $ from 'jquery';

//CURRENT CODE 02.21.22
export function Player(playerName) {
  this.roll = 0;
  this.tempScore = 0;
  this.totalScore = 0;
  this.turn = 0;
  this.playerName = playerName;
}

let player1 = new Player();
let player2 = new Player();

//prototype method ONLY WORKS IN CONSOLE
Player.prototype.name1 = function () {
  const nameInput=$("input#player1").val();
  // const nameInput2=$("input#player2").val();
  player1.playerName = nameInput;
}

//prototype method ONLY WORKS IN CONSOLE
Player.prototype.name2 = function () {
  const nameInput2=$("input#player2").val();
  player2.playerName = nameInput2;
}

Player.prototype.dieRoll = function () {
  this.roll = Math.floor(Math.random() * 6 + 1);
  this.turn += 1;
  if(this.roll === 1) {
      return this.tempScore = 0;
  } else if (this.roll > 1) {
      return this.tempScore += this.roll;
  }
}

Player.prototype.hold = function () {
  this.totalScore += this.tempScore;
  this.tempScore = 0;
  this.roll = 0;
  this.turn = 0;
  return this.totalScore;
}

Player.prototype.winner = function () {
  if (this.totalScore >= 100) {
    alert(this.playerName + " You won! Wow!");
  }
  return this.totalScore;
}



// let audio = new Audio("http://www.ringelkater.de/Sounds/2geraeusche_gegenst/wuerfelbecher.wav");

//UI interface
$(document).ready(function() {
  $("#buttonRoll1").click(function(event) {
    event.preventDefault();
    player1.name1();
    $(".player1").text(player1.playerName);
    $("#weeknd").show()
    player1.dieRoll();
    $("#tempScore1").text("Your temporary score: " + player1.tempScore);
    $("#dieRoll1").text("Your current die roll: " + player1.roll);
  });
  $("#buttonHold1").click(function(event) {
    player1.hold();
    $("#totalScore1").text("Your total score: " + player1.totalScore);
    player1.winner();
  });
  $("#buttonRoll2").click(function(event) {
    event.preventDefault();
    player2.name2();
    $(".player2").text(player2.playerName);
    $("#migos").show()
    player2.dieRoll();
    $("#tempScore2").text("Your temporary score: " + player2.tempScore);
    $("#dieRoll2").text("Your current die roll: " + player2.roll);
  });
  $("#buttonHold2").click(function(event) {
    player2.hold();
    $("#totalScore2").text("Your total score: " + player2.totalScore);
    player2.winner();
  });
  $('#refresh').click(function() {
    location.reload();
  });
});