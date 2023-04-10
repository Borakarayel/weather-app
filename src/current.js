import { getForecastData } from "./forecast";
import { dayImg, nightImg, submitButton } from "./index";

//Get data from API and add to DOM
export const getCurrentData = async function (city) {
  try {
    const weatherInfo = await (
      await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=1caeeb5e29474c3b855191422230304&q=` +
          city +
          `&days=7&aqi=yes&alerts=no`
      )
    ).json();
    // Send the current info to DOM
    cityId.textContent = `${weatherInfo.location.name},`;
    countryId.textContent = `${weatherInfo.location.country}`;
    weatherInfoId.textContent = `${weatherInfo.current.condition.text}`;
    localTime.textContent = `Local Time: ${weatherInfo.location.localtime.slice(
      11
    )}`;
    localDate.textContent = `Local Date: ${weatherInfo.location.localtime.slice(
      0,
      10
    )}`;
    temp.append(`${weatherInfo.current.temp_c} °C`);
    // Create a localtime in "xx" format
    const lcltime = localTime.textContent.slice(10, 14).replaceAll(":", "");
    // decide night or day
    const dayOrNight = await function () {
      if (lcltime < 19 && lcltime > 6) {
        dayImg.style.display = "block";
        dayImg.src = require(`./img/icons/day/${weatherInfo.current.condition.icon.slice(
          -7,
          -4
        )}.png`);
        nightImg.style.display = "none";
      } else {
        nightImg.style.display = "block";
        nightImg.src = require(`./img/icons/night/${weatherInfo.current.condition.icon.slice(
          -7,
          -4
        )}.png`);
        dayImg.style.display = "none";
      }
    };
    dayOrNight();
    infoApi1.textContent = `${weatherInfo.current.wind_kph}kph`;
    infoApi2.textContent = `${weatherInfo.current.wind_dir}`;
    infoApi3.textContent = `${weatherInfo.current.feelslike_c}°C`;
    infoApi4.textContent = `${weatherInfo.current.humidity}%`;
    infoApi5.textContent = `${weatherInfo.current.cloud}%`;
    infoApi6.textContent = `${weatherInfo.current.uv}`;
  } catch (error) {
    console.log(Error);
  }
};

//Submit the search with enter key
export const enterKey = function () {
  document.addEventListener("keypress", function (KeyboardEvent) {
    if (KeyboardEvent.key == "Enter" && searchbox.value === "") {
      alert("type a city to search box please!");
    } else if (KeyboardEvent.key == "Enter") {
      getCurrentData(searchbox.value);
      getForecastData(searchbox.value);
      searchbox.value = "";
      temp.textContent = "";
    }
  });
};

//Alert to prevent search with empty text box
export const submit = function () {
  submitButton.addEventListener("click", function () {
    if (searchbox.value === "") {
      alert("type a city to search box please!");
    } else {
      getCurrentData(searchbox.value);
      getForecastData(searchbox.value);
      searchbox.value = "";
      temp.textContent = "";
    }
  });
};

//Show images for each extra info field
export const extraInfoimg = function () {
  extrainfo1.src = require("./img/icons/extraInfo/wind.jpg");
  extrainfo2.src = require("./img/icons/extraInfo/winddirection.jpg");
  extrainfo3.src = require("./img/icons/extraInfo/feelslike.jpg");
  extrainfo4.src = require("./img/icons/extraInfo/humidity.jpg");
  extrainfo5.src = require("./img/icons/extraInfo/cloud.jpg");
  extrainfo6.src = require("./img/icons/extraInfo/posrain.jpg");
};
