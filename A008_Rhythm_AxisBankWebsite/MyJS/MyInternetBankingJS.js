// JavaScript Document
$(document).ready(function () {
  "use strict";
  $(function () { //FOR BUTTONS
    $(".widget input[type=submit], .widget a, .widget button").button();
    $("button, input, a").click(function (event) {
      event.preventDefault();
    });
  });
})
