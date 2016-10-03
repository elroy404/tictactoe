$(document).ready(function(){

  var column1, column2, column3 = [];
  var rowA, rowB, rowC = [];
  var placesTaken = [];
  var ex, oh, marker = '';
  var circle = '<i class="fa fa-circle-o" aria-hidden="true"></i>';
  var times = '<i class="fa fa-times" aria-hidden="true"></i>';


  //randomly selects whos going to start the game
  function startGame(){
    ex, oh, marker = '';
    var randomNum = Math.floor((Math.random()*2)+1);

    if(randomNum == 1){
      marker = times;
      ex = true;
      oh = false;
    }
    else{
      marker = circle;
      ex = false;
      oh = true;
    }
    console.log("Who goes first: " + marker);
  }

  //button clicked to initiate randomize player start
  $('#new-game').on('click',function(){
    startGame();
  });

  //game gui
  $('#game-board').on('click','div',function(){
    playerTurn();
    var squareId = this.id;


    placesTaken.push(this.id);
    console.log(placesTaken);

    squareTaken(squareId);
  });

  //switches which player is up
  function playerTurn(){
      if(oh == true){
        marker = circle;
        oh = false;
        ex = true;
      }
      else{
        marker = times;
        oh = true;
        ex = false;
      }
  }

  //checks if square was taken
  function squareTaken(squareId){
    var selectedId = '#' + squareId;
    console.log(selectedId);

    for(var i in placesTaken){
      if(placesTaken[i] === squareId){
        console.log('square taken');

      }
      else{
        console.log("not taken");
        $(selectedId).html(marker);
      }
    }
  }




});


//push to start game
  //center square button
  //starts or clears counter to 0

//counter 0 = O || <i class="fa fa-circle-o" aria-hidden="true"></i>
//counter 1 = X || <i class="fa fa-times" aria-hidden="true"></i>
