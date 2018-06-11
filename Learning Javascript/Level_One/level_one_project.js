//initiate all variables we need

var firstName= prompt("What is your first name?")
var lastName = prompt("What is your last name?")
var age = prompt("How old are you?")
var height = prompt("How tall are you?")
var pet = prompt("What is the name of your pet?")


//making all conditions false

var nameCond = false;
var ageCond = false;
var heightCond = false;
var petCond = false;

//check to see if first and last name have same letter
if (firstName[0] === lastName[0]){
  nameCond = true;
}else{
  nameCond =false;
}

//age between 20 and 30
if (age>20 && age<30) {
  ageCond = true;
}else{
  ageCond=false;
}

//height greater than 175cm
if (height>=175) {
  heightCond=true;
}else{
  heightCond=false;
}

//pet name last letter y
if (pet[pet.length-1] === "y") {
  petCond = true;
}else{
  petCond=false;
}

//final result to see if all conditions are true
if (nameCond && ageCond && heightCond && petCond){
  console.log("YOU ARE A SPY!!!!");
}else {
  console.log("You are NOT a spy! Refresh the page and try again!");
}
