// How to accept user input

// 1. EASY WAY = window prompt
// 2. PROFF WAY = HTML textbox 


 
let username ;
  // 1.
username = window.prompt("What's your user name?");

console.log(username);


//2. 
document.getElementById("mySubmit").onclick = function() {
 username = document.getElementById("myText").value ;
 document.getElementById("myH1").textContent = `Hello ${username}`;
} ;
