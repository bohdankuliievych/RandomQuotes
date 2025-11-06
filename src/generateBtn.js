import { quotes } from "./data/quotes.js";
import { generateRandomInt } from "./utils.js";

const favButton = document.getElementById("fav-button");
const quotePara = document.getElementById("quote");

function chooseRandomQuote() {
  return quotes[generateRandomInt(quotes.length)];
}

function renderQuote(quote) {
  const { text, author, isFavourite } = quote;

  if (quotePara.textContent === "Click the button to get a random quote") {
    favButton.removeAttribute("disabled");
  }

  const quoteElement = document.getElementById("quote");
  const authorElement = document.getElementById("author");
  quoteElement.textContent = text;
  authorElement.textContent = author;

  return isFavourite;
}

export { favButton, chooseRandomQuote, renderQuote };
