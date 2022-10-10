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


//ternary operator

console.log("you can", a<18? "not" : "enter");