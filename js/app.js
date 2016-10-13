$(document).ready(function(){

  var placesTakenPosition, placesTakenPlayer, placesO, placesX = [];
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
    chickenDinner();
    // squareTaken(squareId);
    console.log("Players placement: ");
    console.log(placesTakenPlayer);
    console.log("O's: ");
    console.log(placesO);
    console.log("X's: ");
    console.log(placesX);
    // console.log(placesTakenPosition);
    $("#whos-turn").html("Player Turn: " + player);
  });

  //stores marker placement positions
  function storageContainer(squareId){
    var squareIdNum = parseInt(squareId);
    var selectedId = '#' + squareId;
    $(selectedId).html(marker);
    placesTakenPlayer.splice(squareIdNum,1,player);
    placesTakenPosition.push(squareIdNum);
    if(player == "O"){
      placesO.splice(squareIdNum,1,squareIdNum);
    }
    else if(player == "X"){
      placesX.splice(squareIdNum,1,squareIdNum);
    }
  }

  //switches which player is up
  function playerTurn(squareId){
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
    placesO = ["","","","","","","","",""];
    placesX = ["","","","","","","","",""];
    ex, oh, marker, player = '';
  }

  //decides who won the game
  function chickenDinner(){
    var winningCombos = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
                          [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ];
    //split out placesO & placesX into
    if(winningCombos[0] == placesO)


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
