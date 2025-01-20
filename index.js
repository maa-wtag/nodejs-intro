// console.log(process);

// const {
//   generateRandomNumber,
//   celciusToFahrenheitConverter,
// } = require("./utils");

// console.log("Random Number:", generateRandomNumber());

// console.log("Celcius to Farenheit:", celciusToFahrenheitConverter(0));

import getPosts, { getPostsLength } from "./postController.js";

console.log("Posts", getPosts());

console.log("Posts Length", getPostsLength());
