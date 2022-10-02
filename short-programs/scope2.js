/* We have a function called hello(), and we define a variable called “phrase” WITHIN the function. If we are trying to access the variable “phrase” from the outside of a function, we are going to get this error:
 */
var person = "Alok";

function hello() {
  var phrase = "Hello";
  console.log(phrase + " Dylan");
}
console.log(phrase);

// However, if we define a global variable, and try to use it inside the function:
var person2 = "Dylan";
function hello() {
  var phrase = "Hello";
  console.log(phrase + " " + person);
}
hello();
