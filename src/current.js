import "../src/DOMs.js";
import {
  infoApi1c,
  infoApi1f,
  infoApi2,
  infoApi3c,
  infoApi3f,
  searchbox,
  submitButton,
  switch1,
  temp,
  tempc,
  tempf,
} from "../src/DOMs.js";
import { getData } from "./fetch.js";

//Get data from fetch
export const cityData = async function (city) {
  let data = await getData(city);
  // Send the current info to DOM
  cityId.textContent = `${data.location.name},`;
  countryId.textContent = `${data.location.country}`;
  weatherInfoId.textContent = `${data.current.condition.text}`;
  localTime.textContent = `Local Time: ${data.location.localtime.slice(11)}`;
  localDate.textContent = `Local Date: ${data.location.localtime.slice(0, 10)}`;
  tempf.textContent = `${data.current.temp_f} °F`;
  tempc.textContent = `${data.current.temp_c} °C`;
  // Create a localtime in "xx" format
  const lcltime = localTime.textContent.slice(10, 14).replaceAll(":", "");
  // decide night or day
  if (lcltime < 19 && lcltime > 6) {
    dayImg.style.display = "block";
    dayImg.src = require(`./img/icons/day/${data.current.condition.icon.slice(
      -7,
      -4
    )}.png`);
    nightImg.style.display = "none";
  } else {
    nightImg.style.display = "block";
    nightImg.src = require(`./img/icons/night/${data.current.condition.icon.slice(
      -7,
      -4
    )}.png`);
    dayImg.style.display = "none";
  }
  //Add extrainfo area data
  infoApi1c.textContent = `${data.current.wind_kph} Kph`;
  infoApi1f.textContent = `${data.current.wind_mph} Mph`;
  infoApi2.textContent = `${data.current.wind_dir}`;
  infoApi3c.textContent = `${data.current.feelslike_c} °C`;
  infoApi3f.textContent = `${data.current.feelslike_f} °F`;
  infoApi4.textContent = `${data.current.humidity}%`;
  infoApi5.textContent = `${data.current.cloud}%`;
  infoApi6.textContent = `${data.current.uv}`;
};
//Submit the search with enter key
export const enterKey = function () {
  document.addEventListener("keypress", function (KeyboardEvent) {
    if (KeyboardEvent.key == "Enter" && searchbox.value === "") {
      alert("type a city to search box please!");
    } else if (KeyboardEvent.key == "Enter") {
      cityData(searchbox.value);
      //  getForecastData(searchbox.value);
      searchbox.value = "";
      tempc.textContent = "";
      tempf.textContent = "";
    }
  });
};
//Alert to prevent search with empty text box
export const submit = function () {
  submitButton.addEventListener("click", function () {
    if (searchbox.value == "") {
      alert("type a city to search box please!");
    } else {
      cityData(searchbox.value);
      //  getForecastData(searchbox.value);
      searchbox.value = "";
      tempc.textContent = "";
      tempf.textContent = "";
    }
  });
};
// images for each extra info field
export const extraInfoimg = function () {
  extrainfo1.src = require("./img/icons/extraInfo/wind.jpg");
  extrainfo2.src = require("./img/icons/extraInfo/winddirection.jpg");
  extrainfo3.src = require("./img/icons/extraInfo/feelslike.jpg");
  extrainfo4.src = require("./img/icons/extraInfo/humidity.jpg");
  extrainfo5.src = require("./img/icons/extraInfo/cloud.jpg");
  extrainfo6.src = require("./img/icons/extraInfo/posrain.jpg");
};
