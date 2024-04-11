// function = A section of reusable code.
// declare code once , use it whenever y want.
// call the function to execute that code.



function  happyBirthday(username , age) {

    console.log(`HappyBirthday to you! ${username}!`);
    console.log(`You are ${age} years old`);
}
happyBirthday("BroCode", 25);
happyBirthday("SuperMan", 33);
happyBirthday("Alex", 24);




function add(x , y) {
    let result = x * y ;
    return result;
}

function subtract( x , y) {
    return x - y ;
}

function multiply (x , y) {
    return x * y ;
}

function divide(x , y) {
    return x / y ;
}


function isEven(number){

    return number  % 2 === 0;
}
console.log(isEven(9));

console.log(add(2,3));




function isValidEmail(email)  {
    return !!(email.includes("@")); 
}

console.log(isValidEmail("bro@gss.com"));
console.log(isValidEmail("asldasda@sada"));
console.log(isValidEmail("asdaagg.co"));