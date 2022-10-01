const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter your full name: ", (fullName) => {
    console.log(`Hello ${fullName} from NodeJS!!`);
    readline.close();
});