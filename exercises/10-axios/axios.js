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

const characters = document.querySelector("#dropdown");
//const option = document.createElement("option");
var x = document.getElementById("dropdown");

axios.get("https://rickandmortyapi.com/api/character/").then((response) => {
  console.log(response);

  for (let i = 0; i < response.data.results.length; i++) {
    characters.options.add(new Option(response.data.results[i].name));
  }

  characters.addEventListener("change", (event) => {
    document.getElementById("get-schwifty").src =
      response.data.results[x.selectedIndex - 1].image;
    console.log(x.selectedIndex);
  });
});

//var characters = document.createElement("option");

//axios outside of event
//const imgChange = document.querySelector("#dropdown");
//imgChange.addEventListener("click", () => {axios.get("https://rickandmortyapi.com/api/character/").then((response) => {
//document.getElementById("get-schwifty").src = response.data.results[click].image; //[click].image;
//});

//for (let name in response) {
//const option = document.createElement("option");
//option.value = response.results.name;
//} // I am trying to loop through every name in the object with all characters and add a name to the dropdown for each one

const imgChange = document.querySelector("#dropdown");
imgChange.addEventListener("input", (event) => {
  (charNumber) => {
    //possibly reference character number by id object.results.id so the name on dropdown pulls id # img
    axios
      .get('https://rickandmortyapi.com/api/character/"' + charNumber + '"')
      .then((data) => {
        document.getElementById("get-schwifty").src =
          "https://rickandmortyapi.com/api/character/avatar/361.jpeg";
      });
  };
});
//the firt step is to populate the dropdown on page load.
//the second step is on change populate the image based on what the user has selected (line 47).
