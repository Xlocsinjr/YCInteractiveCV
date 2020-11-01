function aboutMain() {
  var currentDate = new Date();
  var myAge = calculateAge(currentDate);
  document.getElementById("ageStatement").innerHTML = myAge;

  aboutInnerNav("modelingButton");
}

function mprogMain() {
  var contentRows = document.getElementsByClassName("contentRow");
  console.log(contentRows);
  for (var i = 0; i < contentRows.length; i++){
    var row = contentRows[i];
    matchHeight(row);
  }
}


// =============================== General functions ============================

function matchHeight(element) {
  console.log("triggered", element);

  // gathers all elements within the given element
  var elementsList = element.children;

  // finds the largest height of the divs
  var maxHeight = 0; 
  for (var i = 0; i < elementsList.length; i++){
    var div = elementsList[i];
    var divHeight = div.offsetHeight;
    if (divHeight > maxHeight){
      maxHeight = divHeight;
    }
  }

  // applies the largest height to all the divs in the given element
  for (var i = 0; i < elementsList.length; i++){
    elementsList[i].style.height = maxHeight.toString() + "px";
  }
}




//  ============================================ About page ===========================
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
  var element;
  if (id == "modelingButton"){
    element = document.getElementById("modeling");
    element.style.display = "block";
    matchHeight(element);
  } 
  else if (id == "drawingButton"){
    element = document.getElementById("drawing");
    element.style.display = "block";
    matchHeight(element);
  } 
  else if (id == "danceButton"){
    element = document.getElementById("dance");
    element.style.display = "block";
    matchHeight(element);
  } 
  else {
    element = document.getElementById("music");
    element.style.display = "block";
    matchHeight(element);
  }
}


