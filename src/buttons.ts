import { highlightCSS } from "./css-functions";
import { highlightHTML } from "./html-functions";

export function setupButtonHTML(element: HTMLButtonElement) {
  const textareaInput = document.querySelector<HTMLTextAreaElement>("#input");

  element.addEventListener("click", () =>
    highlightHTML(
      textareaInput?.value ? textareaInput.value : "nothing to highlight"
    )
  );
}

export function setupButtonCSS(element: HTMLButtonElement) {
  const textareaInput = document.querySelector<HTMLTextAreaElement>("#input");

  element.addEventListener("click", () =>
    highlightCSS(
      textareaInput?.value ? textareaInput.value : "nothing to highlight"
    )
  );
}
