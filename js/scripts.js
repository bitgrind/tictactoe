//Objects - players, board, spaces, game
function Player(xORo,name,spaces){
  this.xORo = xORo;
  this.name = name,
  this.spaces = spaces[];
}

function Space(xCoordinate, yCoordinate, whoHere){
  this.xCoordinate=xCoordinate;
  this.yCoordinate=yCoordinate;
  this.whoHere=whoHere;
}

function Board(spaces, threeInRow){
  this.allSpaces = allSpaces[];
  this.threeInRow = threeInRow;
}

function Game(players, turn, board){
  this.players = players[];
  this.turn=turn;
  this.board=board;
}
$(document).ready(function(){

});
