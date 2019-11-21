// JavaScript Document

$(document).ready(function () {
  "use strict";
  $(function () {
    var availableTags = [ //For Search bar: The following appear as and when the user types in keys according to their alphabetic preference
      "Forex Services in India",
      "FD - Open Fixed Deposit Account Online at Best Interest Rates",
      "Interest Rates for Fixed & Recurring Deposits",
      "Interest Rates for Fixed & Recurring Deposits",
      "Internet Banking"
    ];
    $("#tags").autocomplete({
      source: availableTags

    });
  });

})
