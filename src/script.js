// TASK 3: THE ALERT FUNCTION
// The alert function creates a small pop-up box in the browser.
//alert("Welcome to our homepage");


// TASK 4: VARIABLES (DECLARING AND INITIALIZING)
// Declaring a variable means creating its name using 'let' or 'const'.
// Initializing means assigning a value to it using the '=' sign.
let corseName = "Web Development";

// TASKS 5, 6, & 7: PROMPTING AND STORING USER INPUT
// Task 5 & 6: Take input using prompt() and store it in a variable named 'studentName'
let studentName = prompt("Please enter your name: ")

// Task 7: Alert the user's input back to the screen
alert( studentName)


// TASK 8: CONCATENATION VS INTERPOLATION
// Scenario: We want to say hello to the student using their input name.
let favouriteLanguage = "CSS";

// Approach A: String Concatenation (The old way)
// This uses regular quotes (" ") and joins pieces of text using the plus (+) sign.
//let message ="Hello"+ studentName + ", welcome to the " + favouriteLanguage +" class !"
//alert(message);

// Approach B: String Interpolation using Template Literals (The modern way)
// This uses backticks (``) located right under the Esc key, NOT single quotes ('').
// It allows us to inject variables directly inside the text using the ${variableName} syntax.

let message =`Hello ${studentName}, Welcome to the ${favouriteLanguage} class!`;
alert(message);

// TASK 9: COMMENTING IN JAVASCRIPT
//single line comment
/* 
multiple line comment m
*/