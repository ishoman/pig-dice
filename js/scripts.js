// Player Object
function Player(name) {
  this.playerName = name;
  this.playerScore = [];
  this.turnScore = 0;
  this.totalPlayerScore = 0;
  this.rollArray = [];
}

// Player Prototypes
Player.prototype.diceRoll = function () {
  var roll = Math.floor(Math.random() * 6 + 1);
  var counter = 0;
  if (roll === 1) {
    console.log("YOU ROLLED A 1");
    this.rollArray = [];
    this.turnScore = 0;
    counter = 0;
  } else {
    this.rollArray.push(roll);
    if (this.totalPlayerScore >= 100) {
      return "You Win!"
    } else {
      // this.rollArray.map(function(num) {
      //   counter += num
      // });
      for (i = 0; i < this.rollArray.length; i++) {
        counter += this.rollArray[i]
      }
      console.log(this.rollArray, "ROLL ARRAY");
      this.turnScore = counter;
    }
  }
};

Player.prototype.hold = function() {
  // Hold button function
  var counter = 0;
  if (this.totalPlayerScore >= 100) {
    alert("You Win!");
  } else {
    this.playerScore.push(this.turnScore);

    this.playerScore.map(function(num) {
      counter += num;
    });
    this.totalPlayerScore = counter;
  }
  console.log(this.playerScore, "THIS IS THE PLAYERSCORE");
};


// User Interface Logic
$(function() {
  $("#player").submit(function(event) {
    event.preventDefault();
    var playerName = $("#playerName").val();
    var playerOne = new Player(playerName);
    $(this).hide();
    $("#gameBoard").show();
    $("h1#userName").text(playerName);

    // Roll Click
    $("#roll").click(function(){
      playerOne.diceRoll();
      console.log(playerOne.turnScore, "CURRENT TURN SCORE");
    });


    $("#hold").click(function() {
      playerOne.hold();
      if(playerOne.totalPlayerScore >= 100) {
        $("#win").text(playerOne.playerName);
        $(".win").show();
      }
      $("#playerScore").text(playerOne.totalPlayerScore);
      playerOne.turnScore = 0;
      playerOne.rollArray = [];
    });
  });
});
