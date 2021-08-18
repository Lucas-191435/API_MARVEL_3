export default function desabledBtn(num) {
  const btns_back = document.querySelectorAll(".btn_back");
  if (num == 1) {
    btns_back.forEach((btn) => (btn.disabled = true));
  } else if (num == 2) {
    btns_back.forEach((btn) => (btn.disabled = false));
  }
}
