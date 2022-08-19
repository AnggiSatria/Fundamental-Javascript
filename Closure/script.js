// first
function init(){ // outer function
    let name = "Anggi Satria" // lexical scope
    function printName(){// closure with inner function
        console.log(name); // call variable name with closure
    }
    return printName; // return inner fucntion without call for action ()
}
let callName = init() // declaration variable to save action init
callName()// call init to do action

// second

function sayHello(time) {// declaration function with parameter time
    return function (name){// declaration function with parameter name
        console.log(`Hello ${name}, good ${time} have a great day`); // print Name and Time
    }
}

let goodMorning = sayHello("Good Morning") // declaration variable to save function say hello and fill the parameter

goodMorning("Anggi Satria") // call action and fill with parameter