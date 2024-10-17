function colors(){
  let c;
  this.choose = function(value){
    
    switch (value){
      case 0:
         c = color( 200,180, 200 );
        return c;
      case 2:
        c = color( 255,150, 100 ,150);
        return c;
      case 4:
        c = color(  255,180, 200 );
        return c;
      case 8:
         c = color( 100,100, 200 , 100 );
        return c;
      case 16:
        c = color( 100,180, 200 );
        return c;
      case 32:
        c = color( 90,190, 150  , 150);
        return c;
      case 64:
        c = color(  255,150, 150 );
        return c;
      case 128:
        c = color(  250,250, 120,100 );
        return c;
      case 256:
         c = color( 150,100, 150 ,130);
        return c;
      case 512:
        c = color( 255,110, 80 ,200);
        return c;
      case 1024:
        c = color(220);
        return c;
      case 2048:
        c = color(0);
        
        
        
    
    }
    
  }   
        
  
}