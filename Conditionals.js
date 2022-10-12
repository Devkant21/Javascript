// 1.

let a = prompt("Enter your age");
a = Number.parseInt(a); //converting the string to a number
if(a<10){
    alert("You are a Kid");
}
else if(a<=18) {
    alert("you are a teenager");
}
else{
    alert("you are an adult");
}
console.log("Done");

// 2. 
if (username == null) // If username is null or undefined,
username = "John Doe";

// 3. 

if (!username) username = "John Doe";

// 4.

if (!address) { 
    address = "";
    message = "Please specify a mailing address.";
}

// 5. 

if (n === 1)
console.log("You have 1 new message.");
else
console.log(`You have ${n} new messages.`);

