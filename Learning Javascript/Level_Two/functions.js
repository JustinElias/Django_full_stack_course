/*Javascript functions
  function name(parameter1,parameter2){
    code to execute
}
*/

//basic
function hello(){
  console.log("hello world");
}

//takes in one parameter
function helloYou(name){
  console.log("hello "+name)
}

//two parameters
function addNum(num1,num2){ //you can concatinate strings with +
  console.log(num1+num2);
}

//default parameters
function helloSomeone(aname = "Justin"){
  console.log("Hello "+aname);
}

//returning results so we can assign to a variable

function formal(name="Leah", title='Miss') {
  return title+" "+name //this save the variable so you can assign it later
}

function timesFive(numInput) {
  //local scope to the function
  var result = numInput *5
  return result
}

//global scope
var v ="Global Variable";
var stuff = "Global stuff";

function fun(stuff){
  console.log(v);
  stuff = "Reassign stuff inside func"
  console.log(stuff);
}

fun();

console.log(stuff);
