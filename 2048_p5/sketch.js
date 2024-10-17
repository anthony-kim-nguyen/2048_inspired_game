let grid;
var colors;
var score = 0;
var oldScore;


function setup() {
  createCanvas(600, 600);
  colors = new colors();
  grid = blankGrid();
  
  addNumber();
  addNumber();
}



function keyPressed(){
  let flipped = false;
  let rotated = false;
  let moved = false;
  if(keyCode === RIGHT_ARROW){
    moved = true;
  }else if(keyCode === LEFT_ARROW){
    grid = flip(grid);
    flipped = true;
    moved = true;
  }else if (keyCode === DOWN_ARROW){
    grid = rotateGrid(grid);
    rotated = true;
    moved = true;
  }else if ( keyCode=== UP_ARROW){
    grid = rotateGrid(grid);
    grid = flip(grid);
    rotated = true;
    flipped = true;
    moved = true;
  }
  if( moved) {
    let past = copyGrid( grid );
    
    grid = operate( grid );
    
    let changed = changes( past, grid );
    if(flipped){
      grid = flip(grid);
    }
    if ( rotated ){
      grid = rotateGrid(grid);
      //grid = rotateGrid(grid);
      //grid = rotateGrid(grid);
    }
    if( changed ){
      addNumber();
    }else if ( gameOver(grid) ){
      console.log("game.over");
    }
  }
 
  
}


function draw() {
  rectMode(CENTER);
  background( 200 , 180 , 150 );
  drawGrid();
  
  let s = "SCORE:      " + score;
  push();
  fill(255,150, 100 );
  stroke(200);
  textAlign(LEFT,CENTER);
  textSize(40);
  text(s , 100, 70)
  pop();
}




function drawGrid(){
  
  for(let i = 0; i < 4; i ++ ){  
    for(let j = 0; j < 4; j ++ ){
      fill( colors.choose(grid[i][j]) );
      strokeWeight(3);
      stroke(200);
      square( 150 + j *100  , 150 + i *100 , 95 , 10 );
      let val = grid[i][j];
      if( val !== 0 ){
        let size = 50;
        if ( val > 1000){
          size = 30;
        }
        textAlign( CENTER , CENTER );
        textSize ( size );
        noFill();
        stroke(255);
        strokeWeight(2);
        text(val , 150 + j *100  , 150 + i *100 )       
      }
      
    } 
  }
}