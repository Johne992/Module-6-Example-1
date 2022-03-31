alert("Hi I'm an alert box");


// A string that has my name
var johnName = "John"; 
var johnBday = 15;
console.log(johnName);
console.log(johnBday);
// confirm returns true or false based on what the user clicks and it gets saved into puppy
var puppy = confirm("Is this puppy a hyena?");
console.log(puppy);

var jlastName = prompt("What is your last name?");
console.log(jlastName);


var nickname = "Nina";
nickname = "Nina" + 3;
console.log(nickname);

if(nickname == "nina"){
  console.log("You are Nina!");
}
else{
  console.error("You are an imposter!");
}


var ashleyName = "Ashley";
console.log(ashleyName);




var tamikaName = "Tamika";
var tlastName = "Taylor"
fullname = tamikaName + tlastName;
console.log(fullname);

var nickname = "Ms. Taylor"
nickname = "Ms. T. Taylor"
console.log(nickname);

if (nickname == "Ms. Taylor"){
  console.log ("Welcome, Ms. Taylor")
}
else{
  console.error("That's not it.")
}

//Sharon//
function myFunction() {
var time = new Date().getHours();
if (time < 10) {
  greeting = "Great morning";
} else if (time < 20) {
  greeting = "Great day";
} else {
  greeting = "Great evening";
}
document.getElementById("demo").innerHTML = greeting;
//Sharon End//