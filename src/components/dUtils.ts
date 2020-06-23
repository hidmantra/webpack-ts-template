import * as $ from 'jquery';
export interface ImPos {
  x: number;
  y: number;
}

export class MPos implements ImPos {
  x: number;
  y: number;
  constructor(_x?: number, _y?: number) {
    if (_x) {
      this.x = _x;
    }
    if (_y) {
      this.y = _y;
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
  start: number;
  /**
   * Rest defines the percent that an in-cycle finishes
   */
  rest: number;
  /**
   * Leave defines the percent that an end-cycle begins
   */
  leave: number;
  /**
   * Gone defines the percent that an end-cycle ends
   */
  gone: number;
}

/**
  * ARange defines the starting, resting, leaving, and finished number of an in and out cycle
  * @property {number} initial defines the starting value of an attribute
  * @property {number} final defines the desired value of an attribute
  * @property {number} end defines the end value of an attribute
  */
export interface ARange {
  attrDelta: string;
  /**
   * Initial defines the starting value of an attribute
   */
  initial: number;
  /**
   * Final defines the desired value of an attribute
   */
  final: number;
  /**
   * End defines the end value of an attribute
   */
  end: number;
}


/**
 * CntrlGroup is a class that pairs together a range for an attribute(s) to span as
 * well as at what percentage of a complete cycle the attributes key value should
 * be reached.
 * @param {CRange} cRange is an object with four keys: start, rest, leave, gone.
 * @param {Array<ARange>} aRangeArr is an object describing and attribute and three stages of value: initial, final, end.
 
 */
export class CntrlGroup {
  aRangeArr: Array<ARange>;
  cRange: CRange;
  readonly cKeys: Array<string> = ["start", "rest", "leave", "gone"];
  readonly aKeys: Array<string> = ["initial", "final", "end"];

  constructor(cRange: CRange, aRangeArr: Array<ARange>) {
    this.cRange = cRange;
    this.aRangeArr = aRangeArr;
  }
}
/**
 * @class ActSet
 * @classdesc This class copuls a CntrlGroup with an elements display plus as many
 * of its attributes that should be dynamic.
 */
export class ActSet {
  /**
   * @property {CntrlGroup} acts are a control pair representing the targets actions
   */
  acts: CntrlGroup;
  targEl: JQuery;
  /**
   * @property {Array<JQuery | string>} targs is an array of targets that will follow the acts property
   */

  constructor(targEl: JQuery, act: CntrlGroup) {
    this.acts = act;
  }

}
/**
 * @class CntrlActList
 * @classdesc The CntrlActList or ControllActionList is a similar to a stack of animations,
 * except that attributes of elements are modified based on the location of the windows scroll
 * bars.
 * @note All Participating Elements should have their display value set to zero as their display will be controlled by this class
 */
export class CntrlActList {
  aList: Array<ActSet>;
  curLoc: number;
  actStart: number;
  actRange: number;
  actDone: number;
  /**
   * the total number of animation sections participating
   */
  actCnt: number;

  /**
   * 
   * @param aList {Array<ActSet>} each ActSet in the array represents key points where target's attributes should change
   * @param actionRange {number} The scroll range that this screen is effected by in vh units (1vh = 1% viewport height) 
   * @param curLoc {number} location of the scrollbar
   */
  constructor(aList: Array<ActSet>, actStart: number, actRange: number, curLoc: number) {
    this.aList = aList;
    this.actRange = actRange;
    this.actStart = actStart;
    this.actDone = actStart + actRange;
    this.updateAtts(curLoc);
  }

  /**
   * @method updateAtts() called when this class is instantiated and when the scrollbar has been changed within @beginWatch and @endWatch
   * @param loc {number} the current scrollposition
   */
  updateAtts(loc: number) {
    this.curLoc = loc;
    let relLoc: number = (100 / this.actRange) * (loc - this.actStart);
    /**
     * test if this control action list should activate
     */
    if (relLoc > 0 && relLoc <= 100) {
      for (let i = 0; this.aList.length; i++) {
        /**
         * convenience variables
         */
        const cTarget: JQuery = this.aList[i].targEl;
        const cStart: number = this.aList[i].acts.cRange.start;
        const cRest: number = this.aList[i].acts.cRange.rest;
        const cLeave: number = this.aList[i].acts.cRange.leave;
        const cGone: number = this.aList[i].acts.cRange.gone;
        const startRange:number = (1/(cRest - cStart)) * relLoc; 
        const leaveRange:number = (1/(cGone - cLeave)) * relLoc; 
        /**
          * iterate through each attribute
          */
        for (let t = 0; this.aList[i].acts.aRangeArr.length; t++) {
          const cAttr: string = this.aList[i].acts.aRangeArr[t].attrDelta;
          const cInitial:number = this.aList[i].acts.aRangeArr[t].initial;
          const cFinal:number = this.aList[i].acts.aRangeArr[t].final;
          const cEnd:number = this.aList[i].acts.aRangeArr[t].end;
          const buildVal:number = ((cFinal - cInitial) * startRange) + cInitial;
          const dieVal:number = ((cEnd - cFinal) * leaveRange) + cInitial;

         
          if (relLoc >= this.aList[i].acts.cRange.start && relLoc < this.aList[i].acts.cRange.rest) {
              $(cTarget).css("display", "block");
              if(cAttr=="opacity"){
                $(cTarget).css("opacity",buildVal);
              }
          }
          else if (relLoc >= this.aList[i].acts.cRange.rest && relLoc < this.aList[i].acts.cRange.leave) {
              $(cTarget).css("display", "block");
              if(cAttr=="opacity"){
                $(cTarget).css("opacity",cFinal);
              }
          }
          else if (relLoc >= this.aList[i].acts.cRange.leave && relLoc < this.aList[i].acts.cRange.gone) {
              $(cTarget).css("display", "block");
              if(cAttr=="opacity"){
                $(cTarget).css("opacity",dieVal);
              }
          }
          else {
              $(cTarget).css("display", "none");
              if(cAttr=="opacity"){
                $(cTarget).css("opacity",cEnd);
              }
          }
        }

      }

    }
  }



}