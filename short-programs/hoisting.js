/*Hoisting in JS is a mechanism where function and variables declarations are moved to the top of their scope before code execution. Hoisting allows functions to be safely used in code before they are declared.
 */
console.log(getHoisted);
var getHoisted = "This will get hoisted";

// The interpreter sees the above code as follows
var getHoisted;
console.log(getHoisted);
getHoisted = "Hoisted variable";
