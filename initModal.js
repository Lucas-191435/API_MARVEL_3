export default function initModal(id_Hero) {
  const timeStemp = "1627904423";
  const apiKey = "209675a6c91c94c2bb8ad65773eb9d53";
  const md5 = "09c586d3b7b17163a0c283bbe84e4ee5";

  const idHero = id_Hero.replace("#", "");
  // console.log(idHero);

  const f = `https://gateway.marvel.com/v1/public/characters/${idHero}?ts=${timeStemp}&apikey=${apiKey}&hash=${md5}`;

  // console.log(f);

  fetch(f)
    .then((response) => {
      return response.json();
    })
    .then((jsonParsed) => {
      // console.log(jsonParsed);
      jsonParsed.data.results.forEach((item, index) => {
        const srcImgHero = item.thumbnail.path + "." + item.thumbnail.extension;
        const nameHero = item.name;
        const idHero = item.id;
        const series = item.series.items;
        const stories = item.stories.items;
        const comics = item.comics.items;
        let description = item.description;

        if (description === "" || description === null) {
          description = "Sorry but this hero no have description";
        }

        createDivsCards(
          srcImgHero,
          nameHero,
          idHero,
          index,
          series,
          stories,
          comics,
          description
        );
      });

      const todosLinks = document.querySelectorAll(".list a");
      const todosListContent = document.querySelectorAll(".list .listContent");

      function createDivsCards(
        srcImg,
        nameHero,
        idHero,
        heroiIndex,
        series,
        stories,
        comics,
        description
      ) {
        const container_modal = document.querySelector(".container_modal");

        const container_hero = `
        <button title="btn_close">&#x2715</button>
        <div class="container">
          <div class="imgHero">
            <img src="${srcImg}" alt="${nameHero}" />
            <p>${idHero}</p>
          </div>
          <div class="content">
            <h5>${nameHero}</h5>
            <p class="title_descriton">Descrition:</p>
            <p class="txt_description">${description}</p>
            <div class="list">
              <div>
                <a href="">Series</a>
                <div class="listContent">
                  <ul class="series"></ul>
                </div>
              </div>
              <div>
                <a href="">Stories</a>
                <div class="listContent">
                  <ul class="stories"></ul>
                </div>
              </div>
              <div>
                <a href="">Comics</a>
                <div closs="comics" class="listContent">
                  <ul></ul>
                </div>
              </div>
            </div>
          </div>
        </div>`;

        container_modal.innerHTML = container_hero;

        const listas = [series, stories, comics];
        const listContent = container_modal.querySelectorAll(".listContent");

        listas.forEach((lista, index) => {
          Array.from(lista).forEach((item) => {
            let novaLi = document.createElement("li");
            let nameS = item.name;
            novaLi.innerText = nameS;
            listContent[index].querySelector("ul").appendChild(novaLi);
          });
        });

        container_modal.classList.add("ativo");

        if (container_modal.classList.contains("ativo")) {
          document.querySelector("body").style.overflow = "hidden";
          container_modal.style.top = window.pageYOffset + "px";
          container_modal.style.overflow = "auto";
        }
        const btn_close_modal = container_modal.getElementsByTagName("button");
        btn_close_modal[0].addEventListener("click", () => {
          container_modal.classList.remove("ativo");
          document.querySelector("body").style.overflow = "auto";
        });
      }

      todosLinks.forEach((item, index) => {
        item.addEventListener("click", (evt) => {
          evt.preventDefault();
          removeAtivo(index);
          todosListContent[index].classList.toggle("ativo");
        });
      });

      function removeAtivo(index) {
        todosListContent.forEach((item, index2) => {
          if (index != index2) {
            item.classList.remove("ativo");
          }
        });
      }
    });
}
