import {
  enableFavBtn,
  disableFavBtn,
  handleFavBtnColor,
  toggleQuote,
} from "./src/favBtn.js";
import { addFavCard } from "./src/favCard.js";
import { chooseRandomQuote, renderQuote } from "./src/generateBtn.js";
import { quotes } from "./src/data/quotes.js";
import {
  setLocalItem,
  getLocalItem,
  removeLocalItem,
  clearLocalStorage,
} from "./src/utils.js";

const favContainer = document.getElementById("fav-container");
const favButton = document.getElementById("fav-button");
const quotePara = document.getElementById("quote");
const body = document.getElementsByTagName("body")[0];
const themeButton = document.getElementById("theme-button");
const generateBtn = document.getElementById("generate-btn");

let currentQuote = null;
const favouriteQuotes = [];

function generateQuoteHandler() {
  enableFavBtn(favButton, quotePara);
  currentQuote = chooseRandomQuote();
  const isFav = renderQuote(currentQuote);
  handleFavBtnColor(isFav);
  setLocalItem("currentQuote", currentQuote);
}
function updateQuotesArray(favArray, srcArray) {
  favArray.forEach((favQuote) => {
    let foundQuote = srcArray.find((quote) => quote.id === favQuote.id);
    if (foundQuote) {
      foundQuote.isFavourite = true;
    }
  });
}

function updateFavouriteQuotes(quote) {
  const foundIndex = favouriteQuotes.findIndex(
    (favQuote) => favQuote.id === quote.id
  );
  if (quote.isFavourite) {
    if (foundIndex === -1) {
      favouriteQuotes.push(quote);
    }
  }
  if (!quote.isFavourite) {
    if (foundIndex !== -1) {
      favouriteQuotes.splice(foundIndex, 1);
    }
  }
}
function init() {
  // local storage current quote
  const localQuote = getLocalItem("currentQuote");
  if (localQuote) {
    favButton.removeAttribute("disabled");
    const isFav = renderQuote(localQuote);
    handleFavBtnColor(isFav);
    currentQuote = quotes.find((quote) => quote.id === localQuote.id);
    currentQuote.isFavourite = localQuote.isFavourite;
  }
  // local storage favourite quotes
  const localQuotes = getLocalItem("favouriteQuotes");
  if (localQuotes) {
    localQuotes.forEach((item) => {
      favouriteQuotes.push(item);
    });
  }
  if (favouriteQuotes.length > 0) {
    // render favourites
    favouriteQuotes.forEach((element) => {
      addFavCard(element, favContainer);
    });
    updateQuotesArray(favouriteQuotes, quotes);
  }
}

disableFavBtn(favButton);

window.addEventListener("load", init);

generateBtn.addEventListener("click", generateQuoteHandler);

favButton.addEventListener("click", () => {
  toggleQuote(currentQuote, favContainer);
  setLocalItem("currentQuote", currentQuote);
  updateFavouriteQuotes(currentQuote);
  setLocalItem("favouriteQuotes", favouriteQuotes);
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

  updateFavouriteQuotes(quotes.find((q) => q.id === cardId));
  setLocalItem("favouriteQuotes", favouriteQuotes);
});
