var s1 = document.getElementById('1');
var s2 = document.getElementById('2');
var s3 = document.getElementById('3');
var s4 = document.getElementById('4');
var s5 = document.getElementById('5');
var s6 = document.getElementById('6');
var s7 = document.getElementById('7');
var s8 = document.getElementById('8');
var s9 = document.getElementById('9');
var xTurn = true;
var xColor = 'red';
var yColor = 'blue';
var allSquares = document.getElementsByClassName("btn");
for(i = 0; i < allSquares.length; i++){
  allSquares[i].addEventListener('click', function(e){
      // console.log('this button was clicked...');
      // console.log(e.target);
      displayValue = e.target.innerHTML;
      // console.log(displayValue);

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
