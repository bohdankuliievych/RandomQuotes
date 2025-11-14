import {
  enableFavBtn,
  disableFavBtn,
  handleFavBtnColor,
  toggleQuote,
} from "./src/favBtn.js";
import { chooseRandomQuote, renderQuote } from "./src/generateBtn.js";

const favButton = document.getElementById("fav-button");
const quotePara = document.getElementById("quote");
const body = document.getElementsByTagName("body")[0];
const themeButton = document.getElementById("theme-button");
const generateBtn = document.getElementById("generate-btn");

let currentQuote = null;

disableFavBtn(favButton);

function generateQuoteHandler() {
  enableFavBtn(favButton, quotePara);
  currentQuote = chooseRandomQuote();
  const isFav = renderQuote(currentQuote);
  handleFavBtnColor(isFav);
}

generateBtn.addEventListener("click", generateQuoteHandler);
favButton.addEventListener("click", () => {
  toggleQuote(currentQuote);
});

themeButton.addEventListener("click", () => {
  body.classList.toggle("dark");
  themeButton.classList.toggle("dark");
  themeButton.textContent = themeButton.classList.contains("dark")
    ? "Light"
    : "Dark";
});
