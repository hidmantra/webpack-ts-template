import * as $ from 'jquery';
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

   /**
	 * CRange defines the starting, resting, leaving, and finished number of an in and out cycle
	 * @param {number} start defines the percent that an in-cycle begins
   * @param {number} rest defines the percent that an in-cycle finishes
   * @param {number} leave defines the percent that an end-cycle begins
   * @param {number} gone defines the percent that an end-cycle ends
	 */
  export interface CRange {
    /**
     * Start defines the percent that an in-cycle begins
     */
    start:number;
    /**
     * Rest defines the percent that an in-cycle finishes
     */
    rest:number;
    /**
     * Leave defines the percent that an end-cycle begins
     */
    leave:number;
    /**
     * Gone defines the percent that an end-cycle ends
     */
    gone:number;


  }



 /**
	 * ARange defines the starting, resting, leaving, and finished number of an in and out cycle
	 * @property {number} initial defines the starting value of an attribute
   * @property {number} final defines the desired value of an attribute
   * @property {number} end defines the end value of an attribute
	 */
  export interface ARange{
    /**
     * Initial defines the starting value of an attribute
     */
    initial:number;
    /**
     * Final defines the desired value of an attribute
     */
    final:number;
    /**
     * End defines the end value of an attribute
     */
    end:number;
  }


  /**
	 * CntrlPair is a class that pairs together a range for an attribute(s) to span as
   * well as at what percentage of a complete cycle the attributes key value should
   * be reached.
   * @param {CRange} cRange is an object with four keys: start, rest, leave, gone.
	 * @param {ARange} aRange is an object with three keys: initial, final, end.
	 */
  export class CntrlPair{
    cCyc:{[key:string]:number};
    aCyc:{[key:string]:number};
    readonly cKeys:Array<string>=["start","rest","leave","gone"];

    constructor(cRange:CRange, aRange:ARange){
      this.cCyc = {"start":cRange.start,"rest":cRange.rest,"leave":cRange.leave,"gone":cRange.gone};
      this.aCyc = {"initial":aRange.initial, "final":aRange.final, "end":aRange.end};
      this.validate();
    }

    validate(){
      for (const key in this.cCyc) {
        if (this.cCyc.hasOwnProperty(key)) {
          const element = this.cCyc[key];
          
        }
      }
    }
  }
  export class ActList{
    acts:Array<CntrlPair>;
    targs:Array<JQuery | string>;

    constructor(targEl:JQuery,act:CntrlPair){
      this.targs[0]=targEl;
      this.acts[0]=act;
    }

    addGroup(cPair:CntrlPair ,attr:string ){
      this.acts.push(cPair);
      this.targs.push(attr);
    }
  }

  export class ConEl {
    aList: ActList;
    el: JQuery | string;
    curLoc: number;

    constructor(aList:ActList, curLoc:number){
      this.el = aList.targs[0];
      this.aList = aList;
      this.updateAtts(curLoc);
    }

    updateAtts(loc:number){
      this.curLoc = loc;

    }

  }