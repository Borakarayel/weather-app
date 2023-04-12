import { getData } from "../src/fetch";
import "../src/DOMs.js";

export const favData = async function (city) {
  let data = await getData(city);

  const box = document.createElement("li");
  box.classList.add("favCities");
  const h2 = document.createElement("h2");
  h2.textContent = city.slice(0, 1).toUpperCase() + city.slice(1).toLowerCase();
  const img = document.createElement("img");
  img.id = "favImg";
  img.src = require(`./img/icons/day/${data.current.condition.icon.slice(
    -7,
    -4
  )}.png`);
  const h2c = document.createElement("h2");
  h2c.className = "hide";
  h2c.id = city + "c";
  const h2f = document.createElement("h2");
  h2f.className = "";
  h2f.id = city + "f";
  h2c.textContent = `${data.current.temp_c} °C`;
  h2f.textContent = `${data.current.temp_f} °F`;
  box.append(h2);
  box.append(img);
  box.append(h2c);
  box.append(h2f);
  ulid.prepend(box);
};
