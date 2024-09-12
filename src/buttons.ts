import { highlightHTML, resetHTML } from "./html-functions";
import { HTML_STRING } from "./htmlString";

export function setupButtonHighlightHTML(element: HTMLButtonElement) {
  element.addEventListener("click", () => highlightHTML(HTML_STRING));
}

export function setupButtonRegularHTML(element: HTMLButtonElement) {
  element.addEventListener("click", () => resetHTML(HTML_STRING));
}
