import createrCards from "./initCreateCards.js";
import initBtns from "./initBtns.js";
import desabledBtn from "./initDesabledBtn.js";
import initModal from "./initModal.js";

desabledBtn();
initBtns();

const ts = "1628813555";
const pK = "209675a6c91c94c2bb8ad65773eb9d53";
const md5 = "c1ca217ecb7f359f91c027d71df11c04";

let num_offSet = 0;

export default function requition(num) {
  num_offSet += num;
  if (num_offSet < 1 || num == null) {
    num_offSet = 0;
    desabledBtn(1);
  } else {
    desabledBtn(2);
  }
  console.log(num_offSet);
  const f = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${pK}&hash=${md5}&limit=6&offset=${num_offSet}`;

  fetch(f)
    .then((result) => {
      return result.json();
    })
    .then((result) => {
      const arrayHero = result.data.results.map((element) => {
        return element;
      });

      return arrayHero;
    })
    .then((arrayHero) => {
      createrCards(arrayHero);
    });
}

requition(0);
