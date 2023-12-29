//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

console.log(Object.values(person3))


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

const Person = function (name, age) {
    this.name = name;
    this.age = age;

// Use an arrow to create the printInfo method

    this.printInfo = () => {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    };
// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

    this.addAge = () => {
        this.age += 1;
  };
};

const person4 = new Person('Alex', 32);
const person5 = new Person('Elena', 31);

console.log('Initial info:');
person4.printInfo();
person5.printInfo();

person4.addAge();
person5.addAge();
person4.addAge();
person5.addAge();

console.log('\nInfo after adding age:');
person4.printInfo();
person5.printInfo();


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const checkStringLength = (inputString) => {
    return new Promise((resolve, reject) => {
      if (inputString.length > 10) {
        resolve("Big word");
      } else {
        reject("Small Number");
      }
    });
  };
  

  const exampleString1 = 'Hello World Example'; 
  const exampleString2 = 'Short'; 
  
  checkStringLength(exampleString1)
    .then((message) => {
      console.log(message);
    })
    .catch((message) => {
      console.log(message);
    });
  
  checkStringLength(exampleString2)
    .then((message) => {
      console.log(message);
    })
    .catch((message) => {
      console.log(message);
    });
  