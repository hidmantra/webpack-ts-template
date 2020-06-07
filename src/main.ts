import * as $ from "jquery";
import * as _ from "lodash";
import Logo from "./img/THR_Logo_knockout2.png";
import smallbk from "./img/quadbk.png";
import * as d$ from "./components/dUtils";
import "bootstrap";
import * as geometric from "../node_modules/geometric/build/geometric";
import { GalleryStripModal } from "./components/gallery_strip_modal/GalleryStripModal";

const mainHolder: JQuery = $("#holder");
const introAnchor: JQuery = $("intro");
const interHolder: JQuery = $("#interface");
const fullCover: JQuery = $("#fullCover");
const sect1: JQuery = $("#overview-top");
const sect2: JQuery = $("#technology-top");
const sect3: JQuery = $("#portfolio-top");
const sect4: JQuery = $("#resume-top");
const mediumHolder:any =  document.getElementById("medium-holder");
let myLogo: JQuery;
let mPos = new d$.MPos();
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
let overviewButton: JQuery;
let wHeight: number = window.innerHeight;
let wWidth: number = window.innerWidth;
mPos.x = 0;
mPos.y = 0;

 
/* prevents code from running until the entire document loads */
$(document).ready(function () {
  /// eslint-disable-next-line no-console
  console.log("document loaded");
  sqr1 = $("<div class= 'container-fluid pattern-a bk-img q1'></div> ");
  sqr2 = $("<div class= 'container-fluid pattern-b bk-img q2'></div> ");
  sqr3 = $("<div class= 'container-fluid pattern-c bk-img q3'></div> ");
  sqr4 = $("<div class= 'container-fluid pattern-d bk-img q4'></div> ");
  myLogo = $("<div/>", {
    id: "myLogo"
  });
  vLine = $("<div class= 'vertLine'/>");
  hLine = $("<div class= 'horizLine'/>");
  enterHolder = $("<div/>", {
    id: 'enter-holder',
    class: "container-fluid"
  });
  enterButton = $("<button/>", {
    id: 'enter-button',
    class: 'mx-auto btn btn-outline-primary',
    type: 'button',
    text: "PROCEDE"
  });

  $(mainHolder).mousemove(function (event) {
    updateMouse(event.pageX, event.pageY);
  })

  enterButton.click((evt) => {
    console.log("clckd 2");
    inter();

    $(fullCover).animate({
      opacity: 1,
    }, 3000, "linear", function () {
      $(introAnchor).css({"display":"none"});
      $(fullCover).animate({
        opacity: 0
      }, 3000, "linear", function () {
        $(fullCover).css({"display":"none"});
      });
    });

  });
  $(sqr1).appendTo(introAnchor);
  $(sqr2).appendTo(introAnchor);
  $(sqr3).appendTo(introAnchor);
  $(sqr4).appendTo(introAnchor);
  $(myLogo).appendTo(introAnchor);
  $(vLine).appendTo(introAnchor);
  $(hLine).appendTo(introAnchor);
  $(enterHolder).appendTo(introAnchor);
  $(enterButton).appendTo(enterHolder);
  $(fullCover).animate({
    opacity: 1
  }, 30000, "linear", function () {
    $(introAnchor).css({"display":"none"});
    inter();
    $(fullCover).animate({
      opacity: 0
    }, 3000, "linear", function () {
      $(fullCover).css({"display":"none"});
    });
  });
  $(mainHolder).addClass("visible");
  $(mainHolder).removeClass("invisible");

  //addComponents();
  introAnimation();
});

function inter(){
  const bord1:JQuery = $("<div/>", {
    class: "container-fluid",
    id: "border-a"
  });
  const bord2:JQuery = $("<div/>", {
    class: "container-fluid",
    id: "border-b"
  });
  const faceTop:JQuery = $("<div/>", {
    class: "container-fluid face-bk",
    id: "face-top"
  });
  const faceBody:JQuery = $("<div/>", {
    class: "container-fluid face-bk",
    id: "face-body"
  });
  const faceNav:JQuery = $("<div/>", {
    class: "container-fluid face-bk",
    id: "face-nav"
  });
  const faceScroll:JQuery = $("<div/>", {
    class: "container-fluid face-bk",
    id: "face-scroll"
  });
  overviewButton = $("<button/>", {
    id: 'overview-button',
    class: 'mx-auto btn btn-outline-primary',
    type: 'button',
    text: "Overview",
    width:"100%",
  });
  
  $(bord1).appendTo(interHolder);
  $(bord2).appendTo(interHolder);
  $(faceTop).appendTo(bord2);
  $(faceBody).appendTo(bord2);
  $(faceNav).appendTo(bord2);
  $(faceScroll).appendTo(bord2);
  $(overviewButton).appendTo(faceNav);
  overviewButton.click((evt) => {
    $(sect1).appendTo(faceBody);
    $(sect1).removeClass("d-none");
  });
}
window.addEventListener("resize", () => {
  //$(myLogo).delay(10).animate({ left: (fullCover.width() - myLogo.width()) / 2, top: (wHeight - myLogo.height()) / 2 });

});

window.addEventListener("scroll", () => {
  windowScrollPositon = $(window).scrollTop();

})

function moveCrosshairs(tmpX: number, tmpY: number) {
  const dDelay: number = 1;
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

function introAnimation() {
  let tmpPoint: Array<number> = [];
  for (let i = 0; i < 361; i = i + 6) {
    console.log("p: " + myLogo.width());
    tmpPoint = geometric.pointRotate([((wWidth - (.7 * myLogo.width())) / 2), wHeight / 2], i, [wWidth / 2, wHeight / 2]);
    let tmpX: number = Math.round(tmpPoint[0]);
    let tmpY: number = Math.round(tmpPoint[1]);
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
/*
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
}8*/