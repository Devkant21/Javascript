/*Currying is a functional programming technique which transforms a function that takes multiple arguments into a sequence of nesting functions that each take only a single argument.
 */
/* We have a basic function getPyramidVolume that takes a length, width and height of a pyramid and returns the pyramid’s volume.*/
getVolume = (length, width, height) => {
  return (length * width * height) / 3;
};
const pyramid1 = getVolume(5, 12, 14);
console.log(pyramid1);

// With Currying
const getPyramidVolume = (length) => {
  return (width) => {
    return (height) => {
      return (length * width * height) / 3;
    };
  };
};
const pyramid2 = getPyramidVolume(5)(12)(14);
console.log(pyramid2);
