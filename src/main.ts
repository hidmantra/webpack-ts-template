import * as $ from "jquery";
import * as _ from "lodash";
import {ActSet, CntrlActList, CntrlGroup, MPos} from "./components/dUtils";
import "bootstrap";
import * as geometric from "../node_modules/geometric/build/geometric";
import { GalleryStripModal } from "./components/gallery_strip_modal/GalleryStripModal";
import SimpleLogo from "./img/THR_logo_bw.png";
import HeaderLogo from "../src/img/tr.png";
import BigLogo from "../src/img/THR_Logo_knockout2.png"
//import animateScrollTo from "../node_modules/animated-scroll-to/lib/animated-scroll-to";
//const scrollTrack = require('scroll-track');
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

//let scrollCntrl: CntrlActList;

let scrollCntrlA: any;
let scrollCntrlB: any;
let cntrlGroupAa:CntrlGroup;
let cntrlGroupAb:CntrlGroup;
let cntrlGroupAc:CntrlGroup;
let cntrlGroupAd:CntrlGroup;
let cntrlGroupAe:CntrlGroup;

const g1: JQuery = $("#g1");
const g1l1: JQuery = $("#g1l1");
const g1l2: JQuery = $("#g1l2");
const g1l3: JQuery = $("#g1l3");
const g1l4: JQuery = $("#g1l4");
const g1l5: JQuery = $("#g1l5");


let cntrlGroupBa:CntrlGroup;
let cntrlGroupBb:CntrlGroup;
let cntrlGroupBc:CntrlGroup;
let cntrlGroupBd:CntrlGroup;
let cntrlGroupBe:CntrlGroup;
let cntrlGroupBf:CntrlGroup;

const g2: JQuery = $("#g2");
const g2l1: JQuery = $("#g2l1");
const g2l2: JQuery = $("#g2l2");
const g2l3: JQuery = $("#g2l3");
const g2l4: JQuery = $("#g2l4");
const g2l5: JQuery = $("#g2l5");
const g2l6: JQuery = $("#g2l6");
const headerLogo = new Image();
const simpleLogo = new Image();
const bigLogo = new Image();

let relativeScroll: number;
let myLogo: JQuery;
let mPos = new MPos();
let windowScrollPosition: number;
let perimArr: Array<any> = [];
let vLine: JQuery;
let hLine: JQuery;
let sqr1: JQuery;
let sqr2: JQuery;
let sqr3: JQuery;
let sqr4: JQuery;
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





/* prevents code from running until the entire document loads */
$(document).ready(function () {
  /// eslint-disable-next-line no-console
  console.log("document loaded");

  cntrlGroupAa = new CntrlGroup({ start: 1, rest: 24, leave: 80, gone: 87 }, [{ attrDelta: "opacity", initial: 0, final: 1, end: 0 }, { attrDelta: "top", initial: 11, final: 9, end: 0 }]);
  cntrlGroupAb = new CntrlGroup({ start: 8, rest: 32, leave: 82, gone: 89 }, [{ attrDelta: "opacity", initial: 0, final: 1, end: 0 }, { attrDelta: "top", initial: 22, final: 20, end: 10 }]);
  cntrlGroupAc = new CntrlGroup({ start: 16, rest: 40, leave: 84, gone: 91 }, [{ attrDelta: "opacity", initial: 0, final: 1, end: 0 }, { attrDelta: "top", initial: 32, final: 30, end: 20 }]);
  cntrlGroupAd = new CntrlGroup({ start: 24, rest: 48, leave: 86, gone: 93 }, [{ attrDelta: "opacity", initial: 0, final: 1, end: 0 }, { attrDelta: "top", initial: 42, final: 40, end: 30 }]);
  cntrlGroupAe = new CntrlGroup({ start: 32, rest: 56, leave: 88, gone: 95 }, [{ attrDelta: "opacity", initial: 0, final: 1, end: 0 }, { attrDelta: "top", initial: 57, final: 55, end: 45 }]);
 
  cntrlGroupBa = new CntrlGroup({ start: 1, rest: 24, leave: 80, gone: 87 }, [{ attrDelta: "opacity", initial: 0, final: 1, end: 0 }, { attrDelta: "top", initial: 11, final: 9, end: 0 }]);
  cntrlGroupBb = new CntrlGroup({ start: 8, rest: 32, leave: 82, gone: 89 }, [{ attrDelta: "opacity", initial: 0, final: 1, end: 0 }, { attrDelta: "top", initial: 17, final: 15, end: 7 }]);
  cntrlGroupBc = new CntrlGroup({ start: 16, rest: 40, leave: 84, gone: 91 }, [{ attrDelta: "opacity", initial: 0, final: 1, end: 0 }, { attrDelta: "top", initial: 24, final: 22, end: 14 }]);
  cntrlGroupBd = new CntrlGroup({ start: 24, rest: 48, leave: 86, gone: 93 }, [{ attrDelta: "opacity", initial: 0, final: 1, end: 0 }, { attrDelta: "top", initial: 31, final: 29, end: 21 }]);
  cntrlGroupBe = new CntrlGroup({ start: 32, rest: 56, leave: 88, gone: 95 }, [{ attrDelta: "opacity", initial: 0, final: 1, end: 0 }, { attrDelta: "top", initial: 38, final: 36, end: 28 }]);
  cntrlGroupBf = new CntrlGroup({ start: 40, rest: 64, leave: 90, gone: 97 }, [{ attrDelta: "opacity", initial: 0, final: 1, end: 0 }, { attrDelta: "top", initial: 46, final: 44, end: 35 }]);
  let actSetAa: ActSet = new ActSet(g1l1, cntrlGroupAa);
  let actSetAb: ActSet = new ActSet(g1l2, cntrlGroupAb);
  let actSetAc: ActSet = new ActSet(g1l3, cntrlGroupAc);
  let actSetAd: ActSet = new ActSet(g1l4, cntrlGroupAd);
  let actSetAe: ActSet = new ActSet(g1l5, cntrlGroupAe);
  let actSetBa: ActSet = new ActSet(g2l1, cntrlGroupBa);
  let actSetBb: ActSet = new ActSet(g2l2, cntrlGroupBb);
  let actSetBc: ActSet = new ActSet(g2l3, cntrlGroupBc);
  let actSetBd: ActSet = new ActSet(g2l4, cntrlGroupBd);
  let actSetBe: ActSet = new ActSet(g2l5, cntrlGroupBe);
  let actSetBf: ActSet = new ActSet(g2l6, cntrlGroupBf);
  let tmpActArrA:Array<ActSet> = [actSetAa,actSetAb,actSetAc,actSetAd, actSetAe];
  let tmpActArrB:Array<ActSet> = [actSetBa,actSetBb,actSetBc,actSetBd, actSetBe, actSetBf];
  //tmpActArr.push(actSetAa);
  //tmpActArr.push(actSetAb);
  scrollCntrlA = new CntrlActList(tmpActArrA, 100, 200, 0);
  scrollCntrlB = new CntrlActList(tmpActArrB, 400, 200, 0);

  simpleLogo.src = SimpleLogo;
  simpleLogo.width = 50;

  headerLogo.src = HeaderLogo;
  headerLogo.width = 100;
  headerLogo.className = "header-logo";

  bigLogo.src = BigLogo;
  bigLogo.className = "my-logo";

  $(headerLogo).appendTo("#logo-holder");
  $(".main-title").html("Thought Render");

  sqr1 = $("<div class= 'container-fluid pattern-a bk-img q1'></div> ");
  sqr2 = $("<div class= 'container-fluid pattern-b bk-img q2'></div> ");
  sqr3 = $("<div class= 'container-fluid pattern-c bk-img q3'></div> ");
  sqr4 = $("<div class= 'container-fluid pattern-d bk-img q4'></div> ");
  $(mainHolder).mousemove(function (event) {
    updateMouse(event.pageX, event.pageY);
  })

  $(sqr1).appendTo(introAnchor);
  $(sqr2).appendTo(introAnchor);
  $(sqr3).appendTo(introAnchor);
  $(sqr4).appendTo(introAnchor);
  $(vLine).appendTo(introAnchor);
  $(hLine).appendTo(introAnchor);
  $(fullCover).animate({
    opacity: .3
  }, 5000);
});

function launchSection(sectionToLaunch: Function) {
  sectionToLaunch();
}

function upIn(el: JQuery, dlay: number) {
  // if($(el).hasClass("not-set")){
  $(el).css("margin-top", "10px")
  $(el).delay(dlay).animate({
    "opacity": 1,
    "margin-top": 0
  }, 1000, () => {
  })
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
  relativeScroll = (100 / $(window).innerHeight()) * windowScrollPosition;
  console.log("sp: " + windowScrollPosition + " rel sp: " + relativeScroll);
  scrollCntrlA.updateAtts(relativeScroll);
  scrollCntrlB.updateAtts(relativeScroll);

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
  
  if (windowScrollPosition > 750 && windowScrollPosition < 1200) {
    console.log("true dat");
  
    if (windowScrollPosition > 800) {
      upIn($(g1l2), 500);
    }
    
    if (windowScrollPosition > 900) {
      upIn($(g1l3), 500);
    }
    if (windowScrollPosition > 1000) {
      upIn($(g1l4), 500);
    }
    */
})

function anim1() {
  let itemCnt: Number = Number($(g1).children());
  const offsetY: number = 5;
  $(g1l1).addClass("reveal");
  $(g1l2).addClass("reveal");
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

/*
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
*/