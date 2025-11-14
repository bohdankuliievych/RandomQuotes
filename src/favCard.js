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
		<p class="author">${author}</p>`;
  container.appendChild(favCard);
}

function removeFavCard({ id }) {
  const card = document.querySelector(`.favourite-card[data-quote-id="${id}"]`);
  // If a card is found, remove it from the DOM
  if (card) {
    card.remove();
  }
}
export { addFavCard, removeFavCard };
