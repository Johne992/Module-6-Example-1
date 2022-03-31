var johnCena;
console.log(johnCena);

var johnCar = {make:'Isuzu', model:'I-290', year: 2007};
console.log(johnCar.make);
console.log(johnCar['year']);

var johnCar2 = ["Isuzu","I-290","2007"];
console.log(johnCar2[0]);

console.log(johnName + " Lewis");
var a = 9;
var b = 10;
var c = a + b;
console.log(c);
// makes a constant d that will always have the value of 11
const d = 11;
console.log(d); 
// is a greater than b
console.log( a > b);
// is a less than b
console.log(a < b );
// is a equal to b
console.log( a = b);
// is a greater than or equal to b
console.log( a >= b);
// are a and b not equal
console.log( a != b);
var f = a > b;
console.log(f);

var userName; // = "john";
var userNameCheck = "John";

//this statement runs if its condition is true so if userName is the exact same as userNameCheck
if (userName == userNameCheck){
  console.log("Welcome"); 
}
// what happens when the 'if' statement is not true
else if (userName == undefined){
  console.log("No username given");
}
//What happens if neither of the above are true!
else{
  console.log("Wrong Username");
}

// creates the variable and assigns the value 0 to it
var i = 0;

//the code beneath this will run while the condition i < 3 is true
while (i < 3){
  console.log("X");
  i++; // the same as i = i + 1;
}

i = 0;
var j = 10;

do {
  j--;
  i++;
}

while (i < 3)
