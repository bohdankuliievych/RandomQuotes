import { addFavCard, removeFavCard } from "./favCard.js";

const svgPath = document.getElementById("vivid-svg");

function enableFavBtn(btn, para) {
  if (para.textContent === "Click the button to get a random quote") {
    btn.removeAttribute("disabled");
  }
}

function disableFavBtn(btn) {
  btn.setAttribute("disabled", "true");
}

function handleFavBtnColor(isFavourite) {
  if (isFavourite) {
    svgPath.setAttribute("fill", "#ffd732");
    return;
  }
  svgPath.setAttribute("fill", "none");
}

function toggleQuote(quote, favContainer) {
  if (!quote.isFavourite) {
    quote.isFavourite = "true";
    addFavCard(quote, favContainer);
    handleFavBtnColor(quote.isFavourite);
    return;
  }
  quote.isFavourite = !quote.isFavourite;
  removeFavCard(quote);
  handleFavBtnColor(quote.isFavourite);
}

export { enableFavBtn, disableFavBtn, handleFavBtnColor, toggleQuote };
