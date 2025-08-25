function addFavCard({ quote, author }, container) {
  // add card with favourite quote
  const favCard = document.createElement("div");
  favCard.classList.add("favourite-card");
  favCard.classList.add("card");
  favCard.style.width = "18rem";

  const favCardBody = document.createElement("div");
  favCardBody.classList.add("card-body");
  favCard.appendChild(favCardBody);

  favCardBody.innerHTML = `<p>${quote}</p>
		<p class="author">${author}</p>`;
  container.appendChild(favCard);
}

function removeFavCard({ quote }) {
  const cardBodies = document.querySelectorAll(".card-body");
  cardBodies.forEach((cardBody) => {
    if (cardBody.textContent.includes(quote)) {
      const card = cardBody.closest(".card");
      // If a card is found, remove it from the DOM
      if (card) {
        card.remove();
      }
    }
  });
}
export { addFavCard, removeFavCard };
