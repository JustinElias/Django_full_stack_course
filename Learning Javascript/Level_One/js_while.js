var x =0;

while (x<5){
  console.log("x is currently "+x);

  if(x===3){
    console.log("X is equal to three");
    break
  }

  console.log("x is still less than 5, adding 1 to x");

  x = x+1;
}

//write a while loop that only prings even numbers

var y = 0;

while(y<11){
  if(y%2 ===0){
    console.log(y);
  }
  y=y+1;
}
