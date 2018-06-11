//student roster

//create an empty student array_exercise
var roster = []

//add a new student

//create a function called addNew that takes in a name
//and use .push to add a new student to the array
function addNew() {
  var newName=prompt("What name would you like to add?")
  roster.push(newName)
}

//Remove student

function remove(){
  var remName = prompt("What name would you like to remove?")
  var index = roster.indexOf(remName);
  roster.splice(index,1)
}

//Display Roster

//create a function called display that prints out the roster to the console

function display() {
  console.log(roster);
}

//create a while loop that keeps asking for an action (add,remove, display)

//use if and else if staements to execute the correct functions for each command

var start = prompt("Would you like to start the roster web app? y/n");
var request = "empty"

if (start === 'y') {
  while (request !== "quit") {
    request = prompt("Please select an action: add, remove, display, or quit.")
    if (request === 'add') {
      addNew()
    }else if (request === 'display') {
        display();
    }else if (request === 'remove'){
      remove();
    }
  }
}

alert("Thanks for using the Web App! Please refresh to start over075")
