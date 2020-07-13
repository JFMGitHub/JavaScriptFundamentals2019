/**
 *
 * As a user, I should be able to a pick Rick and Morty character from a drop-down, and it should display an image of that character.
 *
 * For this exercise, use the API to populate the dropdown.
 * After the dropdown has been populated, if the user selects a character an image should appear displaying the correct character.
 *
 *
 * Create a list of characters using the API
 * This is the URL for the API you will be using. The method should be GET.
 * To get all characters use this
 * https://rickandmortyapi.com/documentation/#get-all-characters
 * To get an individual character use this:
 * https://rickandmortyapi.com/documentation/#get-a-single-character
 *
 * Use the AXIOS library to make AJAX requests.
 */
const dropDown = document.querySelector("#dropdown");
dropDown.addEventListener("input", (event) => {
  axios.get("https://rickandmortyapi.com/api/character/").then((response) => {
    for (let key in response) {
      const option = document.createElement("option");
      option.value = response.key;
    } // I am trying to loop through every name in the object with all characters and add a name to the dropdown for each one
  });
});
const imgChange = document.querySelector("#dropdown");
imgChange.addEventListener("input", (event) => {
  (charNumber) => {
    axios
      .get('https://rickandmortyapi.com/api/character/"' + charNumber + '"')
      .then((data) => {
        document.getElementById("main-img").src = data.results.image;
      });
  };
});
