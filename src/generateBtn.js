import { quotes } from "./data/quotes.js";
import { generateRandomInt } from "./utils.js";

function chooseRandomQuote() {
  return quotes[generateRandomInt(quotes.length)];
}

function renderQuote(quote) {
  const { text, author, isFavourite } = quote;
  const quoteElement = document.getElementById("quote");
  const authorElement = document.getElementById("author");
  quoteElement.textContent = text;
  authorElement.textContent = author;

  return isFavourite;
}

export { chooseRandomQuote, renderQuote };
