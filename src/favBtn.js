import { addFavCard, removeFavCard } from "./favCard.js";

const favContainer = document.getElementById("fav-container");
const svgPath = document.getElementById("vivid-svg");

function handleFavBtnColor(isFavourite) {
  // if it is fav - fill star
  if (isFavourite) {
    svgPath.setAttribute("fill", "#ffd732");
    return;
  }
  // if not keep star outlined
  svgPath.setAttribute("fill", "none");
}

function toggleFavQuote(quote) {
  console.log(quote);
  
  // const currentQuote = quote;

  // if is not fav
  if (!quote.isFavourite) {
    quote.isFavourite = "true";
    addFavCard(quote, favContainer);
    handleFavBtnColor(quote.isFavourite);
    return;
  }
  // if it is fav
  quote.isFavourite = !quote.isFavourite;
  removeFavCard(quote);

  handleFavBtnColor(quote.isFavourite);
}
export { handleFavBtnColor, toggleFavQuote };
