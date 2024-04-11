// array = a var like strcture that can hold more than 1 value


let fruits = ["apple" , "orange" , "banana"];

for(let i = 0 ; i < fruits.length; i++){
    console.log(fruits[i]);
}


fruits[3] = "coconut";

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);



 ///        push add in the end         ////    pop add in the start 
 ///     unshift and shift to delete an element from start or beggining


 let numOfFruits = fruits.length;
 let index = fruits.indexOf("apple");
//  console.log(numOfFruits);