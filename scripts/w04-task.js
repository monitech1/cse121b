/* LESSON 3 - Programming Tasks */

//* Profile Object */
let myProfile = {
    name: "Monigan Daniel",
    photo: "images/js.jpg",
    favoriteFoods: ["Pizza", "Banku", "Awakie", "Banku"],
    hobbies: ["Reading", "Research", "Gaming", "Cooking"],
    placesLived: [],
};

console.log(myProfile.hobbies);

/* Populate Profile Object with placesLived objects */
myProfile.placesLived.push({
    place: "Kumasi Ghana",
    length: "2 years",
});

myProfile.placesLived.push({
    place: "Accra Ghana",
    length: "2 years",
});

/* DOM Manipulation - Output */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
const photoElement = document.getElementById("photo"); 
if (photoElement) {
    photoElement.src = myProfile.photo;
    photoElement.alt = myProfile.name;
}

/* Favorite Foods List */
const favoriteFoodsList = document.getElementById("favorite-foods-list"); 

if (favoriteFoodsList) {
    myProfile.favoriteFoods.forEach((food) => {
        const listItem = document.createElement("li");
        listItem.textContent = food;
        favoriteFoodsList.appendChild(listItem);
    });
}

/* Hobbies List */
const hobbiesList = document.getElementById("hobbies");

const hobbiesArray = myProfile.hobbies;

hobbiesArray.forEach((hobby) => {
    const listItem = document.createElement("li");

    listItem.textContent = hobby;

    hobbiesList.appendChild(listItem);
});

/* Places Lived Data List */
const placesLivedList = document.getElementById("places-lived");

const placesLivedArray = myProfile.placesLived;

placesLivedArray.forEach((place) => {
    const dtElement = document.createElement("dt");

    dtElement.textContent = place.place;

    const ddElement = document.createElement("dd");

    ddElement.textContent = place.length;

    placesLivedList.appendChild(dtElement);
    placesLivedList.appendChild(ddElement);
});
