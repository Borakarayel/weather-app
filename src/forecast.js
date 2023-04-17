import { getData } from "../src/fetch";
import "../src/DOMs.js";

export const forecastData = async function (city) {
  let data = await getData(city);
  infoApiDaily1.textContent = `${data.forecast.forecastday[0].date}`;
  infoApiDaily2.textContent = `${data.forecast.forecastday[1].date}`;
  infoApiDaily3.textContent = `${data.forecast.forecastday[2].date}`;

  minDayImg0.src = require(`./img/icons/day/${data.forecast.forecastday[0].day.condition.icon.slice(
    -7,
    -4
  )}.png`);
  minDayImg1.src = require(`./img/icons/day/${data.forecast.forecastday[1].day.condition.icon.slice(
    -7,
    -4
  )}.png`);
  minDayImg2.src = require(`./img/icons/day/${data.forecast.forecastday[2].day.condition.icon.slice(
    -7,
    -4
  )}.png`);

  infoTitle1c.textContent = `${data.forecast.forecastday[0].day.avgtemp_c} °C`;
  infoTitle2c.textContent = `${data.forecast.forecastday[1].day.avgtemp_c} °C`;
  infoTitle3c.textContent = `${data.forecast.forecastday[2].day.avgtemp_c} °C`;

  infoTitle1f.textContent = `${data.forecast.forecastday[0].day.avgtemp_f} °F`;
  infoTitle2f.textContent = `${data.forecast.forecastday[1].day.avgtemp_f} °F`;
  infoTitle3f.textContent = `${data.forecast.forecastday[2].day.avgtemp_f} °F`;
};
