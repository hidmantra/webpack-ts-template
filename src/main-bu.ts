import * as $ from "jquery";
import * as _ from "lodash";
import BigBk from "./img/bk-pattern-bw.png"
import smallbk from "./img/quadbk.png";
require("bootstrap");

const myLogo = new Image();
const test = new Image();
let windowScrollPositon: number;
/* prevents code from running until the entire document loads                      */
$(document).ready(function () {
  /// eslint-disable-next-line no-console
  console.log("document loaded");
  myLogo.src = BigBk;
  myLogo.width = 100;
  test.src = smallbk;
  test.width = 75;
  const fullScreen: JQuery = $("#bg");
  const mainHolder: JQuery = $("<div class= 'container-fluid' ");
  const siteHeader: JQuery = $("<div></div>").text("Bootstrap: Container-Fluid");
  $(siteHeader).addClass("container-fluid");
  $(mainHolder).css("background-image", "test");

  $(mainHolder).append(siteHeader);

  const testBtn: JQuery = $("<button>click me</button>").addClass(["btn", "btn-primary"]);
  $(testBtn).click(function () {
    $(siteHeader).append(" <b>Appended text</b>.");
  });
  $(mainHolder).append(testBtn);

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
 )