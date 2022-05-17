// const BREEDS_URL = "https://dog.ceo/api/breeds/image/random";

// const promise = fetch(DOG_URL);

// promise
//   .then(function(response) {
//     const processingPromise = response.json();
//     return processingPromise;
//   })
//   .then(function(processedResponse) {
//     console.log(breeds);
//   });

// console.log("this will log first");



// const BREEDS_URL = "https://dog.ceo/api/breeds/image/random";

// fetch (BREEDS_URL) 
//     .then(function(response){
//         return response.json;
//     })
//     .then(function(data){
//        const img =  document.createElement('img');
//        img.src = data.message;
//        img.alt = 'Cute doggo';

//       document.querySelector('.doggos').appendChild(img);
//     })




// const DOG_URL = "https://dog.ceo/api/breeds/image/random";

// const promise = fetch(DOG_URL);
// const doggos = document.querySelector(".doggos");

// promise
//   .then(function(response) {
//     const processingPromise = response.json();
//     return processingPromise;
//   })
//   .then(function(processedResponse) {
//     const img = document.createElement("img");
//     img.src = processedResponse.message;
//     img.alt = "Cute doggo";
//     doggos.appendChild(img);
//   });



const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.querySelector(".doggos");

function addNewDoggo() {
  const promise = fetch(DOG_URL);
  promise
    .then(function(response) {
      const processingPromise = response.json();
      return processingPromise;
    })
    .then(function(processedResponse) {
      const img = document.createElement("img");
      img.src = processedResponse.message;
      img.alt = "Cute doggo";
      doggos.appendChild(img);
    });
}

document.querySelector(".add-doggo")
        .addEventListener("click", addNewDoggo);