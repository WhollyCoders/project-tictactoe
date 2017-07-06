
function current_turn(xTurn){
  if(xTurn === true){
    return 'O';
  }else{
    return 'X';
  }
}

function get_square(squareNumber){
  return allSquares[squareNumber - 1];
}

function check_row_one(){
  if(get_square(1).innerHTML !== ''){
    if((get_square(1).innerHTML === get_square(2).innerHTML) && (get_square(1).innerHTML === get_square(3).innerHTML)){
      return true;
    }else{
      return false;
    }
  }else{
    return false;
  }
}
function check_row_two(){
  if(get_square(4).innerHTML !== ''){
    if((get_square(4).innerHTML === get_square(5).innerHTML) && (get_square(4).innerHTML === get_square(6).innerHTML)){
      return true;
    }else{
      return false;
    }
  }else{
    return false;
  }
}
function check_row_three(){
  if(get_square(7).innerHTML !== ''){
    if((get_square(7).innerHTML === get_square(8).innerHTML) && (get_square(7).innerHTML === get_square(9).innerHTML)){
      return true;
    }else{
      return false;
    }
  }else{
    return false;
  }
}

function check_rows(){
  if(check_row_one() || check_row_two() || check_row_three()){
    return true;
  }else{
    return false;
  }
}

function check_column_one(){
  if(get_square(1).innerHTML !== ''){
    if((get_square(1).innerHTML === get_square(4).innerHTML) && (get_square(1).innerHTML === get_square(7).innerHTML)){
      return true;
    }else{
      return false;
    }
  }else{
    return false;
  }
}

function check_column_two(){
  if(get_square(2).innerHTML !== ''){
    if((get_square(2).innerHTML === get_square(5).innerHTML) && (get_square(2).innerHTML === get_square(8).innerHTML)){
      return true;
    }else{
      return false;
    }
  }else{
    return false;
  }
}

function check_column_three(){
  if(get_square(3).innerHTML !== ''){
    if((get_square(3).innerHTML === get_square(6).innerHTML) && (get_square(3).innerHTML === get_square(9).innerHTML)){
      return true;
    }else{
      return false;
    }
  }else{
    return false;
  }
}

function check_columns(){
  if(check_column_one() || check_column_two() || check_column_three()){
    return true;
  }else{
    return false;
  }
}

function check_diagonal_one(){
  if(get_square(1).innerHTML !== ''){
    if((get_square(1).innerHTML === get_square(5).innerHTML) && (get_square(1).innerHTML === get_square(9).innerHTML)){
      return true;
    }else{
      return false;
    }
  }else{
    return false;
  }
}
function check_diagonal_two(){
  if(get_square(3).innerHTML !== ''){
    if((get_square(3).innerHTML === get_square(5).innerHTML) && (get_square(3).innerHTML === get_square(7).innerHTML)){
      return true;
    }else{
      return false;
    }
  }else{
    return false;
  }
}

function check_diagonals(){
  if(check_diagonal_one() || check_diagonal_two()){
    return true;
  }else{
    return false;
  }
}

function horizontal_check(){
  if(check_rows()){
    return true;
  }else{
    return false;
  }
}

function vertical_check(){
  if(check_columns()){
    return true;
  }else{
    return false;
  }
}

function diagonal_check(){
  if(check_diagonals()){
    return true;
  }else{
    return false;
  }
}

function you_win(winner){
  audio.play();
  console.log('Start Alert...');
  setTimeout(function(){
    alert('The WINNER is '+winner+'!!!');
  }, 1200);
}

function winning_alert(winner){
  setTimeout(function(){
    alert('The WINNER is '+winner+'!!!');
  }, 1600);
}

// var audio = new Audio('audio_file.mp3');
// audio.play();

function check_for_win(){
  if(horizontal_check() || vertical_check() || diagonal_check()){
    var winner = current_turn(xTurn);
    // setTimeout(function(){ alert('The WINNER is '+winner+'!!!');}, 50);
    you_win(winner);
    setTimeout(function(){ clear_board();}, 1600);
  }else{
    return false;
  }
}

function clear_board(){
  for(i = 0; i < allSquares.length; i++){
    allSquares[i].innerHTML = '';
    allSquares[i].style.backgroundColor = 'white';
  }
}


// Override Alert
// window.alert = function(title, message){
//     var myElementToShow = document.getElementById("someElementId");
//     myElementToShow.innerHTML = title + "</br>" + message;
// }
