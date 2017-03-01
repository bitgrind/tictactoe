//business logic
function Game (board,players,turn) {
  this.name = "Tic Tack Toe";
  this.board=board;
  this.players=[];
  this.turn=turn;
}

Game.prototype.gameOver = function () {
  return status;
};

function Board (spaces) {
  this.spaces=[];
}

Board.prototype.threeInRow = function () {
  // return win or draw;
};

Board.prototype.find = function () {
  // return space x y
};

function Space (x,y,contents) {
  this.x= x;
  this.y= y;
  this.contents=contents;
}

Space.prototype.mark = function () {
  // return lets player mark a space;
};

Space.prototype.markedBy = function () {
  // return which player marked space;
};

function Player(name,symbol) {
  this.name = name;
  this.symbol = symbol;
}

var game = new Game();
var board = new Board();
var turn = 1;
var player1 = new Player();
var player2 = new Player();

console.log("game: "+game);
console.log("board: "+board);
console.log("player1: "+player1);
console.log("player2: "+player2);

for(x=1;x<4;x++){
  for(y=1;y<4;y++){
    var space = new Space(x,y,null);
    console.log("x: "+x+", y: " + y + ", new space: " + space);
  }
}



//user logic
$(function(){

  $("#setPlayers").submit(function(){
    event.preventDefault();
    $("#player1").val();
    Game(newBoard, players, turn);

  });
});
