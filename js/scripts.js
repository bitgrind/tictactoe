//business logic
function Game(board,players,turn) {
  this.name = "Tic Tack Toe";
  this.board=board;
  this.players=players;
  this.turn=turn;
}



Game.prototype.gameOver = function () {
  return status;
};

function Board (spaces) {
  this.spaces=spaces;
}

Board.prototype.threeInRow = function () {
  // return win or draw;
};

Board.prototype.find = function () {
  // return space x y
};

function Space(x,y,contents) {
  this.x= x;
  this.y= y;
  this.contents=contents;
}

Space.prototype.markSpace = function(space, turn) {
  if(turn == 1) {
    if (space.checkSpace(space) == null) {
      space.contents = player1.symbol;
    }
    //
  } else {

  }
  return
  // determine which player (use turn), determine target space, insert symbol into content
};

Space.prototype.checkSpace = function(space) {
  return space.contents;
};

function Player(name,symbol) {
  this.name = name;
  this.symbol = symbol;
}

var board = new Board();
var turn = 1;
var player1 = new Player();
var player2 = new Player();
var players = [player1,player2];
var spaceArray = [];

for(y=1;y<4;y++){
  for(x=1;x<4;x++){
    var space = new Space(x,y,null);
    spaceArray.push(space);
  }
}

var game = new Game(board, players, turn);
var board = new Board(spaceArray);


//user logic
$(function(){

  spaceArray.forEach(function(elem,i){
    console.log(i);
    $("#gameBoard").append("<div class='col-md-4 boardSpace' value="+i+">x: "+x+ ", y:"+y+"</div>");
  });

  $('.boardSpace').click(function(){
    console.log($(this).attr('value'));
  });

  $("#setPlayers").submit(function(){
    event.preventDefault();
    player1.name = $("#player1").val();
    player1.symbol = "playerX";
    player2.name = $("#player2").val();
    player2.symbol = "playerO";

    for(t=1;t<20;t++) {
      var isEven = t%2;
      if(isEven != 0){
        //this is an odd
        space.markSpace(spaceArray[0],turn);
      }else{
        //this is an even

      }

    }

  });
});
