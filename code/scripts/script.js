var currentDate = new Date();
var birthDate = new Date("1996-09-10")


function calculateAge (date) {
  var years = (date.getFullYear() - birthDate.getFullYear());

  if (date.getMonth() < birthDate.getMonth() || 
      date.getMonth() == birthDate.getMonth() && date.getDate() < birthDate.getDate()) {
      years--;
  }

  return years;
}

var myAge = calculateAge(currentDate);
document.getElementById("ageStatement").innerHTML = myAge;