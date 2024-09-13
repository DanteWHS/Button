
/* Global variables */
var who = "wooden shoe";
var joke = "Wooden shoe like to know!";
var expected = who + " who?";

function custom(){
	prompt("why did you press that");
	prompt("do you just press any button you see?");
	if (answer=="yes") prompt("I'm sure that hasn't caused any problems");
	else


function sayHello(){
	alert("Hello, world!");
}
/* Simple version */
function knock(){
  prompt("Knock Knock!");
  prompt(who);
  alert(joke);
}

/* Better */
function knockCheck(){
  prompt("Knock Knock!");
  var answer = prompt(who);
   expected = who + " who?";
  if (answer == expected) alert(joke);
  else alert("Huh?");
}

/* Best */
function knockAgain(){
  prompt("Knock Knock!");
  var answer = prompt(who);
  if (answer == expected) alert(joke);
  if (answer == joke) alert("Bruh");
  // this next line is "recursion". 
  else askAgain();
}

function askAgain() {
  alert("Huh?");
  var answer = prompt(who);
  // what is the difference between = and ==?
  if (answer == expected) alert(joke);
  else askAgain();
