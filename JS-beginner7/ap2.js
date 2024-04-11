// while loop = repeat some code WHILE some condition is true



// let username = "";

//  while(username === ""){
//     console.log(`You didnt enter your name`);
//  }
//  console.log(`Hello ${username}`);





//  while( username === "") {
//     username = window.prompt(`Enter your name`);
//  }
//  console.log(`Aloha ${username}`);



//  while( username === "" || username === null) {
//     username = window.prompt(`Your name is ${username}`);
//  }



//  do {
//     username = window.prompt(`Enter data here ${username}`);
//  }
//  while(username != "" || username == "")
//     console.log(`that's working okay!`);












    let loggedIn = false;
    let username;
    let password;

    while(!loggedIn){
        username = window.prompt(`Enter your username`);
        password = window.prompt(`Enter your password`);

        if(username === "myUsername" && password === "myPassword") {
            loggedIn = true 
            console.log("You are logged in!");
        }
        else {
            console.log("Invalid cred! Try again!");
        }
    } while(!loggedIn);

 