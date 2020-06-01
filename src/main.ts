import * as $ from "jquery";
import * as _ from "lodash";
import Logo from "./img/THR_Logo_knockout2.png";
import smallbk from "./img/quadbk.png";
import * as d$ from "./components/dUtils";
import "bootstrap";

let myLogo: JQuery;
let myLogo3: JQuery;
let myLogo2: JQuery;
const fullCover: JQuery = $("#fullCover");
const test = new Image();
let mPos = new d$.MPos();
mPos.x = 0;
mPos.y = 0;
let windowScrollPositon: number;
let vLine: JQuery;
let hLine: JQuery;
let sqr1: JQuery;
let sqr2: JQuery;
let sqr3: JQuery;
let sqr4: JQuery;
let wHeight: number = window.innerHeight;
let wWidth: number = window.innerWidth;
/* prevents code from running until the entire document loads                      */
$(document).ready(function () {
  /// eslint-disable-next-line no-console
  const appAnchor: any = document.querySelector("app");
  console.log("document loaded");
  test.src = smallbk;
  test.width = 75;

  const mainHolder: any = $("#holder");
  sqr1 = $("<div class= 'container-fluid quarterFill pattern-a q1'></div> ");
  sqr2 = $("<div class= 'container-fluid quarterFill pattern-b q2'></div> ");
  sqr3 = $("<div class= 'container-fluid quarterFill pattern-c q3'></div> ");
  sqr4 = $("<div class= 'container-fluid quarterFill pattern-d q4'></div> ");
  myLogo = $("<div id='myLogo'><div>");
  myLogo2 = $("<div id='myLogo2'><div>");
  myLogo3 = $("<div id='myLogo3'><div>");
  vLine = $("<div class= 'vertLine'></div>");
  hLine = $("<div class= 'horizLine'></div>");

  $(mainHolder).mousemove(function (event) {
    updateMouse(event.pageX, event.pageY)
  });

  $(mainHolder).mousedown(function (event) {
    updateMouse(event.pageX, event.pageY)
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
  $(fullCover).animate({
    opacity: 0.9
  }, 3000, "linear");
/*
  $(myLogo).animate({
    opacity: 0.9,
  }, "slow" );
  */
});

window.addEventListener("resize", () => {

});

window.addEventListener("scroll", () => {
  windowScrollPositon = $(window).scrollTop();

})

function updateMouse(tmpX: number, tmpY: number) {
  mPos.x = tmpX;
  mPos.y = tmpY;


  console.log("y: " + mPos.y);
  //$(myLogo).attr("opacity", ((window.innerHeight / mPos.y)*50)+20);

  $(vLine).css({ left: mPos.x, top: 0, height: wHeight });
  $(hLine).css({ left: 0, top: mPos.y, width: wWidth });
  $(sqr1).css({ left: 0, top: 0, width: mPos.x, height: mPos.y });
  $(sqr2).css({ left: mPos.x, top: 0, width: wWidth - mPos.x, height: mPos.y });
  $(sqr3).css({ left: 0, top: mPos.y, width: mPos.x, height: wHeight - mPos.y });
  $(sqr4).css({ left: mPos.x, top: mPos.y, width: wWidth - mPos.x, height: wHeight - mPos.y });

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
