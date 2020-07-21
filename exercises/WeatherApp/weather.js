/*** As a user, I would like to be able to see my weather forecast for the day , so I  can be informed about the weather.*/

/** Developer notes:
 *    Weather API: https://openweathermap.org/api
 *     Api key: 886705b4c1182eb1c69f28eb8c520e20
 *
 *  1) Retrieve the user's latitude and longitude by using this API: https://ipapi.co/json/
 *  2) Using the user's latitude and longitude return the weather using this API: api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}
 *   a sample call will look like this: http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=886705b4c1182eb1c69f28eb8c520e20 // &units = imperial and metric
 *  3) You can edit this weather app  however you see fit to achieve your goals. (i.e add ids or additional classes if needed). Make the weather app look more whimsical (ie icons based off of the weather forecast).
 *
 *
 *
 */

let i = 0;

const button = document.querySelector("#button");
button.addEventListener("click", async function getWeather() {
  i++;
  if (i % 2 === 0) {
    const firstCall = await axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        console.log(response);
        return [response.data.latitude, response.data.longitude];
      });

    const secondCall = await axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${firstCall[0]}&lon=${firstCall[1]}&appid=886705b4c1182eb1c69f28eb8c520e20&units=imperial`
      )
      .then(
        (degrees) =>
          (document.getElementById("weather-icons").innerHTML =
            degrees.data.main.temp)
      );
  } else {
    const firstCall = await axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        console.log(response);
        return [response.data.latitude, response.data.longitude];
      });

    const secondCall = await axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${firstCall[0]}&lon=${firstCall[1]}&appid=886705b4c1182eb1c69f28eb8c520e20&units=imperial`
      )
      .then(
        (degrees) =>
          (document.getElementById("weather-icons").innerHTML =
            ((degrees.data.main.temp - 32) * 5) / 9)
      );
  }
});
