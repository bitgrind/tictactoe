//business logic
function Game(board,players,turn) {
  this.name = "Tic Tack Toe";
  this.board=board;
  this.players=players;
  this.turn=turn;
}


Game.prototype.gameOver = function (targetIndex) {
  //check if targetIndex is side, middle, or corner. Based on that, use Board.threeInRow method to check certain possibilities.

  //if index is odd aka sidePiece
  if(targetIndex%2 != 0) {
    if(targetIndex == 1){
      var v1 = spaceArray[targetIndex].x;
      var v2 = spaceArray[targetIndex].y;
    } else if(targetIndex == 3){
      var v1 = spaceArray[targetIndex].y;
      var v2 = spaceArray[targetIndex].x;
    } else if(targetIndex == 5){
      var v1 = spaceArray[targetIndex].y;
      var v2 = -spaceArray[targetIndex].x;
    } else if(targetIndex == 7){
      var v1 = spaceArray[targetIndex].x;
      var v2 = -spaceArray[targetIndex].y;
    }
    var corner1 = v1-1;
    var corner2=v1+1;
    var middle = v2+1;
    var far=v2+2;
    console.log("first corner x:"+corner1+","+v2);
    console.log("second corner x:"+corner2+","+v2);
    console.log("middle x:"+v1+","+middle);
    console.log("far x:"+v1+","+far);

    var cord1 = corner1;
    var cord21 = corner1;

    if(board.threeInRow(corner1,Math.abs(v2))){
      board.threeInRow(corner2,Math.abs(v2));
    }
    if (board.threeInRow(v1,Math.abs(middle))){
      board.threeInRow(v1,Math.abs(far));
    }
  }
  console.log('game over running');
  var currentPlayer = "";
  if(turn%2 == 0) {
    currentPlayer = "playerX";
  } else {
    currentPlayer = "playerO";
  }

  if(targetIndex == 0){
    if(spaceArray[1] == currentPlayer && spaceArray[2] == currentPlayer){
      return "game over";
    }
    if(spaceArray[4] == currentPlayer && spaceArray[8] == currentPlayer){
      return "game over";
    }
    if(spaceArray[3] == currentPlayer && spaceArray[6] == currentPlayer){
      return "game over";
    }
  }
  if(targetIndex ==1){
    spaceArray[1] == currentPlayer;
  }
  if(targetIndex == 2){
    spaceArray[1] == currentPlayer;
  }
  if(targetIndex == 3){
    spaceArray[1] == currentPlayer;
  }
  if(targetIndex == 4){
    spaceArray[1] == currentPlayer;
  }
  if(targetIndex == 5){
    spaceArray[1] == currentPlayer;
  }
  if(targetIndex == 6){
    spaceArray[1] == currentPlayer;
  }
  if(targetIndex == 7){
    spaceArray[1] == currentPlayer;
  }
  if(targetIndex == 8){
    spaceArray[1] == currentPlayer;
  }

}

function Board (spaces) {
  this.spaces=spaces;
}

Board.prototype.threeInRow = function (x,y,player) {
  var winCounter = 1;
  //odd turn
  if(turn%2 != 0){
    activePlayer = "player1";
  } else {
    activePlayer = "player2";
  }
  console.log("targetIndex:"+ targetIndex +", OGcord:"+ spaceArray[targetIndex].x + " "+spaceArray[targetIndex].y +", x:" + x + ", y:" + y);

};

Board.prototype.find = function (x,y) {
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
      space.contents = player2.symbol;
  }
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
    $("#gameBoard").append("<div class='col-md-4 boardSpace' value="+i+">x: "+spaceArray[i].x+ ", y:"+spaceArray[i].y+"</div>");
  });

  $('.boardSpace').click(function(){
    targetIndex = $(this).attr('value');
    console.log('click space');
    space.markSpace(spaceArray[targetIndex],turn);
    turn++;
    // check if win, draw, or continue playing. Send gameOver method the space clicked to check from
    game.gameOver(targetIndex);



  });


  $("#setPlayers").submit(function(){
    event.preventDefault();
    player1.name = $("#player1").val();
    player1.symbol = "playerX";
    player2.name = $("#player2").val();
    player2.symbol = "playerO";

  });
});
