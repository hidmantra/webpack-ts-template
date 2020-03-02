import * as $ from "jquery";
import * as _ from "lodash";
import "./custom.scss";
require("bootstrap");



/* prevents code from running until the entire document loads                      */
$(document).ready(function(){
    /*
    $("#btn1").click(function(){
      $("p").append(" <b>Appended text</b>.");
    });
    */
  

      const siteHeader: JQuery = $("<div></div>").text("Bootstrap: Container-Fluid");
      $(siteHeader).addClass("container-fluid");
      $("body").prepend(siteHeader);

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