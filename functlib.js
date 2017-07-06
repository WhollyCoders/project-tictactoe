
function current_turn(xTurn){
  if(xTurn === true){
    return 'O';
  }else{
    return 'X';
  }
}

function check_row_one(){
  if(s1.innerHTML !== ''){
    if((s1.innerHTML === s2.innerHTML) && (s1.innerHTML === s3.innerHTML)){
      return true;
    }else{
      return false;
    }
  }else{
    return false;
  }
}
function check_row_two(){
  if(s4.innerHTML !== ''){
    if((s4.innerHTML === s5.innerHTML) && (s4.innerHTML === s6.innerHTML)){
      return true;
    }else{
      return false;
    }
  }else{
    return false;
  }
}
function check_row_three(){
  if(s7.innerHTML !== ''){
    if((s7.innerHTML === s8.innerHTML) && (s7.innerHTML === s9.innerHTML)){
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
  if(s1.innerHTML !== ''){
    if((s1.innerHTML === s4.innerHTML) && (s1.innerHTML === s7.innerHTML)){
      return true;
    }else{
      return false;
    }
  }else{
    return false;
  }
}

function check_column_two(){
  if(s2.innerHTML !== ''){
    if((s2.innerHTML === s5.innerHTML) && (s2.innerHTML === s8.innerHTML)){
      return true;
    }else{
      return false;
    }
  }else{
    return false;
  }
}

function check_column_three(){
  if(s3.innerHTML !== ''){
    if((s3.innerHTML === s6.innerHTML) && (s3.innerHTML === s9.innerHTML)){
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
  if(s1.innerHTML !== ''){
    if((s1.innerHTML === s5.innerHTML) && (s1.innerHTML === s9.innerHTML)){
      return true;
    }else{
      return false;
    }
  }else{
    return false;
  }
}
function check_diagonal_two(){
  if(s3.innerHTML !== ''){
    if((s3.innerHTML === s5.innerHTML) && (s3.innerHTML === s7.innerHTML)){
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

function check_for_win(){
  if(horizontal_check() || vertical_check() || diagonal_check()){
    var winner = current_turn(xTurn);
    setTimeout(function(){ alert('The WINNER is '+winner+'!!!');}, 100);
    setTimeout(function(){ clear_board();}, 100);
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
