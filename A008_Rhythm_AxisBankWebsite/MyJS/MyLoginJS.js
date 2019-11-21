// JavaScript Document
$(document).ready(function () {
"use strict";
$(function () { //for buttons
  $(".widget input[type=submit], .widget a, .widget button").button();
  $("button, input, a").click(function (event) {
    event.preventDefault();
  });
});
//for input text boxes in the form
var tooltips = $("[title]").tooltip({
  position: {
    my: "left top",
    at: "right+5 top-5",
    collision: "none"
  }
});
$("<button>")
  .text("Show help")
  .button()
  .on("click", function () {
    tooltips.tooltip("open");
  })
  .insertAfter("form");
});
})
