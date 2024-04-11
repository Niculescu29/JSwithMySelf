// spread operator == allows an iterable such as an array or string to be expanded into separate elements




let number = [1,2,3,4,5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);




let username = "Alex N.";
let letters = [...username];

console.log(letters);



let fruits = ["apple" , "banana" , "mango"];
let newFruits = [...fruits];

console.log(newFruits);










let fructe = ["apple" , "banana" , "mango"];
let legume = ["carrots" , "celery" , "potatoes"];

let foods = [...fructe , ...legume , "eggs" ];

