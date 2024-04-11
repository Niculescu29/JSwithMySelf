//rest parameters = ...rest   /   allow a function work with a var number of arguments by bundling them into an array




function openFridge(...foods) {
    console.log(foods);
}
  

function getFood(...foods) {
    return foods;
}

const food1 = "pizza";
const food2 = "sushi";
const food3 = "hotdog";
const food4 = "hamburger";

// openFridge(food1 , food2 ,food3 , food4);


const foods = getFood(food1 , food2 ,food3  ,food4);

console.log(foods);





function sum(...numbers){
    let result = 0;
    for(let number of numbers) {
        result += number;
    } 
    return result / numbers.length;
}
const total = getAverage(75 , 100 , 40 , 20);
console.log(`Your total is $ ${total}`);






combineString(...strings){
    return strings.join(" ");
}

const fullName = combineString("Mr." , "SpongeBob" , "Batman" , "IV");
