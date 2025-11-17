import {
  enableFavBtn,
  disableFavBtn,
  handleFavBtnColor,
  toggleQuote,
} from "./src/favBtn.js";
import { chooseRandomQuote, renderQuote } from "./src/generateBtn.js";
import { quotes } from "./src/data/quotes.js";

const favContainer = document.getElementById("fav-container");
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
  toggleQuote(currentQuote, favContainer);
});

themeButton.addEventListener("click", () => {
  body.classList.toggle("dark");
  themeButton.classList.toggle("dark");
  themeButton.textContent = themeButton.classList.contains("dark")
    ? "Light"
    : "Dark";
});

favContainer.addEventListener("click", (e) => {
  const cardId = e.target.closest(".favourite-card").dataset.quoteId;
  toggleQuote(
    quotes.find((q) => q.id === cardId),
    favContainer
  );
  handleFavBtnColor(currentQuote.isFavourite);
});
