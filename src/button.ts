import {
  convertHTMLStringToDOMElements,
  convertHTMLStringToDOMElementsRecursively,
} from "./highlight";

export function setupButtonAll(element: HTMLButtonElement) {
  element.addEventListener("click", () =>
    convertHTMLStringToDOMElementsRecursively()
  );
}

export function setupButtonTop(element: HTMLButtonElement) {
  element.addEventListener("click", () => convertHTMLStringToDOMElements());
}
