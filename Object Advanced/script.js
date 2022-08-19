// // 1. Object literal
// let user = { // Create Object
//     name : "Anggi Satria",// Create identifier
//     health : 7,
//     eat : function(much){ // Create Method
//         this.health += much // Search health by this/windows and then health + parameters
//         console.log(`Hello ${this.name} welcome`); // Print String
//     }
// }
// console.log(user.eat(8)); // Call Object method define parmeters
// console.log(user);  // Call Result

// 2. Function Declaration 

// function user(name, health){ // Declaration Function with parameters
//     let users = {} // Create Object
//     users.name = name; // users.name = parameters name
//     users.health = health; // users.health = parameters health
    

//     users.eat = function(much){ // Create Method with parameters
//         this.health += much; // Search health by this / windows on DOM the health increment with parameters much
//         console.log(`Hallo ${this.name} Enjoy Your Meal`); // Print result
//     }

//     users.play = function(time){ // Create Method with parameters
//         this.health -= time; // Search time by this / windows on DOM health increment with parameters time
//         console.log(`Hallo ${this.name} Enjoy The Game`); // Print result
//     }

//     return users;  // return function
// }

// let Anggi = user('Anggi', 20)  // Initialize Anggi fill with funvtion users and send the parameters
// let Satria = user('Satria', 30) // Initialize Satria fill with funvtion users and send the parameters

// console.log(Anggi.eat(10)); // Call and send object eat with parameters
// console.log(Anggi); // Call Init Anggi
// console.log(Satria); // Call Init Satria

// 3. Constructor Function with key new

function user(name, health){ // Declaration Function with parameters
    this.name = name; // users.name = parameters name
    this.health = health; // users.health = parameters health
    

    this.eat = function(much){ // Create Method with parameters
        this.health += much; // Search health by this / windows on DOM the health increment with parameters much
        console.log(`Hallo ${this.name} Enjoy Your Meal`); // Print result
    }

    this.play = function(time){ // Create Method with parameters
        this.health -= time; // Search time by this / windows on DOM health increment with parameters time
        console.log(`Hallo ${this.name} Enjoy The Game`); // Print result
    }

}

let Anggi = new user('Anggi', 20)  // Initialize Anggi fill with funvtion users with new and send the parameters
let Satria = new user('Satria', 30) // Initialize Satria fill with funvtion users with new and send the parameters

console.log(Anggi.eat(10)); // Call and send object eat with parameters
console.log(Anggi); // Call Init Anggi
console.log(Satria); // Call Init Satria