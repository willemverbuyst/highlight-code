import { highlightCSS, resetCSS } from "./css-functions";
import { CSS_STRING } from "./cssString";
import { highlightHTML, resetHTML } from "./html-functions";
import { HTML_STRING } from "./htmlString";

export function setupButtonHighlightHTML(element: HTMLButtonElement) {
  const textareaInput = document.querySelector<HTMLTextAreaElement>("#input");

  element.addEventListener("click", () =>
    highlightHTML(textareaInput?.value ? textareaInput.value : "no html")
  );
}

export function setupButtonRegularHTML(element: HTMLButtonElement) {
  element.addEventListener("click", () => resetHTML(HTML_STRING));
}

export function setupButtonRegularCSS(element: HTMLButtonElement) {
  element.addEventListener("click", () => resetCSS(CSS_STRING));
}

export function setupButtonHighlightCSS(element: HTMLButtonElement) {
  element.addEventListener("click", () => highlightCSS(CSS_STRING));
}
