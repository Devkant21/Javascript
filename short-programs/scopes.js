// Function vs Block Scoped Variables
let fullMoon = true;
// Initialize a global variable
let species = "human";

if (fullMoon) {
  // Initialize a block scoped variable
  let species = "Wolf";
  console.log(species);
}

console.log(species);
