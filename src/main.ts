import * as $ from "jquery";
import * as _ from "lodash";
import BigBk from "./img/bigbk.jpg"
import smallbk from "./img/quadbk.png";
require("bootstrap");

const mainBK = new Image();
const test = new Image();

/* prevents code from running until the entire document loads                      */
$(document).ready(function(){
   
  mainBK.src = BigBk;
  mainBK.width = 100;
   
    $("#btn1").click(function(){
      $("p").append(" <b>Appended text</b>.");
    });
  
  
   $(".bg").css("background-image", "mainBK");
  

      test.src = smallbk;
      test.width = 75;
      const mainHolder: JQuery = $( "<div class='main-holder'></div>");
      const siteHeader: JQuery = $("<div></div>").text("Bootstrap: Container-Fluid");
      $(siteHeader).addClass("container-fluid");
      $(mainHolder).append(siteHeader);
      $(".bg").prepend(siteHeader);

  });



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