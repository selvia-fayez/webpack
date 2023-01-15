import { newtext, oldtext } from "./vars.js";

var state = false;
replaceText();
export function togglestate() {
  state = !state;
  replaceText();
}
export function replaceText() {
  if (state) {
    newtext.style.display = "block";
    oldtext.style.display = "none";
  } else {
    newtext.style.display = "none";
    oldtext.style.display = "block";
  }
}
