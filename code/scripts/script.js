function aboutMain() {
  var currentDate = new Date();
  var myAge = calculateAge(currentDate);
  document.getElementById("ageStatement").innerHTML = myAge;

  aboutInnerNav(document.getElementById("modelingButton"), document.getElementById("modeling"));
  allRowResize();
  aboutInnerVisibility();
}

function YCNtMain() {
  innerNav(document.getElementById('devopsButton'), document.getElementById('devops'));
  allRowResize()
}

function aboutResize() {
  allRowResize();
  aboutInnerVisibility();
}

function resizing() {
  allRowResize();
  centerProgramText();
}



// =============================== General functions ============================

function matchHeight(element) {
  // gathers all elements within the given element
  var elementsList = element.children;

  // finds the largest height of the divs
  var maxHeight = 0; 
  for (var i = 0; i < elementsList.length; i++){
    var div = elementsList[i];

    // reset height to fit-content recalculate its minimal height
    div.style.height = "fit-content";

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

function openInTab(link) {
  window.open(link, "_blank");
}

function centerProgramText() {
  // Defines padding and height to center text in divs of class programText 
  var programTexts = document.getElementsByClassName("programText");
  if (programTexts != null) {
    for (var i = 0; i < programTexts.length; i++) {
      // gathers element height and calculates new height
      // padding + newHeight = old height
      var textElement = programTexts[i];
      var height = parseInt(textElement.style.height, 10);
      var padHeight = (height - 57) / 2;
      var newHeight = height - padHeight;
      textElement.style.paddingTop = padHeight.toString() + "px";
      textElement.style.height = newHeight.toString() + "px";
    }
  }
}

function allRowResize() {
  var contentRows = document.getElementsByClassName("contentRow");
  for (var i = 0; i < contentRows.length; i++){
    var row = contentRows[i];
    matchHeight(row);
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

function aboutInnerNav(buttonElement, rowElement) {
  // implements the functionality of the navbar under the hobbies section on the About page
  // requires an id argument given by the onclick event in the html

  // set all buttons to be classless
  var innerNav = document.getElementById("aboutInnerNav").getElementsByTagName("div");
  for (var nav = 0; nav < innerNav.length; nav++){
    innerNav[nav].className = "";
  }
  
  // hide all content rows by resetting their class to contentrow and aboutRow
  var aboutRows = document.getElementsByClassName("aboutRow");
  for (var row = 0; row < aboutRows.length; row++){
    aboutRows[row].className = "contentRow aboutRow";
  }

  // set clicked button as active
  buttonElement.className = "aboutInnerActive";

  // set to display corresponding row content
  rowElement.className += " aboutInnerVisible"
  aboutInnerVisibility()
}


function aboutInnerVisibility() {
  // resizes the elements within the visible row under the hobbies section so their
  // heights match.
  matchHeight(document.getElementsByClassName("aboutInnerVisible")[0]);
}

// ====================== mprog page ==============================================

// ====================== YCNT page ===============================================
function innerNav(buttonElement, showElement) {
  // implements the functionality of the navbar under the DevOps section on the traineeship page
  // requires an id argument given by the onclick event in the html

  // set all buttons to be classless
  var innerNavBar = document.getElementsByClassName("innerNav")[0].getElementsByTagName("div");
  for (var nav = 0; nav < innerNavBar.length; nav++){
    innerNavBar[nav].className = "";
  }
  
  // hide all nav elements by resetting their styling to none
  var navElements = document.getElementsByClassName("navElement");
  for (var nav = 0; nav < navElements.length; nav++){
    navElements[nav].style.display = "none";
  }

  // set clicked button as active
  buttonElement.className = "innerActiveButton";

  // set to display corresponding row content
  showElement.style.display = "block";
  resizing();
}