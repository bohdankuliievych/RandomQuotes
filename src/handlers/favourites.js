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

function addFavCard({ id, text, author }, container) {
  // add card with favourite quote
  const favCard = document.createElement("div");
  favCard.classList.add("favourite-card");
  favCard.classList.add("card");
  favCard.dataset.quoteId = id;
  favCard.style.width = "18rem";

  const favCardBody = document.createElement("div");
  favCardBody.classList.add("card-body");
  favCard.appendChild(favCardBody);

  favCardBody.innerHTML = `<p>${text}</p>
		<p class="author">${author}</p><button class="rm-btn">Remove</button>`;
  container.appendChild(favCard);
}

function removeFavCard({ id }) {
  const card = document.querySelector(`.favourite-card[data-quote-id="${id}"]`);
  // If a card is found, remove it from the DOM
  if (card) {
    card.remove();
  }
}

function findQuoteInFavourites({ id }, favouritesArray) {
  return favouritesArray.find((quote) => quote.id === id);
}

function toggleQuote(quote, favContainer, favArray) {
  const foundInFavs = findQuoteInFavourites(quote, favArray);
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

export {
  enableFavBtn,
  disableFavBtn,
  handleFavBtnColor,
  toggleQuote,
  addFavCard,
  removeFavCard,
  findQuoteInFavourites,
};
