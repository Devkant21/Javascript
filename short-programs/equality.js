/* The values would get compared with == because of the type coercion, but strings will never equal numbers with === */
console.log(Number("7") - 7 == 0);
console.log(Number("7") - 7 === 0);
console.log(Number("7") - 7 === Number("0"));
console.log("7" - 7 == "0");
// No coersion occurs below
console.log("7" - 7 === "0");
