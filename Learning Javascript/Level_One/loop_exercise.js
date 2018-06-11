//problem 1

//Use a for loop to print out the word "hello" 5 times.

//do this with a while loop

var s="Hello"
var t=0

while (t<5) {
  console.log(s);
  t++
}
//do this with a for loops

for (var i = 0; i < 5; i++) {
  console.log("Hello");
}

//PROBLEM 2

//use loops to console.log all the odd numbers from 1 to 25


//While loop

var x =1;

while(x<26){
  if (x%2 !== 0){
    console.log(x);
  }
  x++
}

//for loop
for (var i = 1; i < 26; i++) {
  if (i%2 !== 0){
    console.log(i);
  }
}
