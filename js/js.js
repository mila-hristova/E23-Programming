/**
 * file: js/js.js
 * purpose: Behaviors
 **/
console.log("Space the final frontier...");

/* I am a comment 
and I can fill out more than one line
*/

// I am a one liner comment

/* Variables and how to create them */
let myCow = "Milka";
var anotherCow = "Caramel";
let myBook = "It was a dark and stormy night, and Joe's gun ... \n";
const grandMa = "Berta";

console.log(
    myBook 
    + " " 
    + grandMa 
    + " " 
    + myCow
    );

/* numbers */
let lucky = 7;
let disaster = 13;
const noChange = 333;

console.log(lucky / disaster);

/* booleans: true or false */
const santaExists = true;
console.log(santaExists);

/* comparisons */
console.log(lucky >= disaster);

/** Write to some HTML ID */
hi.innerHTML = "<p>" + myBook + "<p>";

/** Several lines in a variable */
let pizza = `
    <article>
    <h2> Margherita </h2>
    <img src="images/Margherita.png" alt="Margherita">
    <p> This wonderful ... </p>
    </article>
`;

// Inject this into #hi
hi.innerHTML += pizza; 

/** Function: a series of instructons */
let boom = function(){
    alert("We use cookies, and we track all you do! Consent?");
    console.log("Cookie info fired off!");
    return true;
}