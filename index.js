import quotes from "./src/quotes.js";
import {addFavCard, removeFavCard} from "./src/favCardHandler.js"

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const generateBtn = document.getElementById("generate-btn");
const favButton = document.getElementById("fav-button");
const svgPath = document.getElementById("Vivid-Icons");
const favContainer = document.getElementById("fav-container");
let quoteIndex = null;

function generateRandomQuote() {
  quoteIndex = Math.floor(Math.random() * quotes.length);

  const randomQuote = quotes[quoteIndex];
  const { quote, author } = randomQuote;

  quoteElement.textContent = quote;
  authorElement.textContent = author;

  favButton.removeAttribute("disabled");

  // if it is fav make star gold
  if (randomQuote.isFavourite) {
    svgPath.setAttribute("fill", "#ffd732");
    return;
  }
  // if not keep star outlined
  svgPath.setAttribute("fill", "none");
}

function toggleFavourite() {
  const currentQuote = quotes[quoteIndex];
  if (quoteIndex === null) {
    return;
  }
  // if is not fav
  if (!currentQuote.isFavourite) {
    currentQuote.isFavourite = "true";
    svgPath.setAttribute("fill", "#ffd732");
    addFavCard(currentQuote, favContainer);
    return;
  }
  // if it is fav
  currentQuote.isFavourite = !currentQuote.isFavourite;
  svgPath.setAttribute("fill", "none");
  removeFavCard(currentQuote);
}

generateBtn.addEventListener("click", generateRandomQuote);
favButton.addEventListener("click", toggleFavourite);

// theme, theme button
const body = document.getElementsByTagName("body")[0];
const themeButton = document.getElementById("theme-button");
themeButton.addEventListener("click", () => {
  body.classList.toggle("dark");

  themeButton.classList.toggle("dark");
  themeButton.textContent = themeButton.classList.contains("dark")
    ? "Light"
    : "Dark";
});
