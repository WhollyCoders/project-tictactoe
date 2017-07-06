var allSquares = document.getElementsByClassName("btn");
var audio = new Audio('./sound/trumpet.wav');
var xTurn = true;
var xColor = 'red';
var yColor = 'blue';

for(i = 0; i < allSquares.length; i++){
  allSquares[i].addEventListener('click', function(e){
      displayValue = e.target.innerHTML;
      if(displayValue !== 'X' && displayValue !== 'O'){
        if(xTurn){
          e.target.style.backgroundColor = xColor;
          e.target.innerHTML = 'X';
          xTurn = false;
          check_for_win();
        }else{
          e.target.style.backgroundColor = yColor;
          e.target.innerHTML = 'O';
          xTurn = true;
          check_for_win();
        }
      }
  });
}
