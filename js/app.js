$(document).ready(function(){

  var column1, column2, column3 = [];
  var rowA, rowB, rowC = [];
  var ex = false;
  var oh = true;
  var marker = circle;
  var circle = '<i class="fa fa-circle-o" aria-hidden="true"></i>';
  var times = '<i class="fa fa-times" aria-hidden="true"></i>';


  $('#game-board').on('click','div',function(){
    var selectedId = '#' + this.id;
    console.log(selectedId);
    $(selectedId).html(circle);
    $(selectedId).toggle(oh);
    console.log(oh);
  });

  function playerTurn(){
      if(oh == true){
        marker = circle;
      }
      else{
        marker = times;
      }
  }


});


//push to start game
  //center square button
  //starts or clears counter to 0

//counter 0 = O || <i class="fa fa-circle-o" aria-hidden="true"></i>
//counter 1 = X || <i class="fa fa-times" aria-hidden="true"></i>
