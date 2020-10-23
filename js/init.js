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
});

// ***  NASA Api call  ***

//get buttons from page

const curiosity = document.getElementById("but3");
const opportunity = document.getElementById("but1");
const spirit = document.getElementById("but2");

//get the APi source
const urlCuriosity =
  "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=990&camera=fhaz&api_key=";
const urlSpirit =
  "https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=100&camera=fhaz&api_key=";
const urlOpportunity =
  "https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=100&camera=fhaz&api_key=";
const myApiKey = "dXTOni9hbfDupYYJxTxW7eGEJ9pDgoQvplYBORVd";

// AJAX function 1

const getCuriosityPics = async () => {
  const finalUrl = `${urlCuriosity}${myApiKey}`;
  try {
    const response = await fetch(finalUrl);
    const data = await response.json();
    displayPics(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// AJAX function 2

const getSpiritPics = async () => {
  const finalUrl = `${urlSpirit}${myApiKey}`;
  try {
    const response = await fetch(finalUrl);
    const data = await response.json();
    displayPics(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// AJAX function 3

const getOpportunityPics = async () => {
  const finalUrl = `${urlOpportunity}${myApiKey}`;
  try {
    const response = await fetch(finalUrl);
    const data = await response.json();
    displayPics(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// display function

const displayPics = (data) => {
  for (pic in data) {
    document.getElementById("p1").src = data[pic][0].img_src;
    document.getElementById("p2").src = data[pic][1].img_src;
    document.getElementById("p3").src = data[pic][0].img_src;
    document.getElementById("p4").src = data[pic][0].img_src;
  }
};

//display slider

const showSliders = () => {
  const slider = document.querySelectorAll(".slider");
  slider.forEach((item) => {
    item.style.display = "flex";
  });
  return slider;
};

curiosity.addEventListener("click", getCuriosityPics);
spirit.addEventListener("click", getSpiritPics);
opportunity.addEventListener("click", showSliders, getOpportunityPics);
opportunity.addEventListener("click", getOpportunityPics);
