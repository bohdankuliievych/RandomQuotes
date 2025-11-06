import { handleFavBtnColor, toggleFavQuote } from "./src/favBtn.js";
import {
  favButton,
  chooseRandomQuote,
  renderQuote,
} from "./src/generateBtn.js";

favButton.setAttribute("disabled", "true");

const body = document.getElementsByTagName("body")[0];
const themeButton = document.getElementById("theme-button");
const generateBtn = document.getElementById("generate-btn");

let currentQuote = null;

function generateQuoteHandler() {
  currentQuote = chooseRandomQuote();
    const isFav = renderQuote(currentQuote);
  handleFavBtnColor(isFav);
}

generateBtn.addEventListener("click", generateQuoteHandler);
favButton.addEventListener("click", () => {
  toggleFavQuote(currentQuote);
});

themeButton.addEventListener("click", () => {
  body.classList.toggle("dark");
  themeButton.classList.toggle("dark");
  themeButton.textContent = themeButton.classList.contains("dark")
    ? "Light"
    : "Dark";
});
