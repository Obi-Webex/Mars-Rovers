"use strict";

(function ($) {
  $(function () {
    $(".sidenav").sidenav();
  }); // end of document ready
})(jQuery); // end of jQuery name space


$(document).ready(function () {
  $(".slider").slider();
});
$(document).ready(function () {
  $(".materialboxed").materialbox();
}); // ***  NASA Api call  ***
//get buttons from page

var curiosity = document.getElementById("but3");
var opportunity = document.getElementById("but1");
var spirit = document.getElementById("but2"); //get the APi source

var urlCuriosity = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=990&camera=fhaz&api_key=";
var urlSpirit = "https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=100&camera=fhaz&api_key=";
var urlOpportunity = "https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=100&camera=fhaz&api_key=";
var myApiKey = "dXTOni9hbfDupYYJxTxW7eGEJ9pDgoQvplYBORVd"; // AJAX function 1

var getCuriosityPics = function getCuriosityPics() {
  var finalUrl, response, data;
  return regeneratorRuntime.async(function getCuriosityPics$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          finalUrl = "".concat(urlCuriosity).concat(myApiKey);
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch(finalUrl));

        case 4:
          response = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(response.json());

        case 7:
          data = _context.sent;
          displayPics(data);
          console.log(data);
          _context.next = 15;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](1);
          console.log(_context.t0);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 12]]);
}; // AJAX function 2


var getSpiritPics = function getSpiritPics() {
  var finalUrl, response, data;
  return regeneratorRuntime.async(function getSpiritPics$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          finalUrl = "".concat(urlSpirit).concat(myApiKey);
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(fetch(finalUrl));

        case 4:
          response = _context2.sent;
          _context2.next = 7;
          return regeneratorRuntime.awrap(response.json());

        case 7:
          data = _context2.sent;
          displayPics(data);
          console.log(data);
          _context2.next = 15;
          break;

        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](1);
          console.log(_context2.t0);

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 12]]);
}; // AJAX function 3


var getOpportunityPics = function getOpportunityPics() {
  var finalUrl, response, data;
  return regeneratorRuntime.async(function getOpportunityPics$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          finalUrl = "".concat(urlOpportunity).concat(myApiKey);
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(fetch(finalUrl));

        case 4:
          response = _context3.sent;
          _context3.next = 7;
          return regeneratorRuntime.awrap(response.json());

        case 7:
          data = _context3.sent;
          displayPics(data);
          console.log(data);
          _context3.next = 15;
          break;

        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](1);
          console.log(_context3.t0);

        case 15:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 12]]);
}; // display function


var displayPics = function displayPics(data) {
  for (pic in data) {
    document.getElementById("p1").src = data[pic][0].img_src;
    document.getElementById("p2").src = data[pic][1].img_src;
    document.getElementById("p3").src = data[pic][0].img_src;
    document.getElementById("p4").src = data[pic][0].img_src;
  }
}; //display slider


var showSliders = function showSliders() {
  var slider = document.querySelectorAll(".slider");
  slider.forEach(function (item) {
    item.style.display = "flex";
  });
  return slider;
};

curiosity.addEventListener("click", getCuriosityPics);
spirit.addEventListener("click", getSpiritPics);
opportunity.addEventListener("click", showSliders, getOpportunityPics);
opportunity.addEventListener("click", getOpportunityPics);