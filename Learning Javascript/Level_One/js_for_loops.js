/*
for(statement1;statement2;statement3){
  //execute code
}

for(var i =0;i<5;i++){
  //execute code
}

*/

//basic for loop
for (var i = 0; i < 5; i++) {
  console.log("Number is "+i);
}

var word = "ABCDEFGHIJK";

for (var i = 0; i < word.length; i++) {
  console.log(word[i]);
}

var even ="ABDCEFGHI";

for (var i = 0; i < even.length; i=i+2) {
  console.log(even[i]);
}
