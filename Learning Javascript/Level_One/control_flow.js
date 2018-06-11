var hot = false;
var temp = 100;

if (temp>80){
  hot=true;
}

console.log(hot);

if (temp>80){
  console.log("It is hot outside!");
}else {
  console.log("It is not hot out today");
}

if(temp>80){
  console.log("It is "+temp+" degrees out!")
}else if (temp<=80 && temp>=50) {
  console.log("It is average temperature outside")
}else if (temp<50 && temp>=32) {
  console.log("It isn't snowing out yet!")
}else{
  console.log("It is VERY cold outside!")
}

var ham = 10;
var cheese = 10;

var report = "blank";

if (ham>=10 && cheese>=10) {
    report="Strong sales of both ham and cheese"
}else if (ham===0 && cheese ===0) {
  report="Nothing Sold!"
}else{
  report = "We had some sales of items!"
}


console.log(report);
