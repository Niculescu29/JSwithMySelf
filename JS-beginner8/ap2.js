// variable scope = where a var is recognized and accessible local or global



function function1(){
    let x= 1;
    console.log(x);                  // this is local
}
                                                         // you can declare the same var how many times y want local

function function2(){
    let x= 3;                         // this is local to
    console.log(x);
}


let x = 5;                 /// this is global 



let y = x;                  /// this is global


let x = 8;        // you can't decalare the same var twice global