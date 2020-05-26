export interface ImPos {
    x:number;
    y:number;
  }

export class MPos implements ImPos {
    
    x:number;
    y:number;
    constructor(_x?:number,_y?:number) {
      if( _x){
          this.x= _x;
      }
      if( _y){
        this.y= _y;
        }
    }
    
    
    
  }