// 39 task - Introduction to testing





















// 1 task

// Javascript basics

// const monthlyRent = 500;

// let yearlyRent = monthlyRent * 12;

// console.log(yearlyRent);
// console.log(monthlyRent, yearlyRent),

// yearlyRent = 1;
// console.log(yearlyRent);




// 2 task

// const myName = "Kerim Imamovic";
// console.log(myName);





//3 task

// const firstName = "Kerim";
// const lastName = "Imamovic";

// const sentence = "Hello " + firstName + " " 
// + lastName + "! How are you today ?";

// console.log(sentence);





// 4 task

// const firstName = "Kerim";
// const lastName = "Imamovic";

// const sentence = `Hello ${firstName} ${lastName}! 
// How are you today?`;

// console.log(sentence);





//5 task

// const isTheSkyBlue = true;

// console.log(isTheSkyBlue);

// let isTheSkyBlue

// console.log(isTheSkyBlue);
//undefined

// let myName = "Kerim";

// myName = "12345";

// myName = true;

// console.log(myName);





//6 task

// const num = 5;
// const num1 = 10.12345;
// const num2 = -123

// console.log(num);
// console.log(num1);
// console.log(num2);

//in console
// Number.MAX_SAFE_INTEGER
// Number.MIN_SAFE_INTEGER





//7 task - Control flow
//if - else condition

// const isSkyBlue = true;

// if (isSkyBlue) {
//     console.log("The sky is blue.");
// } else {
//     console.log("Thy sky is not blue");
// }

// const isSkyBlue = true;

// let greeting;

// if (isSkyBlue) {
//     greeting = 'It must be nice weather :)';
// } else {
//     greeting = 'It must be bad weather :('
// }

// console.log(greeting);





//8 task - Equality comparisons

// if (2 + 2 === 4) {
//     console.log("Hooray! The math still works");
// } else {
//     console.log('Panic');
// }


// if (2 + 2 == 4) {
//     console.log("Hooray! The math still works");
// } else {
//     console.log('Panic');
// }


// if (2 + 2 == "4") {
//     console.log("Hooray! The math still works");
// } else {
//     console.log('Panic');
// }


// if (2 + 2 === "4") {
//     console.log("Hooray! The math still works");
// } else {
//     console.log('Panic');
// }





// 9 task - If statement


// const areTheLightsOn = true;

// if (areTheLightsOn) {
//     // turn the lights off
// } else {
//     // turn the lights on
// }





// 10 task - else if statement

// const friendsAtYourParty = 10;

// if (friendsAtYourParty === 0) {
//     console.log('Cool, now I have all the nachos for myself');
// } else if (friensAtYourParty <= 4) {
//     console.log('Perfect amount to play some Mario Kart');
// } else {
//     console.log('Wooooooooo');
// }





//11 task - loops - while

//infinite loop do not try this !!!
// let friendsAtYourParty = 0;

// while(friendsAtYourParty < 10) {
//     friendsAtYourParty = friendsAtYourParty;
// }

// console.log(friendsAtYourParty);


// let friendsAtYourParty = 0;

// while(friendsAtYourParty < 10) {
//     console.log(friendsAtYourParty);
//     friendsAtYourParty = friendsAtYourParty + 1;
// }

// console.log(friendsAtYourParty);


// let friendsAtYourParty = 0;

// friendsAtYourParty = friendsAtYourParty + 1;
// friendsAtYourParty = friendsAtYourParty + 1;
// friendsAtYourParty = friendsAtYourParty + 1;
// friendsAtYourParty = friendsAtYourParty + 1;
// friendsAtYourParty = friendsAtYourParty + 1;

// console.log(friendsAtYourParty);





//12 task - Adding comments

//this is some comment to my future myself





// 13 task - Incrementing

// let friendsAtYourParty = 0 

// while (friendsAtYourParty < 10) {
//     friendsAtYourParty = friendsAtYourParty + 1;
//     friendsAtYourParty += 1;
//     friendsAtYourParty++;
//     console.log(friendsAtYourParty);
// }

// console.log(friendsAtYourParty);





//14 task - incrementing in loops

// let friendsAtYourParty = 0;

// for (let i = 0; i < 10; i++){
//     friendsAtYourParty++;
// }

// console.log(friendsAtYourParty);




// 15 task - Looping exercise

// const character = 't';
// const timesRepeat = 5;
// let myString = '';

// console.log(myString);





// 16 task - Looping solution

// const character = 'f';
// const timesToRepeat = 5;
// let answer = '';

// for (let i = 0; i < timesToRepeat; i++){
//     answer = answer + character;
// }

// console.log(answer);






// 17 task - functions and parameters

// function addTwo(number){
//     return number + 2;
// }

// const finalAnswer = addTwo(5);
// const finalAnswer2 = addTwo(10);

// console.log(finalAnswer);
// console.log(finalAnswer2);


// function giveBackFive(){
//     return 5;
// }

// console.log(giveBackFive());


// function add(num1, num2){
//     return num1 + num2;
// }

// console.log(add(10,5));


// function add2(num1, num2){
//     return num1 + num2;
// }

// const finalAnswer3 = add2(10,15);
// console.log(finalAnswer3);


// function greet(firstName, lastName, number) {
//     return `Hello. My name is ${firstName} ${lastName}. I'm ${number} years old.`;
// }

// console.log(greet("Kerim", "Imamovic", 25));

// console.log(greet);
// console.log(greet());
// greet("Kerim", "Imamovic", 25);


// const myHomeCity = "Sarajevo";
// const myHomeState = "KS";
// const myHomeCountry = "B&H";

// function logOutYourHome (city, state, country) {
//     console.log(`You are from ${city} ${state} ${country}.`);
// }

// logOutYourHome(myHomeCity, myHomeState, myHomeCountry);
// logOutYourHome("Sarajevo", "KS", "B&H");





// 18 task - Scope

// function addFive(number) {
//     const someVariable = "You can't see me outiside this function";
//     console.log(anotherVariable);
//     return number + 5;
// }

// if (true) {
//     const yetSomeAnotherVariable = "Only in scope for the if statement"

//     console.log(yetSomeAnotherVariable);
// }

// const anotherVariable = "something else";

// console.log(addFive(10));
// console.log(someVariable);






// 19 task - Scope examples

// let friendsAtYourParty = 0;

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
//     friendsAtYourParty++;
// }

// console.log(i);


// const A = "A";
// let F;

// function doStuff(B) {
//     console.log(B);
//     const C = "C";
//     let H = "H";
//     if (1 + 1 === 2) {
//         const D = "D";
//         H = "something else";
//     }
//     console.log(D);
//     console.log(H);
//     F = "F";
// }

// let E = 0;
// while (E < 3) {
//    E++;
//    console.log(A);
//    const G = "G";
// }
// console.log(E);
// console.log(G);

// doStuff("B");
// console.log(B);
// console.log(C);
// console.log(F);







// 20 - experimenting with scope

// let something = 'Outside the if statement';

// if (true) {
//     let something = 'Inside the if statement';
//     console.log(something);
// }

// console.log(something);


// let something = 'Outside the if statement';

// if (true) {
//     something = 'Inside the if statement';
//     console.log(something);
// }

// console.log(something);

// let something = 'Outside the function';
// let thingToKeep;

// function thing () {
//     let something = 'Outside the if statement';
//     if (true) {
//         let something = 'Inside the if statement';
//         console.log(something);
//     }
//     console.log(something);
//     thingToKeep = 'defined now'
// }
// thing();

// console.log(something);
// console.log(thingToKeep);





// 21 task - Builtins

// const sentence = 'ThIs hAs wEiRd cAsInG oN iT';

// console.log(sentence.toLowerCase());
// console.log(sentence.toUpperCase());





// 22 task - Math and substr

// console.log(Math.floor(5.1));
// console.log(Math.ceil(5.9));
// console.log(Math.min(5.1, 1, 100, 0.5));

// const name = "Kerim Imamovic";
// console.log(name.substr(6,3));
//ignores first 6 characters





// 23 task - Quiz

//quiz_kerim.js
//quiz_setup.js
//quiz_done.js




// 24 task - Abstract comparison

// == 
//===




//25 task - Quiz solution with strings




//26 task - Quiz exercise solution with numbers






// 27 task - Objects

// const person = {
//     name : "Kerim Imamovic",
//     city : "Sarajevo",
//     state: "B&H",
//     favoriteFood: "Tacos",
//     wantsTacosRightNow: true,
//     numberOfTacosWanted: 10
// };

// console.log(person);
// console.log(person.name);

//keys have to be unique, values don't


// const person1 = {
//     name : "Brian",
//     ageRange: "26-35"
// };

// const person2 = {
//     name : "Jack",
//     ageRange: "65-70"
// };

// const person3 = {
//     name : "Kerim",
//     ageRange: "20-25"
// }


// function suggestMusic(person) {

//     if (person.ageRange === "26-35") {
//         console.log("We think you'll like Daft Punk.");
//     } else if (person.ageRange === "65-70") {
//         console.log("You're obviously going to like Johnny Cash.");
//     } else {
//         console.log("Uh, maybe try David Bowie?");
//     }

// }

// suggestMusic(person1);
// suggestMusic(person2);
// suggestMusic(person3);


//Objects can even have their functions.

// const dog = {
//     name : "Rex",
//     speak() {
//         console.log("woof woof");
//     }
// };

// console.log(dog);
// console.log(dog.name);
// dog.speak();


//Objects can as well have nested objects inside of them
//Object is a data structure

// const me = {
//     name: {
//         first: "Kerim",
//         last: "Imamovic"
//     },
//     location: {
//         city: "Sarajevo",
//         state: "KS",
//         country: "B&H"
//     }
// }

// console.log(me);
// console.log(me.name);
// console.log(me.location);
// console.log(me.name.first);





//28 task - Context


// const me = {
//     name: {
//         first: "Kerim",
//         last: "Imamovic"
//     },
//     location: {
//         streetNumber: 1,
//         street: "Unknown street",
//         city: "Sarajevo",
//         state: "KS",
//         zipCode: "71000",
//         country: "B&H"
//     },
//     getAddress() {
//         return `
//         ${this.name.first} 
//         ${this.name.last}
//         ${this.location.streetNumber} 
//         ${this.location.street}
//         ${this.location.city}
//         ${this.location.state}
//         ${this.location.zipCode}
//         ${this.location.country}`;
//     }

// };

// console.log(me.getAddress());






// 29 task - Global objects

// console.log(this === window);
// console.log(this.scrollY);
// console.log(window.screenY);





// 30 task - Arrays

//Arrays - ordered collections of data

// const daysOfTheWeek = [
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//     "Sunday"
// ];

// console.log(daysOfTheWeek);
// console.log(daysOfTheWeek[0]);
// console.log(daysOfTheWeek[6]);





//31 task - Arrays methods

// const primeNumbers = [1,2,3,4,5,6,7];

// console.log(primeNumbers.length);
// console.log(primeNumbers.join(" | "));



// const courses = [
//     { teacher: "Kyle Simpson", course: "JS Function Lite" },
//     { teacher: "Sarah Drasner", course: "Intro to Vue" },
//     { teacher: "Brian Holt", course: "Complete Intro to React v3" },
//     { teacher: "Steve Kinney", course: "State Management" }
// ];

// courses.push({teacher:"Sean Larkin", course:"Webpack"});
// console.log(courses);

// courses[2] = {teacher:"Brian Holt", course:"Complete Intro to react v4"};
// console.log(courses);

// const subarray = courses.splice(2,2, {course: "Intro to angular"});
// console.log(subarray);




//32 task - Types and Q&A


// const courses = [
//     { teacher: "Kyle Simpson", course: "JS Function Lite" },
//     { teacher: "Sarah Drasner", course: "Intro to Vue" },
//     { teacher: "Brian Holt", course: "Complete Intro to React v3" },
//     { teacher: "Steve Kinney", course: "State Management" }
// ];

// console.log(Object.keys(courses[0]));
// console.log(courses);

// console.log(typeof 1);





//33 task - Looping over arrays

// const cities = [
//     "Seattle",
//     "San Francisco",
//     "Salt Late City",
//     "Amsterdam",
//     "Hong Kong"
// ];

// for (let i = 0; i < cities.length; i++){
//     console.log(cities[i]);
// }




//34 task - forEach method


// const cities = [
//     "Seattle",
//     "San Francisco",
//     "Salt Late City",
//     "Amsterdam",
//     "Hong Kong"
// ];

// cities.forEach(function(city){
//     console.log(cities);
// });

// const newCities = cities.map(function(city ){
//     return city.toLocaleUpperCase()
// });

// console.log(cities);
// console.log(newCities);


// const someFunction = function() {
//     return 5
// };

// const someOtherFunction = function(kerim) {
//     return kerim()
// }

// console.log(someOtherFunction(someFunction));





//35 task - Map method


// const cities = [
//     "Seattle",
//     "San Francisco",
//     "Salt Late City",
//     "Amsterdam",
//     "Hong Kong"
// ];

// const newCities = cities.map(function(city ){
//     return 5
// });

// console.log(cities);
// console.log(newCities);





// 36 task - Sort method


// const primeNumbers = [2,5,1,3,7,6,9,8,4,11,10];

// console.log(primeNumbers.sort());

// console.log(primeNumbers.sort(function(num1, num2) {
//     if (num1 > num2) {
//         return 1;
//     } else if (num2 > num1) {
//         return -1;
//     }
//     return 0;
// }));

// console.log(primeNumbers.length);
// console.log(primeNumbers.join(" | "));





// 37 task - Array methods


// const x = 'this is some thing';
// console.log(x.split(''));

// != - not equal

// const y = x.split('')
//           .map( s => s.toUpperCase())
//           .filter(s => s != 'I')
//           .join('');
// console.log(y);






// 38 task - And & or operators

// if (2 != 3) {
//     console.log('These are not equal');
// }


// const x = 5;
// const y = 10;
// const z = 11;
// const isTrue = true;

// if (x != y) {
//     console.log('These are not equal');
// }

// if ( x === y && y === 2) {
//     console.log('These are all equal');
// }

// if ( isTrue || x === z) {
//     console.log('This is an or statement');
// }

// if ( isTrue || ( x === z && y === z)) {
//     console.log('This is a complicated statement');
// }
