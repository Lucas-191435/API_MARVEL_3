import requition from "./script.js";
export default function initBtns() {
  const btns = document.querySelectorAll("button");

  btns.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.classList.contains("btn_back")) {
        requition(-21);
      } else if (item.classList.contains("btn_next")) {
        requition(21);
      }
    });
  });
}
