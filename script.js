import quotes from "./quotes.js";

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const generateBtn = document.getElementById("generate-btn");

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  const { quote, author } = randomQuote;
  quoteElement.textContent = quote;
  authorElement.textContent = author;
}

generateBtn.addEventListener("click", generateRandomQuote);

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
