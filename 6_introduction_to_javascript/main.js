// 27 task













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
