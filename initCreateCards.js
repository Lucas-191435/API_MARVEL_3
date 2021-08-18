import initModal from "./initModal.js";
let hasCards = false;
export default function createrCards(num) {
  if (hasCards === false) {
    for (let i = 0; i < num.length; i++) {
      let nameHero = num[i].name;
      let idHero = "#" + num[i].id;
      let imgHero = num[i].thumbnail.path + "." + num[i].thumbnail.extension;

      const element = `<div class="card" >
        <div class="content_card" id='${idHero}' style="background-image: url(${imgHero})">
          <p class="idHero">${idHero}</p>
          <h5>${nameHero}</h5>
        </div>
      </div>`;

      document.querySelector(".container_cards").innerHTML += element;
      hasCards = true;
    }
  } else {
    let cardsHero = document.querySelectorAll(".card");
    cardsHero.forEach((card, index) => {
      let nameHero = num[index].name;
      let idHero = "#" + num[index].id;
      let imgHero =
        num[index].thumbnail.path + "." + num[index].thumbnail.extension;

      let element = `
        <div class="content_card" id='${idHero}' style="background-image: url(${imgHero})">
          <p class="idHero">${idHero}</p>
          <h5>${nameHero}</h5>
        </div>
      `;
      card.innerHTML = element;
    });
  }

  const myCards = document.querySelectorAll(".content_card");
  myCards.forEach((card) => {
    card.addEventListener("click", () => {
      const idHero = card.getAttribute("id");
      initModal(idHero);
    });
  });
}
