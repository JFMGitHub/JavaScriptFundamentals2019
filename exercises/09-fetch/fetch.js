/** An Example of the response you will receive when making an Http request
 * https://dog.ceo/api/breeds/image/random
 *
 * {
    "status": "success",
    "message": "https://images.dog.ceo/breeds/poodle-toy/n02113624_9550.jpg"
    }
 *
 * 
 * 
 */

/**
 * As a user, I should be able to click on the a button to see random dog images
 * Please use Fetch in this Example
 *
 */
// fetch("https://dog.ceo/api/breeds/image/random", {
//    method: "POST",
//    headers: {
//     "Content-Type": ""
//    },
//    body: JSON.stringify({
//        id: "dog image"
//    })
//  })
//  .then(response => response.json())
//  .then(data => console.log(data))
const button = document.querySelector("#button");
button.addEventListener("click", () =>
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => (document.getElementById("image").src = data.message))
    .catch((err) => console.log(err))
);
