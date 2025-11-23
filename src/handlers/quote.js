import { quotes } from "../data/quotes.js";
import { generateRandomInt } from "../utils/utils.js";

function getRandomQuote() {
  return { ...quotes[generateRandomInt(quotes.length)] };
}

function renderQuote(quote) {
  const { text, author } = quote;
  const quoteElement = document.getElementById("quote");
  const authorElement = document.getElementById("author");
  quoteElement.textContent = text;
  authorElement.textContent = author;
}

export { getRandomQuote, renderQuote };
