import * as $ from "jquery";
import * as _ from "lodash";
import { ActSet, CntrlActList, CntrlGroup, MPos, findPos } from './components/dUtils';
import "bootstrap";
import { GalleryStripModal } from "./components/gallery_strip_modal/GalleryStripModal";
import SimpleLogo from "./img/THR_logo_bw.png";
import HeaderLogo from "../src/img/tr.png";
import BigLogo from "../src/img/THR_Logo_knockout2.png";
import ProfilePic from "../src/img/deriv.jpg";
import SkyDivePic from "../src/img/deriv2.jpg";

const introAnchor: JQuery = $("#cityscape");
const ppholder: JQuery = $("#profile-pic-holder");
const sdholder: JQuery = $("#skyDive-pic-holder");
const logoIntroAnchor: JQuery = $("#bigLogoHolder");
const fullCover: JQuery = $("#fullCover");
const mediumHolder: any = document.getElementById("multimedia");

let scrollCntrlA: any;
let scrollCntrlB: any;
let cntrlGroupAa:CntrlGroup;
let cntrlGroupAb:CntrlGroup;
let cntrlGroupAc:CntrlGroup;
let cntrlGroupAd:CntrlGroup;
let cntrlGroupAe:CntrlGroup;

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

const g2l1: JQuery = $("#g2l1");
const g2l2: JQuery = $("#g2l2");
const g2l3: JQuery = $("#g2l3");
const g2l4: JQuery = $("#g2l4");
const g2l5: JQuery = $("#g2l5");
const g2l6: JQuery = $("#g2l6");
const headerLogo = new Image();
const simpleLogo = new Image();
const bigLogo = new Image();
const profilePic = new Image();
const skyDivePic = new Image();

let relativeScroll: number;
let mPos = new MPos();
let windowScrollPosition: number;
let vLine: JQuery;
let hLine: JQuery;
let sqr1: JQuery;
let sqr2: JQuery;
let sqr3: JQuery;
let sqr4: JQuery;
mPos.x = 0;
mPos.y = 0;


/* prevents code from running until the entire document loads */
$(document).ready(function () {
  /// eslint-disable-next-line no-console
  console.log("document loaded");

  /* set up animations */
  cntrlGroupAa = new CntrlGroup({ start: 1, rest: 24, leave: 80, gone: 87 }, [{ attrDelta: "opacity", initial: 0, final: 1, end: 0 }, { attrDelta: "top", initial: 11, final: 9, end: 0 }]);
  cntrlGroupAb = new CntrlGroup({ start: 8, rest: 32, leave: 82, gone: 89 }, [{ attrDelta: "opacity", initial: 0, final: 1, end: 0 }, { attrDelta: "top", initial: 22, final: 20, end: 10 }]);
  cntrlGroupAc = new CntrlGroup({ start: 16, rest: 40, leave: 84, gone: 91 }, [{ attrDelta: "opacity", initial: 0, final: 1, end: 0 }, { attrDelta: "top", initial: 32, final: 30, end: 20 }]);
  cntrlGroupAd = new CntrlGroup({ start: 24, rest: 48, leave: 86, gone: 93 }, [{ attrDelta: "opacity", initial: 0, final: 1, end: 0 }, { attrDelta: "top", initial: 42, final: 40, end: 30 }]);
  cntrlGroupAe = new CntrlGroup({ start: 32, rest: 56, leave: 88, gone: 95 }, [{ attrDelta: "opacity", initial: 0, final: 1, end: 0 }, { attrDelta: "top", initial: 57, final: 55, end: 45 }]);
 
  cntrlGroupBa = new CntrlGroup({ start: 1, rest: 24, leave: 80, gone: 87 }, [{ attrDelta: "opacity", initial: 0, final: 1, end: 0 }, { attrDelta: "top", initial: 11, final: 9, end: 0 }]);
  cntrlGroupBb = new CntrlGroup({ start: 8, rest: 32, leave: 82, gone: 89 }, [{ attrDelta: "opacity", initial: 0, final: 1, end: 0 }, { attrDelta: "top", initial: 19, final: 17, end: 7 }]);
  cntrlGroupBc = new CntrlGroup({ start: 16, rest: 40, leave: 84, gone: 91 }, [{ attrDelta: "opacity", initial: 0, final: 1, end: 0 }, { attrDelta: "top", initial: 28, final: 26, end: 14 }]);
  cntrlGroupBd = new CntrlGroup({ start: 24, rest: 48, leave: 86, gone: 93 }, [{ attrDelta: "opacity", initial: 0, final: 1, end: 0 }, { attrDelta: "top", initial: 37, final: 35, end: 21 }]);
  cntrlGroupBe = new CntrlGroup({ start: 42, rest: 67, leave: 88, gone: 95 }, [{ attrDelta: "opacity", initial: 0, final: 1, end: 0 }, { attrDelta: "top", initial: 49, final: 47, end: 28 }]);
  cntrlGroupBf = new CntrlGroup({ start: 50, rest: 74, leave: 90, gone: 97 }, [{ attrDelta: "opacity", initial: 0, final: 1, end: 0 }, { attrDelta: "top", initial: 59, final: 57, end: 35 }]);
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
  scrollCntrlA = new CntrlActList(tmpActArrA, 100, 200, 0);
  scrollCntrlB = new CntrlActList(tmpActArrB, 400, 200, 0);

  /* set up images */
  simpleLogo.src = SimpleLogo;
  simpleLogo.width = 50;

  profilePic.src = ProfilePic;
  profilePic.width = 200;
  profilePic.id = "ppic";

  skyDivePic.src = SkyDivePic;
  skyDivePic.width = 200;
  skyDivePic.id = "spic";

  headerLogo.src = HeaderLogo;
  headerLogo.width = 100;
  headerLogo.className = "header-logo";

  bigLogo.src = BigLogo;
  bigLogo.className = "my-logo";

  $(headerLogo).appendTo("#logo-holder");
  $(".main-title").html("Thought Render");
  $(profilePic).appendTo(ppholder);
  $(skyDivePic).appendTo(sdholder);
  

  sqr1 = $("<div class= 'container-fluid pattern-a bk-img q1'></div> ");
  sqr2 = $("<div class= 'container-fluid pattern-b bk-img q2'></div> ");
  sqr3 = $("<div class= 'container-fluid pattern-c bk-img q3'></div> ");
  sqr4 = $("<div class= 'container-fluid pattern-d bk-img q4'></div> ");


  /* fade-out cover to reveal logo */
  $(fullCover).animate({
    opacity: .3
  }, 5000);

  /* add elements to page */
  $(sqr1).appendTo(introAnchor);
  $(sqr2).appendTo(introAnchor);
  $(sqr3).appendTo(introAnchor);
  $(sqr4).appendTo(introAnchor);
  $(vLine).appendTo(introAnchor);
  $(hLine).appendTo(introAnchor);
  
  addComponents();
});


window.addEventListener("resize", () => {
  //$(myLogo).delay(10).animate({ left: (fullCover.width() - myLogo.width()) / 2, top: (wHeight - myLogo.height()) / 2 });
  console.log("top: " + $(logoIntroAnchor).offset);
});

window.addEventListener("scroll", () => {
  windowScrollPosition = $(window).scrollTop();
  relativeScroll = (100 / $(window).innerHeight()) * windowScrollPosition;
  /* tell aimation groups to update values */
  scrollCntrlA.updateAtts(relativeScroll);
  scrollCntrlB.updateAtts(relativeScroll);
  /* fade out logo based on scroll position */
  if (windowScrollPosition > 1000) {
    let op: number = (10000 - windowScrollPosition) * .001;
    console.log("op: " + op);

    $(logoIntroAnchor).css("opacity", op);
  }
  
  let resTopPos:number = ((document.getElementById("resume-top").getBoundingClientRect())).y
  let actRes:boolean = false;
  /* horizontaly scroll cityscape behind resume based on scroll position */
  if(resTopPos < 0) {
    actRes = true;
    let newPos:number =((resTopPos)/2);
    let percPos:string =  newPos + "px 0px";
    $("#resume-top").css("background-position", percPos);
  };
})


function addComponents(): void {
  const galleryStripModal: GalleryStripModal = new GalleryStripModal();

  galleryStripModal.appendComponent(mediumHolder);

  const screenCovered = () => {
    $(".navbar").hide();
  };
  const screenUncovered = () => {
    $(".navbar").show();
  };

  galleryStripModal.CoverUp.on(screenCovered);
  galleryStripModal.CoverDown.on(screenUncovered);
}

