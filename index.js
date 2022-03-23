// Imperative Programming

const number = [0,1,2,3,4,5];

const findcube = number.map(num => Math.pow(num, 3));

console.log(findcube);

// const findcube = function(number) {
//   const cube = [];
//   for (let i = 0; i < number.length; i++) {
//   cube[i] = Math.pow(number[i], 3);
//  }
//   return cube;
// }

// console.log(findcube);

// Declarative
// const findcube = number.map(
//     function(number) {
//        return Math.pow(number, 3);
//     });

// console.log(findcube);