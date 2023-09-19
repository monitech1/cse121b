/* W02-Task - Profile Home Page */
let fullName = 'Monigan Daniel'; 
/* Step 2 - Variables */
// Declare and instantiate a variable to hold the current year.
const currentYear = new Date().getFullYear();

// Declare and instantiate a variable to hold the file path (location) and file name of the image.
const profilePicture = 'images/js.jpg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');

// Use document.getElementById() to get the element with the id of "food".
const foodElement = document.getElementById('food');

// Use document.querySelector() to get the element with the id of "year".
const yearElement = document.querySelector('#year');

/* Step 4 - Adding Content */
if (nameElement) {
  nameElement.innerHTML = `<strong>${fullName}</strong>`;
}

// Update the content of the yearElement with the currentYear
if (yearElement) {
  yearElement.textContent = currentYear;
}

// Set the src attribute of the imageElement to profilePicture
const imageElement = document.querySelector('img');
if (imageElement) {
  imageElement.setAttribute('src', profilePicture);
}

/* Step 5 - Array */
// Adding and updating favorite foods
const favoriteFoods = ["Pizza", "Rice", "Banku", "wakye", "Sushi", "Tacos", "Chocolate", "Burgers", "Ice Cream"];

// Add the singleFavoriteFood to the favoriteFoods array
const singleFavoriteFood = "Tacos";
favoriteFoods.push(singleFavoriteFood);

// Remove the first and last elements from the favoriteFoods array
favoriteFoods.shift();
favoriteFoods.pop();

// favoriteFoods array into a string separated by line breaks
const foodList = favoriteFoods.join("<br>");

// modified foodList
if (foodElement) {
  foodElement.innerHTML = `My favorite foods:<br>${foodList}`;
}
