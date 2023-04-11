import "./styles/main.css";
import "../src/DOMs.js";
import { cityData, enterKey, submit, extraInfoimg } from "../src/current";
import { forecastData } from "../src/forecast";
import { addToFav } from "../src/fav";

enterKey();
submit();
extraInfoimg();
cityData("ankara");
forecastData("Ankara");
