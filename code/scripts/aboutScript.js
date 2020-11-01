import * as helper from "../scripts/script.js";

function main() {
  var currentDate = new Date();
  var myAge = calculateAge(currentDate);
  document.getElementById("ageStatement").innerHTML = myAge;

  aboutInnerNav("modelingButton");

  var aboutRows = document.getElementsByClassName("aboutRow");
  for (var i = 0; i < aboutRows.length; i++) {
    console.log(aboutRows[i]);
    helper.matchHeight(aboutRows[i]);
  }
}



function calculateAge(date) {
  var birthDate = new Date("1996-09-10");
  var years = (date.getFullYear() - birthDate.getFullYear());

  if (date.getMonth() < birthDate.getMonth() || 
      date.getMonth() == birthDate.getMonth() && date.getDate() < birthDate.getDate()) {
      years--;
  }

  return years;
}

function aboutInnerNav(id) {
  // implements the functionality of the navbar under the hobbies section on the About page
  // requires an id argument given by the onclick event in the html

  // set all buttons to be classless
  var innerNav = document.getElementById("aboutInnerNav").getElementsByTagName("div");
  for (var nav = 0; nav < innerNav.length; nav++){
    innerNav[nav].className = "";
  }
  
  // hide all contentrows
  var aboutRows = document.getElementsByClassName("aboutRow");
  for (var row = 0; row < aboutRows.length; row++){
    aboutRows[row].style.display = "none";
  }

  // set clicked button as active
  document.getElementById(id).className = "aboutInnerActive";

  // set to display corresponding row content
  if (id == "modelingButton"){
    document.getElementById("modeling").style.display = "block";
  } 
  else if (id == "drawingButton"){
    document.getElementById("drawing").style.display = "block";
  } 
  else if (id == "danceButton"){
    document.getElementById("dance").style.display = "block";
  } 
  else {
    document.getElementById("music").style.display = "block";
  }
}



main();