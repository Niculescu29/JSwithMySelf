// IF STATEMENTS = if a condition is true ,execute some code if not  , do something else 




// let age = 25; 

// if(age >= 18) {
//     console.log('You are old enough');
// }
// else {
//     console.log('You must be 18+ to have acces');
// }





// let time = 9;

// if(time < 12) {
//     console.log("Good morning!");
// }
// else {
//     console.log("Good afternoon!");
// }






// let isStudent = false;

// if(isStudent) {
//     console.log("You are a student");
// }
// else {
//     console.log("You are not our student");
// }






// let age = 35 ;
// let hasLicense = true ;

// if(age >= 16) {
//     console.log("You are old enough");
//     if(hasLicense) {
//         console.log("You have your license");
    
//     }
//     else {
//         console.log("You dont have your license yet!");
//     }
// }
// else {
//     console.log("You must be 16+ to have a license ");
// }








const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age ;


mySubmit.onclick = function() {



  age = myText.value ;
  age = Number(age);

if( age >= 100) {
    
    resultElement.textContent = `You are too old to enter this site`   ;
}

else if( age >= 18) {
   
    resultElement.textContent = `You are old enough to enter this site`;
}

else if(age < 0) {
    
    resultElement.textContent = `Your age cant be smaller than 0`;
}

else {
   
    resultElement.textContent = `You must be 18+ to enter this site!`;
}
};













