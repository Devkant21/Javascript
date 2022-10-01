/* A short program to check if a string
is a palindrome -- using ES6 spread operator */
function isPalindrome(someString) {
    // reverse, join and compare
    let reversed = [...someString].reverse().join(" ");
    return someString === reversed;
}

let str1 = "ana";
let str2 = "banana";
let str3 = "kayak";

isPalindrome("str1");
isPalindrome("str2");
isPalindrome("str3");