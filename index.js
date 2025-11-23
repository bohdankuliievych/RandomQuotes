import {
  enableFavBtn,
  disableFavBtn,
  handleFavBtnColor,
  toggleQuote,
} from "./src/handlers/favBtn.js";
import { addFavCard } from "./src/handlers/favCard.js";
import { getRandomQuote, renderQuote } from "./src/handlers/quote.js";

import {
  saveInLocalStorage,
  readFromLocalStorage,
  removeLocalItem,
  clearLocalStorage,
} from "./src/utils/localStorage.js";

const favContainer = document.getElementById("fav-container");
const favButton = document.getElementById("fav-button");
const quotePara = document.getElementById("quote");
const body = document.getElementsByTagName("body")[0];
const themeButton = document.getElementById("theme-button");
const randomQuoteBtn = document.getElementById("random-quote-btn");

let currentQuote = null;
const favouriteQuotes = [];

function findQuoteInFavourites({ id }, favouritesArray) {
  return favouritesArray.find((quote) => quote.id === id);
}

function generateQuoteHandler() {
  enableFavBtn(favButton, quotePara);
  currentQuote = getRandomQuote();
  renderQuote(currentQuote);
  const isFav = findQuoteInFavourites(currentQuote, favouriteQuotes);
  handleFavBtnColor(isFav);
  saveInLocalStorage("currentQuote", currentQuote);
}

function init() {
  // local storage [favourites]
  const localQuotes = readFromLocalStorage("favouriteQuotes");
  if (localQuotes) {
    localQuotes.forEach((item) => {
      favouriteQuotes.push(item);
    });
  }
  if (favouriteQuotes.length > 0) {
    favouriteQuotes.forEach((quote) => {
      addFavCard(quote, favContainer);
    });
  }

  // local storage current quote
  const localQuote = readFromLocalStorage("currentQuote");
  if (localQuote) {
    favButton.removeAttribute("disabled");
    currentQuote = localQuote;
    renderQuote(currentQuote);
    const isFav = findQuoteInFavourites(currentQuote, favouriteQuotes);
    handleFavBtnColor(isFav);
  }
}

disableFavBtn(favButton);

window.addEventListener("load", init);

// generate quote button
randomQuoteBtn.addEventListener("click", generateQuoteHandler);

// star button click
favButton.addEventListener("click", () => {
  toggleQuote(currentQuote, favContainer, favouriteQuotes);
  saveInLocalStorage("favouriteQuotes", favouriteQuotes);
});
// theme button
themeButton.addEventListener("click", () => {
  body.classList.toggle("dark");
  themeButton.classList.toggle("dark");
  themeButton.textContent = themeButton.classList.contains("dark")
    ? "Light"
    : "Dark";
});
// 'remove' button functionality
favContainer.addEventListener("click", (e) => {
  const cardId = e.target.closest(".favourite-card").dataset.quoteId;
  const quote = favouriteQuotes.find((favQuote) => favQuote.id === cardId);
  toggleQuote(quote, favContainer, favouriteQuotes);
  saveInLocalStorage("favouriteQuotes", favouriteQuotes);
});
