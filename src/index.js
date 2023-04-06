import { deneme } from "../src/func";
import "./styles/main.css";
import pattern from "./img/pattern.jpg";
import { getData } from "../src/func";

const searchbox = document.getElementById("searchbox");

const submitButton = document.getElementById("submitId");

const localTime = document.getElementById("localTime");

const cityId = document.getElementById("cityId");

const weatherInfoId = document.getElementById("weatherInfoId");

const temp = document.getElementById("temp");

getData("istanbul");

submitButton.addEventListener("click", function () {
  //   searchbox.value == "" ? getData("istanbul") : getData(searchbox.value);
  if (searchbox.value === "") {
    getData("istanbul");
  } else {
    getData(searchbox.value);
    searchbox.value = "";
  }
});
