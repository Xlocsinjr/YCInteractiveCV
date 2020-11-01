

export function matchHeight(element) {

  // gathers all divs within the given element
  var elementsList = element.getElementsByTagName("div");
  console.log(elementsList);

  // finds the largest height of the divs
  var maxHeight = 0; 
  for (var i = 0; i < elementsList.length; i++){
    var div = elementsList[i];
    var divHeight = div.style.height;
    if (divHeight > maxHeight){
      maxHeight = divHeight;
    }
  }

  // applies the largest height to all the divs in the given element
  for (var i = 0; i < elementsList.length; i++){
    elementsList[i].style.height = maxHeight;
  }
}