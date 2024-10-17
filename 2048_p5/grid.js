function blankGrid(){
  return [
          [ 0 , 0 , 0 , 0 ],
          [ 0 , 0 , 0 , 0 ],
          [ 0 , 0 , 0 , 0 ],
          [ 0 , 0 , 0 , 0 ]
  ];
}

function copyGrid(grid){
  let copy = blankGrid();
  for( let i = 0 ; i < 4 ; i++){
    for( let j = 0 ; j <4 ; j++){
      copy[i][j] = grid[i][j];
    }
  }
  return copy;
}

function changes( a , b ){ 
  for( let i = 0 ; i < 4 ; i++){
    for( let j = 0 ; j <4 ; j++){
      if( a[i][j] != b[i][j] ) 
        return true;
    }
  }
  return false;
}

function addNumber(){
  let options = [];
  for( let i = 0 ; i < 4 ; i++){
    for( let j = 0 ; j <4 ; j++){
      if (grid[i][j] === 0){
        options.push({
          x: i,
          y: j
        });
      }
    }
  }
  
  if(options.length>0){
    let spot = random(options);
    let r = random(1);
    grid[spot.x][spot.y] = r > 0.10 ? 2:4;
  }
  
}

function flip( grid ){
  for( let i = 0; i < 4; i++){
    grid[i].reverse();
  }
  return grid;
}

function rotateGrid(grid){
  let newGrid = blankGrid();
  for( let i = 0 ; i < 4 ; i++){
    for( let j = 0 ; j <4 ; j++){
      newGrid[i][j] = grid[j][i];
    }
  }
  return newGrid;
}

//sliding to the right
function operate( grid ){
  
  for(let i =0; i < 4 ; i++){
    grid[i] = slide( grid[i] );
    grid[i] = combine( grid[i] );
    grid[i] = slide( grid[i] );
  }
      
      return grid;
  
}

function slide( row ){
  let arr = row.filter( val => val );
  let missing = 4 - arr.length;
  let zeros = Array( missing ).fill(0);
  arr = zeros.concat( arr );
  return arr;
}

function combine( row ){
  
  for( let i = 3; i >= 0; i--){
    let a = row[i];
    let b = row[i-1];
    if( a == b){
      row[i] = a+b;
      row[i-1] = 0;  
      score+=(a+b);
      
    }
  }return row;
}

function gameOver( grid ){
  oldScore = score;
  let count = 0;
  let check = copyGrid( grid );
  
  
  //right check
  check = operate( check );
  if ( !changes( check, grid ) ) 
    count++;
  //left check
  check = copyGrid( grid );
  check = flip( check );
  check = operate( check );
  check = flip( check );  
  if( !changes( check, grid ) ) 
    count++;
  //down check
  check = copyGrid( grid );
  check = rotateGrid( check );
  check = operate( check );
  check = rotateGrid( check );  
  if( !changes( check, grid ) ) 
    count++;
  //up check
  check = copyGrid( grid );
  check = rotateGrid( check );
  check = flip(check);
  check = operate( check );  
  check = flip( check ); 
  check = rotateGrid( check ); 
  if( !changes( check, grid ) ) 
    count++;
  
  score = oldScore;
  if( count == 4 ){    
    return true;
  }else{
    count = 0;
    return false;
  }
    
  
}