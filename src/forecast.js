import { dayImg, nightImg, submitButton } from "./index";
import { day1, day2, day3, day4, day5, day6, day7 } from "./index";
import {
  infoApiDaily1,
  infoApiDaily2,
  infoApiDaily3,
  infoApiDaily4,
  infoApiDaily5,
  infoApiDaily6,
  infoApiDaily7,
  minDayImg0,
  minDayImg1,
  minDayImg2,
  minDayImg3,
  minDayImg4,
  minDayImg5,
  minDayImg6,
  infoTitle1,
  infoTitle2,
  infoTitle3,
  infoTitle4,
  infoTitle5,
  infoTitle6,
  infoTitle7,
} from "./index";

export const getForecastData = async function (city) {
  try {
    const forecastData = await (
      await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=1caeeb5e29474c3b855191422230304&q=` +
          city +
          `&days=7&aqi=yes&alerts=no`
      )
    ).json();
    console.log(forecastData);

    infoApiDaily1.textContent = `${forecastData.forecast.forecastday[0].date}`;
    infoApiDaily2.textContent = `${forecastData.forecast.forecastday[1].date}`;
    infoApiDaily3.textContent = `${forecastData.forecast.forecastday[2].date}`;
    infoApiDaily4.textContent = `${forecastData.forecast.forecastday[3].date}`;
    infoApiDaily5.textContent = `${forecastData.forecast.forecastday[4].date}`;
    infoApiDaily6.textContent = `${forecastData.forecast.forecastday[5].date}`;
    infoApiDaily7.textContent = `${forecastData.forecast.forecastday[6].date}`;

    minDayImg0.src = require(`./img/icons/day/${forecastData.forecast.forecastday[0].day.condition.icon.slice(
      -7,
      -4
    )}.png`);
    minDayImg1.src = require(`./img/icons/day/${forecastData.forecast.forecastday[1].day.condition.icon.slice(
      -7,
      -4
    )}.png`);
    minDayImg2.src = require(`./img/icons/day/${forecastData.forecast.forecastday[2].day.condition.icon.slice(
      -7,
      -4
    )}.png`);
    minDayImg3.src = require(`./img/icons/day/${forecastData.forecast.forecastday[3].day.condition.icon.slice(
      -7,
      -4
    )}.png`);
    minDayImg4.src = require(`./img/icons/day/${forecastData.forecast.forecastday[4].day.condition.icon.slice(
      -7,
      -4
    )}.png`);
    minDayImg5.src = require(`./img/icons/day/${forecastData.forecast.forecastday[5].day.condition.icon.slice(
      -7,
      -4
    )}.png`);
    minDayImg6.src = require(`./img/icons/day/${forecastData.forecast.forecastday[6].day.condition.icon.slice(
      -7,
      -4
    )}.png`);

    infoTitle1.textContent = `${forecastData.forecast.forecastday[0].day.avgtemp_c} °C`;
    infoTitle2.textContent = `${forecastData.forecast.forecastday[1].day.avgtemp_c} °C`;
    infoTitle3.textContent = `${forecastData.forecast.forecastday[2].day.avgtemp_c} °C`;
    infoTitle4.textContent = `${forecastData.forecast.forecastday[3].day.avgtemp_c} °C`;
    infoTitle5.textContent = `${forecastData.forecast.forecastday[4].day.avgtemp_c} °C`;
    infoTitle6.textContent = `${forecastData.forecast.forecastday[5].day.avgtemp_c} °C`;
    infoTitle7.textContent = `${forecastData.forecast.forecastday[6].day.avgtemp_c} °C`;
  } catch (error) {
    console.log(Error);
  }
};
