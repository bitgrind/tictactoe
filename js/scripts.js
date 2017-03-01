//business logic
function Game (board,players,turn) {
  this.board=board;
  this.players=[];
  this.turn=turn;
}

Game.prototype.status = function () {
  return status;
};

function Board (spaces) {
  this.spaces=[];
}

Board.prototype.threeInRow = function () {
  return win or draw;
};

Board.prototype.find = function () {
  return space x y
};

function Space (x,y,contents) {
  this.x= x;
  this.y= y;
  this.contents=contents;
}

Space.prototype.mark = function () {
  return lets player mark a space;
};

Space.prototype.markedBy = function () {
  return which player marked space;
};
