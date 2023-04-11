import { getData } from "../src/fetch";
import "../src/DOMs.js";

export const forecastData = async function (city) {
  let data = await getData(city);
  infoApiDaily1.textContent = `${data.forecast.forecastday[0].date}`;
  infoApiDaily2.textContent = `${data.forecast.forecastday[1].date}`;
  infoApiDaily3.textContent = `${data.forecast.forecastday[2].date}`;
  infoApiDaily4.textContent = `${data.forecast.forecastday[3].date}`;
  infoApiDaily5.textContent = `${data.forecast.forecastday[4].date}`;
  infoApiDaily6.textContent = `${data.forecast.forecastday[5].date}`;
  infoApiDaily7.textContent = `${data.forecast.forecastday[6].date}`;

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
  minDayImg3.src = require(`./img/icons/day/${data.forecast.forecastday[3].day.condition.icon.slice(
    -7,
    -4
  )}.png`);
  minDayImg4.src = require(`./img/icons/day/${data.forecast.forecastday[4].day.condition.icon.slice(
    -7,
    -4
  )}.png`);
  minDayImg5.src = require(`./img/icons/day/${data.forecast.forecastday[5].day.condition.icon.slice(
    -7,
    -4
  )}.png`);
  minDayImg6.src = require(`./img/icons/day/${data.forecast.forecastday[6].day.condition.icon.slice(
    -7,
    -4
  )}.png`);

  infoTitle1.textContent = `${data.forecast.forecastday[0].day.avgtemp_c} °C`;
  infoTitle2.textContent = `${data.forecast.forecastday[1].day.avgtemp_c} °C`;
  infoTitle3.textContent = `${data.forecast.forecastday[2].day.avgtemp_c} °C`;
  infoTitle4.textContent = `${data.forecast.forecastday[3].day.avgtemp_c} °C`;
  infoTitle5.textContent = `${data.forecast.forecastday[4].day.avgtemp_c} °C`;
  infoTitle6.textContent = `${data.forecast.forecastday[5].day.avgtemp_c} °C`;
  infoTitle7.textContent = `${data.forecast.forecastday[6].day.avgtemp_c} °C`;
};
