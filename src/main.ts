import * as $ from "jquery";
import * as _ from "lodash";
import * as d$ from "./components/dUtils";
import "bootstrap";
import * as geometric from "../node_modules/geometric/build/geometric";
import { GalleryStripModal } from "./components/gallery_strip_modal/GalleryStripModal";
import SimpleLogo from "./img/THR_logo_bw.png";
import HeaderLogo from "../src/img/tr.png";
import BigLogo from "../src/img/THR_Logo_knockout2.png"
import animateScrollTo from "../node_modules/animated-scroll-to/lib/animated-scroll-to";
const scrollTrack = require('scroll-track');

//import scrollTrack from "../node_modules/scroll-track/src/scroll-element/index 
const mainHolder: JQuery = $("#holder");
const introAnchor: JQuery = $("#cityscape");

const logoIntroAnchor: JQuery = $("#bigLogoHolder");
const fullCover: JQuery = $("#fullCover");
const sect1: JQuery = $("#overview-top");
const sect2: JQuery = $("#technology-top");
const sect3: JQuery = $("#portfolio-top");
const sect4: JQuery = $("#resume-top");
const mediumHolder: any = document.getElementById("medium-holder");
const g1: JQuery = $("#g1");
const g1l1: JQuery = $("#g1l1");
const g1l2: JQuery = $("#g1l2");
const g1l3: JQuery = $("#g1l3");
const g1l4: JQuery = $("#g1l4");
const trg1 = scrollTrack.create(g1);
const trg1l1 = scrollTrack.create(g1l1);
const trg1l2 = scrollTrack.create(g1l2);
const trg1l3 = scrollTrack.create(g1l3);
const trg1l4 = scrollTrack.create(g1l4);

const headerLogo = new Image();
const simpleLogo = new Image();
const bigLogo = new Image();
let myLogo: JQuery;
let mPos = new d$.MPos();
let windowScrollPosition: number;
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
let firstRun: boolean = true;
let dDelay: number = 1;
mPos.x = 0;
mPos.y = 0;
const screenCovered = () => {
  // eslint-disable-next-line no-console
  console.log("bingo");
  $(".navba").hide();
};
const screenUncovered = () => {
  $(".navbar").show();
};
const galleryStripModal: GalleryStripModal = new GalleryStripModal();
galleryStripModal.CoverUp.on(screenCovered);
galleryStripModal.CoverDown.on(screenUncovered);


trg1.on("enter-viewport", () => {
  console.log("free");
  $(g1).addClass("fxd");
  $(g1).remove("rel");
})
trg1.on("exit-viewport", () => {
  console.log("free");
  $(g1).remove("fxd");
  $(g1).addClass("rel");
})
trg1l1.on("enter-viewport", () => {
  console.log("free");
  upIn($(g1l1),500)
})

trg1l1.on("exit-viewport", () => {
  console.log("now-set");
dOut($(g1l1))
})
trg1l2.on("enter-viewport", () => {
  console.log("free");
  upIn($(g1l2),500)
})

trg1l2.on("exit-viewport", () => {
  console.log("now-set");
dOut($(g1l2))
})



/* prevents code from running until the entire document loads */
$(document).ready(function () {
  /// eslint-disable-next-line no-console
  console.log("document loaded");

  simpleLogo.src = SimpleLogo;
  simpleLogo.width = 50;

  headerLogo.src = HeaderLogo;
  headerLogo.width = 100;
  headerLogo.className = "header-logo";

  bigLogo.src = BigLogo;
  bigLogo.className = "my-logo";



  //$(bigLogo).appendTo(logoIntroAnchor);

  $(headerLogo).appendTo("#logo-holder");
  $(".main-title").html("Thought Render");

  sqr1 = $("<div class= 'container-fluid pattern-a bk-img q1'></div> ");
  sqr2 = $("<div class= 'container-fluid pattern-b bk-img q2'></div> ");
  sqr3 = $("<div class= 'container-fluid pattern-c bk-img q3'></div> ");
  sqr4 = $("<div class= 'container-fluid pattern-d bk-img q4'></div> ");



  $(mainHolder).mousemove(function (event) {
    updateMouse(event.pageX, event.pageY);
  })




  // $(myLogo).appendTo(logoIntroAnchor);
  $(sqr1).appendTo(introAnchor);
  $(sqr2).appendTo(introAnchor);
  $(sqr3).appendTo(introAnchor);
  $(sqr4).appendTo(introAnchor);
  $(vLine).appendTo(introAnchor);
  $(hLine).appendTo(introAnchor);
  //$(fullCover).addClass("no-see");
  $(fullCover).animate({
    opacity: .3
  }, 5000);

});



//addComponents();




function launchSection(sectionToLaunch: Function) {
  sectionToLaunch();
}

function upIn(el: JQuery, dlay: number) {
 // if($(el).hasClass("not-set")){
    $(el).css("margin-top", "10px")
    $(el).delay(dlay).animate({
      "opacity": 1,
      "margin-top": 0
    }, 1000, ()=>{
     // $(el).removeClass("not-set");
    })
 // }
    
  
  
}
function dOut(el: JQuery) {

  $(el).animate({
    "opacity": 0,
    "margin-top": "-5px"
  }, 1000)
}

window.addEventListener("resize", () => {
  //$(myLogo).delay(10).animate({ left: (fullCover.width() - myLogo.width()) / 2, top: (wHeight - myLogo.height()) / 2 });
  console.log("top: " + $(logoIntroAnchor).offset);
});

window.addEventListener("scroll", () => {
  windowScrollPosition = $(window).scrollTop();
  console.log("sp: " + windowScrollPosition);
  if (windowScrollPosition > 1000) {
    let op: number = (2000 - windowScrollPosition) * .001;
    console.log("op: " + op);

    $(logoIntroAnchor).css("opacity", op);
  }

  /*
  if (windowScrollPosition > 750 && windowScrollPosition < 950) {
    upIn($(g1l1), 500);
  }else {
    dOut($(g1l1));
  }
  */
  if (windowScrollPosition > 750 && windowScrollPosition < 1200) {
    console.log("true dat");
    /*
    if (windowScrollPosition > 800) {
      upIn($(g1l2), 500);
    }
    */
    if (windowScrollPosition > 900) {
      upIn($(g1l3), 500);
    }
    if (windowScrollPosition > 1000) {
      upIn($(g1l4), 500);
    }

  }

  if (windowScrollPosition > 1600) {
    if (windowScrollPosition > 1600) {
     // dOut($(g1l1))
    };
   // if (windowScrollPosition > 1700) { dOut($(g1l2)) };
    if (windowScrollPosition > 1800) { dOut($(g1l3)) };
    if (windowScrollPosition > 1900) { dOut($(g1l4)) };


  }




})

function anim1() {
  let itemCnt: Number = Number($(g1).children());
  const offsetY: number = 5;
  $(g1l1).addClass("reveal");
  $(g1l2).addClass("reveal");
  // Number($(g1).position. =   $(g1).position.top = offsetY;
  //$(hLine).delay(dDelay).ag1l1nimate({ opacity: 1, top: tmpY, width: wWidth });
  // c
}

function moveCrosshairs(tmpX: number, tmpY: number) {

  $(vLine).delay(dDelay).animate({ left: tmpX, top: 0, height: wHeight });
  $(hLine).delay(dDelay).animate({ left: 0, top: tmpY, width: wWidth });

  $(sqr1).delay(dDelay).animate({ left: 0, top: 0, width: tmpX, height: tmpY });
  $(sqr2).delay(dDelay).animate({ left: tmpX, top: 0, width: wWidth - tmpX, height: tmpY });
  $(sqr3).delay(dDelay).animate({ left: 0, top: tmpY, width: tmpX, height: wHeight - tmpY });
  $(sqr4).delay(dDelay).animate({ left: tmpX, top: tmpY, width: wWidth - tmpX, height: wHeight - tmpY });
  if (!firstRun) {
    dDelay = 5000;
  } else {
    $(mainHolder).addClass("visible");
    $(mainHolder).removeClass("invisible");
    firstRun = false;

  }

}

function updateMouse(tmpX: number, tmpY: number) {
  mPos.x = tmpX;
  mPos.y = tmpY;
  //moveCrosshairs(mPos.x, mPos.y);
}

function introAnimation() {
  let tmpPoint: Array<number> = [];
  for (let i = 0; i < 3601; i = i + 30) {
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