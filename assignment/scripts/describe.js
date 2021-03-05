// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
//We make a variable called name and set its value to the string 'Dane'. Using
//an if/else conditional we first check to see if name is equal to the string 'Mary'.
//If that statement proved to be true we would console log 'Hi, Mary!' but since it is
//false we console log the else statement 'How do you do?'.
//
//
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
//We create a variable called secret whose value has not been set yet. We also create
//a variable called code and set the value to 123. Using an if conditional we first check
//to see if the code variable is equal to the number 123. Because it is we will first set the
//value of our variable secret to the string 'super' and then update our variable code to be
//set to its value (123) multiplied by 2. Next we will run a second if conditional and
//check to see if the variable code is greater than the number 250. If it is true we would change the variable
//secret's value to the string 'duper'. However, because the statement is false the variable will
//not change value. Lastly we will console log the variable secret and the console will read out the
//string 'super'.

//
//
//
//

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
//We start with three variables. isStudent is set to true, age is set to 34, and zip is set to 55407.
//Then we move down to the else if conditionals. We first
//check to see if isStudent is equal to true AND zip is greater than 80000. If that is
//true we would console log the string 'You're a student on the West Coast!'. However,
//since only one of those statements is true we move down to the next statement which checks
//if isStudent is equal to false OR age is less than 30. If either one of those were true we
//would console log the string 'What are your hobbies?' but since neither of those are true
//we move to the next statement. This statement asks if isStudent is equal to true and since
//that statment is true we will console log the string 'Welcome to Prime!'.
//
//
//

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*

//Fix: colorOne and colorTwo's values should be swapped. colorOne should be blue
//and colorTwo should be red.
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

//Fix: colorTwo should also be set to purple in the code block.
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;


//Fix: The only thing wrong is that the OR (||) operator should be an AND (&&) Operator.
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- they are, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;


//Fix: The console.logs need to be flipped around so that when age is greater than or equal
//to minAge we console log the string 'enter' instead of 'no entry'.
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
