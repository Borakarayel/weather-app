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

  infoTitle1c.textContent = `${data.forecast.forecastday[0].day.avgtemp_c} °C`;
  infoTitle2c.textContent = `${data.forecast.forecastday[1].day.avgtemp_c} °C`;
  infoTitle3c.textContent = `${data.forecast.forecastday[2].day.avgtemp_c} °C`;
  infoTitle4c.textContent = `${data.forecast.forecastday[3].day.avgtemp_c} °C`;
  infoTitle5c.textContent = `${data.forecast.forecastday[4].day.avgtemp_c} °C`;
  infoTitle6c.textContent = `${data.forecast.forecastday[5].day.avgtemp_c} °C`;
  infoTitle7c.textContent = `${data.forecast.forecastday[6].day.avgtemp_c} °C`;

  infoTitle1f.textContent = `${data.forecast.forecastday[0].day.avgtemp_f} °F`;
  infoTitle2f.textContent = `${data.forecast.forecastday[1].day.avgtemp_f} °F`;
  infoTitle3f.textContent = `${data.forecast.forecastday[2].day.avgtemp_f} °F`;
  infoTitle4f.textContent = `${data.forecast.forecastday[3].day.avgtemp_f} °F`;
  infoTitle5f.textContent = `${data.forecast.forecastday[4].day.avgtemp_f} °F`;
  infoTitle6f.textContent = `${data.forecast.forecastday[5].day.avgtemp_f} °F`;
  infoTitle7f.textContent = `${data.forecast.forecastday[6].day.avgtemp_f} °F`;
};
