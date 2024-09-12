import { highlightHTML } from "./highlight";

export function setupButton(element: HTMLButtonElement) {
  element.addEventListener("click", () => highlightHTML());
}
