//STEP 1
// Create an array of favorite movies
let favoriteMovies = [
  "Avatar",
  "The Matrix",
  "Lincoln",
  "The King's Speech",
  "Django Unchained",
];
// Display the second movie in the array
console.log("the second movie in the array is:" + favoriteMovies[1]);

//STEP 2
// Declare array using the function constructor
let movies = new Array(5);
movies[0] = "Avatar";
movies[1] = "The Matrix";
movies[2] = "Lincoln";
movies[3] = "The King's Speech";
movies[4] = "Django Unchained";
// Display the first movie in the array
console.log("the first movie in the array is:" + movies[0]);

//STEP 3

// Add a new movie to the 3rd position
movies.splice(2, 0, "Inception");

// Display the length of the array
console.log("added a movie to the 3rd position- new total is:" + movies.length);

//STEP 4
// Delete the first movie in the array
delete movies[0];
// Display the contents of the array
console.log("the 1st movie was deleted:" + movies);

//STEP 5

// Declare an array of 7 movies
let moviesList = [
  "Avatar",
  "The Matrix",
  "Lincoln",
  "The King's Speech",
  "Django Unchained",
  "Inception",
  "Interstellar",
];

// Use a for/in loop to iterate through the array
for (let index in moviesList) {
  console.log("array of 7 movies-for/in loop:" + moviesList[index]);
}

//STEP 6
// Use a for/of loop to iterate through the array
for (let movie of moviesList) {
  console.log("array of 7 movies-for/of loop:" + movie);
}
//STEP 7
// Sort the array and then use a for/of loop
moviesList.sort();
for (let movie of moviesList) {
  console.log("Sorting the array:" + movie);
}
//STEP 8
let leastFavMovies = ["Sharknado", "Monster Trucks", "Gotti"];
console.log("Movies I like:");
for (let movie of moviesList) {
  console.log(movie);
}

console.log("\nMovies I regret watching:");
for (let movie of leastFavMovies) {
  console.log(movie);
}
//STEP 9
// Mergeing the two arrays using concat()
let allMovies = moviesList.concat(leastFavMovies);

// Sort in reverse order and display
allMovies.sort().reverse();
console.log("movies displayed in reverse order:" + allMovies);

//STEP 10
// Return and display the last item in the array
console.log("Last item is:" + allMovies[allMovies.length - 1]);

//STEP 11
// Return and display the first item in the array
console.log("1st item is:" + allMovies[0]);

//STEP 12
// Find indices of movies in leastFavMovies
let dislikeIndices = ["Sharknado", "Monster Trucks", "Gotti"];
for (let i = 0; i < allMovies.length; i++) {
  if (leastFavMovies.includes(allMovies[i])) {
    dislikeIndices.push(i);
  }
}
// Adding movie I like at the indice
for (let index of dislikeIndices) {
  allMovies[index] = "The Adams Family";
}
console.log("Added a movie:" + allMovies);

//STEP 13
// Createing a multi-dimensional array
let rankedMovies = [
  ["Avatar", 1],
  ["The Matrix", 2],
  ["Lincoln", 3],
  ["The King's Speech", 4],
  ["Django Unchained", 5],
];

// Filtering out and displaying only movie names
let movieNames = rankedMovies
  .filter((item) => typeof item[0] === "string")
  .map((item) => item[0]);
console.log("My 5 favorite movies are:" + movieNames);

//STEP 14
// Create a string array called employees
let employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];

// create an anonymous function called showEmployee.
let showEmployee = function (employeeList) {
  console.log("Employees:");
  for (let employee of employeeList) {
    console.log(employee);
  }
};
showEmployee(employees);

//STEP 15
// function to filter false, null, 0, and blank values from an array
function filterValues(arrToFilter) {
  return arrToFilter.filter((i) => !!i);
}
console.log(filterValues([58, "", "abcd", true, null, false, 0]));

//STEP 16
// Random item from array
function getRandomItem(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
console.log(getRandomItem([10, 20, 30, 40, 50]));

//STEP 17
// largest number from a numeric array
function getLargestNumber(arr) {
  return Math.max(...arr);
}
console.log(getLargestNumber([10, 20, 30, 40, 50]));
