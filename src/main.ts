import * as $ from "jquery";
import * as _ from "lodash";
import BigBk from "./img/bk-pattern-bw.png";
import smallbk from "./img/quadbk.png";
import * as d$ from "./components/dUtils";
require("bootstrap");

const myLogo = new Image();
const test = new Image();
let mPos = new d$.MPos();
mPos.x = 0;
mPos.y = 0;
let windowScrollPositon: number;
let vLine:JQuery;
let hLine:JQuery;
let sqr1: JQuery;
let sqr2: JQuery;
let sqr3: JQuery;
let sqr4: JQuery;
/* prevents code from running until the entire document loads                      */
$(document).ready(function () {
  /// eslint-disable-next-line no-console
  const appAnchor:any = document.querySelector("app");
  console.log("document loaded");
  myLogo.src = BigBk;
  myLogo.width = 100;
  test.src = smallbk;
  test.width = 75;
  const fullScreen: JQuery = $("#bg");
  const mainHolder: JQuery = $("<div class= 'mainBk container-fluid'>Deriv Diggs</div> ");
  sqr1 = $("<div class= 'container-fluid quarterFill pattern-a q1'></div> ");
  sqr2 = $("<div class= 'container-fluid quarterFill pattern-b q2'></div> ");
  sqr3 = $("<div class= 'container-fluid quarterFill pattern-c q3'></div> ");
  sqr4 = $("<div class= 'container-fluid quarterFill pattern-a q4'></div> ");

  vLine = $("<div class= 'vertLine'></div>");
  hLine = $("<div class= 'horizLine'></div>");
  
  $(mainHolder).mousemove(function( event ) {
    updateMouse(event.pageX, event.pageY)
  });
  $(sqr1).mousemove(function( event ) {
    updateMouse(event.pageX, event.pageY)
  });
  $(sqr2).mousemove(function( event ) {
    updateMouse(event.pageX, event.pageY)
  });
  $(sqr3).mousemove(function( event ) {
    updateMouse(event.pageX, event.pageY)
  });
  $(sqr4).mousemove(function( event ) {
    updateMouse(event.pageX, event.pageY)
  });
  $(mainHolder).appendTo(appAnchor);
  $(sqr1).appendTo(appAnchor);
  $(sqr2).appendTo(appAnchor);
  $(sqr3).appendTo(appAnchor);
  $(sqr4).appendTo(appAnchor);
  $(vLine).appendTo(appAnchor);
  $(hLine).appendTo(appAnchor);

});

window.addEventListener("resize", () => {
  if (window.innerWidth < 420) {
      myLogo.width = 40;
  } else {
      myLogo.width = 50;
  }
});

window.addEventListener("scroll", () => {
  windowScrollPositon = $(window).scrollTop();
  // show small logo on navbar on small devices
  if (windowScrollPositon > 150) {
      //
  } else {
      if ($(myLogo)) {
          $(myLogo).detach();
      }
  };
})

function updateMouse(tmpX:number, tmpY:number){
  mPos.x = tmpX;
  mPos.y = tmpY;
  console.log("y: " + mPos.y);
  $(vLine).animate({
    left: mPos.x
  }, 10,()=>{
    //
  });

  $(hLine).animate(
    {
      top: mPos.y
    },
    10,()=>{
       //
    })
    $(sqr1).animate(
      {
        top: 0,
        left: 0,
        width: mPos.x,
        height: mPos.y
      },
      10,()=>{
         //
      });
      $(sqr2).animate(
        {
          top: mPos.y - sqr2.height(),
          left: mPos.x
        },
        10,()=>{
           //
        });
      $(sqr3).animate(
        {
          top: mPos.y,
          left: mPos.x - sqr3.width(),
        },
        10,()=>{
           //
        });
        $(sqr4).animate(
          {
            top: mPos.y,
            left: mPos.x,
            //height: window.innerHeight - mPos.y,
            //width:window.innerWidth - mPos.x
          },
          10,()=>{
             //
          })
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
