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

function toggleQuote(quote, favContainer, favArray) {
  const foundInFavs = favArray.find((favQuote) => favQuote.id === quote.id);
  if (!foundInFavs) {
    favArray.push(quote);
    addFavCard(quote, favContainer);
  }
  if (foundInFavs) {
    const foundIndex = favArray.findIndex(
      (favQuote) => favQuote.id === quote.id
    );
    favArray.splice(foundIndex, 1);
    removeFavCard(quote);
  }
  handleFavBtnColor(!foundInFavs);
}

export { enableFavBtn, disableFavBtn, handleFavBtnColor, toggleQuote };
