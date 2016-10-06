$(document).ready(function(){

  var placesTakenPosition, placesTakenPlayer = [];
  var ex, oh, marker, player = '';
  var circle = '<i class="fa fa-circle-o" aria-hidden="true"></i>';
  var times = '<i class="fa fa-times" aria-hidden="true"></i>';

  //randomly selects whos going to start the game
  //makes gameboard avaiable for playing
  function startGame(){
    ex, oh, marker = '';
    var randomNum = Math.floor((Math.random()*2)+1);

    if(randomNum == 1){
      marker = times;
      player = "X";
      ex = true;
      oh = false;
    }
    else{
      marker = circle;
      player = "O";
      ex = false;
      oh = true;
    }
    $("#whos-turn").html("Player Turn: " + player);

  }

  //button clicked to initiate randomize player start
  $('#new-game').on('click',function(){
    newGame();
    startGame();
    $("#gameboard").show();
    $("#question").hide();
  });

  //game gui
  $('#gameboard').on('click','div',function(){
    var squareId = this.id;
    playerTurn(squareId);
    // squareTaken(squareId);
    console.log(placesTakenPlayer);
    console.log(placesTakenPosition);
    $("#whos-turn").html("Player Turn: " + player);
  });

  //stores marker placement positions
  function storageContainer(squareId){
    var squareIdNum = parseInt(squareId);
    var selectedId = '#' + squareId;
    $(selectedId).html(marker);
    placesTakenPlayer.splice(squareIdNum,1,player);
    placesTakenPosition.push(squareIdNum);
  }

  //switches which player is up
  function playerTurn(squareId){
      console.log("before change:" + player);
      if(oh == true){
        marker = circle;
        storageContainer(squareId);
        //player switch
        player = "X";
        oh = false;
        ex = true;
      }
      else{
        marker = times;
        storageContainer(squareId);
        //player switch
        player = "O";
        oh = true;
        ex = false;
      }
  }

  //clears game board and storage
  function newGame(){
    for(i in placesTakenPosition){
      // console.log(placesTakenPosition[i]);
      var foo = "#" + placesTakenPosition[i];
      $(foo).html("")
    }
    placesTakenPosition = [];
    placesTakenPlayer = ["","","","","","","","",""];
    ex, oh, marker, player = '';
  }

  //decides who won the game
  function chickenDinner(){

  }

  //checks if square was taken
  // function squareTaken(squareId){
  //   var selectedId = '#' + squareId;
  //   console.log(selectedId);
  //
  //   for(var i in placesTakenPosition){
  //     if(placesTakenPosition[i] != squareId){
  //       console.log('square taken');
  //     }
  //     else{
  //       placesTakenPosition.push(this.id);
  //       console.log("not taken");
  //       $(selectedId).html(marker);
  //     }
  //   }
  // }




});


//push to start game
  //center square button
  //starts or clears counter to 0

//counter 0 = O || <i class="fa fa-circle-o" aria-hidden="true"></i>
//counter 1 = X || <i class="fa fa-times" aria-hidden="true"></i>
