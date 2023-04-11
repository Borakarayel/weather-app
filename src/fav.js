import { getData } from "../src/fetch";
import "../src/DOMs.js";
import { favBox } from "../src/DOMs.js";

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
  h2c.textContent = `${data.current.temp_c} °C`;
  const span = document.createElement("span");
  const symbl = document.createTextNode("\u00D7");
  span.className = "close";
  span.id = "closeBut";
  span.appendChild(symbl);
  box.append(h2);
  box.append(img);
  box.append(h2c);
  box.append(span);
  ulid.prepend(box);
};

// export const addToFav = function () {
//   favBoxBtn.addEventListener("click", function () {
//     if (favBox.value == "") {
//       alert("Type a valid city name!");
//     } else {
//       favData(favBox.value);
//       favBox.value == "";
//     }
//   });
// };

// export const remove = function () {
//   favBox.addEventListener("click", function () {

//   });
// };

favData("istanbul");
favData("Rome");
favData("Berlin");
favData("London");
addToFav();
remove();
