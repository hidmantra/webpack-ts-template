import * as $ from "jquery";
import * as _ from "lodash";
import Logo from "./img/THR_Logo_knockout2.png";
import smallbk from "./img/quadbk.png";
import * as d$ from "./components/dUtils";
import "bootstrap";
import * as geometric from "../node_modules/geometric/build/geometric";
import { GalleryStripModal } from "./components/gallery_strip_modal/GalleryStripModal";

let myLogo:JQuery;
const test :HTMLImageElement= new Image();
let mPos = new d$.MPos();
mPos.x = 0;
mPos.y = 0;
let windowScrollPositon: number;
let perimArr: Array<any> = [];
let vLine: JQuery;
let hLine: JQuery;
let sqr1: JQuery;
let sqr2: JQuery;
let sqr3: JQuery;
let sqr4: JQuery;
let enterHolder: JQuery;
let enterButton: JQuery;
let but3: JQuery;
let but4: JQuery;
const fullCover: JQuery = $("#fullCover");
const sect1:JQuery = $("#overview-top");
const sect2:JQuery = $("#technology-top");
const sect3:JQuery = $("#portfolio-top");
const sect4:JQuery = $("#resume-top");
const mediumHolder:JQuery = $("#medium-holder");
let wHeight: number = window.innerHeight;
let wWidth: number = window.innerWidth;
/* prevents code from running until the entire document loads                      */
$(document).ready(function () {
  /// eslint-disable-next-line no-console
  const appAnchor: any = document.querySelector("app");
  console.log("document loaded");
  const mainHolder: any = $("#holder");
  sqr1 = $("<div class= 'container-fluid quarterFill pattern-a bk-img q1'></div> ");
  sqr2 = $("<div class= 'container-fluid quarterFill pattern-b bk-img q2'></div> ");
  sqr3 = $("<div class= 'container-fluid quarterFill pattern-c bk-img q3'></div> ");
  sqr4 = $("<div class= 'container-fluid quarterFill pattern-d bk-img q4'></div> ");
  myLogo = $("<div/>",{
    id: "myLogo"
  });
  vLine = $("<div class= 'vertLine'/>");
  hLine = $("<div class= 'horizLine'></div>");
  enterHolder = $("<div/>",{
    id:'enter-holder',
    class: "container-fluid"
  });
  enterButton = $("<button/>",{
    id:'enter-button',
    class: 'mx-auto btn btn-outline-primary',
    type:'button',
    text:"PROCEDE"
  });
  but3 = $("<div id='but3' class='button'><div>");
  but4 = $("<div id='but4' class='button'><div>");

  $(mainHolder).mousemove(function (event) {
    updateMouse(event.pageX, event.pageY);
    mediumHolder = document.getElementById("medium-holder");

    addComponents();
  });
/*
  $(mainHolder).mousedown(function (event) {
    console.log('pressed');
    $(handle).css({display:'block' ,top: event.pageY, left: event.pageX});
    updateMouse(event.pageX, event.pageY)
  });
  */
  
  enterButton.click((evt)=>{
    console.log("clckd 2");
    //$(sect3).css({display:"block"});
    $(sect3).addClass("visible");

  });
  but3.click((evt)=>{
    console.log("clckd 3");
    //$(sect3).css({display:"block"});

  });
  but4.click((evt)=>{
    console.log("clckd 4");
    $(sect4).css({display:"block"});
  });

  $(sqr1).appendTo(appAnchor);
  $(sqr2).appendTo(appAnchor);
  $(sqr3).appendTo(appAnchor);
  $(sqr4).appendTo(appAnchor);
  //$(myLogo3).appendTo(appAnchor);
  //$(myLogo2).appendTo(appAnchor);
  $(myLogo).appendTo(appAnchor);
  $(vLine).appendTo(appAnchor);
  $(hLine).appendTo(appAnchor);
$(enterHolder).appendTo(appAnchor);
$(enterButton).appendTo(enterHolder);
  $(fullCover).animate({
    opacity: 0.4
  }, 90000, "linear", function() {
    //
    });
    $(mainHolder).addClass("visible");
    $(mainHolder).removeClass("invisible")
 introAnimation();
});

window.addEventListener("resize", () => {
  $(myLogo).delay(10).animate({left: (fullCover.width()-myLogo.width())/2, top:(wHeight-myLogo.height())/2});

});

window.addEventListener("scroll", () => {
  windowScrollPositon = $(window).scrollTop();

})

function moveCrosshairs(tmpX: number, tmpY: number){
  const dDelay:number = 1;
 $(vLine).delay(dDelay).animate({ left: tmpX, top: 0, height: wHeight });
  $(hLine).delay(dDelay).animate({ left: 0, top: tmpY, width: wWidth });

  $(sqr1).delay(dDelay).animate({ left: 0, top: 0, width: tmpX, height: tmpY });
  $(sqr2).delay(dDelay).animate({ left: tmpX, top: 0, width: wWidth - tmpX, height: tmpY });
  $(sqr3).delay(dDelay).animate({ left: 0, top: tmpY, width: tmpX, height: wHeight - tmpY });
  $(sqr4).delay(dDelay).animate({ left: tmpX, top: tmpY, width: wWidth - tmpX, height: wHeight - tmpY });


}

function updateMouse(tmpX: number, tmpY: number) {
  mPos.x = tmpX;
  mPos.y = tmpY;
  //moveCrosshairs(mPos.x, mPos.y);
}

function introAnimation(){
  let tmpPoint:Array<number> = [];
  for (let i = 0; i < 361; i=i+6) {
    console.log("p: "+myLogo.width());
    tmpPoint = geometric.pointRotate([((wWidth-(.7 * myLogo.width()))/2)+5,wHeight/2] ,i,[wWidth/2,wHeight/2]);
    let tmpX:number = Math.round(tmpPoint[0]);
    let tmpY:number = Math.round(tmpPoint[1]);
    perimArr.push(tmpPoint);

    moveCrosshairs(tmpX, tmpY);
    
    console.log("tmpPoint x: " + tmpX + " y: " + tmpY);
  
  }
}

/*
/* uncomment this section for quick/sample test of jquery and lowdash
/*
/*
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person): string {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user: Person = { firstName: "John", lastName: "Doe" };

let element: HTMLDivElement = <HTMLDivElement> document.getElementById("content");
element.innerHTML = greeter(user);

$(()=>{
    console.log('yehaa');
    let jq: string = "This content has been loaded with jQuery";
    let ld: string = " AND Lodash";
    let tmpMsg: string[] = _.concat( jq, ld );
    $('div').after('<h1>' + tmpMsg + '</h1>');

  });
  */

 function addComponents(): void {
  const galleryStripModal: GalleryStripModal = new GalleryStripModal();

  galleryStripModal.appendComponent(mediumHolder);

  const screenCovered = () => {
      // eslint-disable-next-line no-console
      console.log("bingo");
      $(".navba").hide();
  };
  const screenUncovered = () => {
      $(".navbar").show();
  };

  galleryStripModal.CoverUp.on(screenCovered);
  galleryStripModal.CoverDown.on(screenUncovered);
}