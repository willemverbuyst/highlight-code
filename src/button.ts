import { highlightTags } from "./highlight";

export function setupButton(element: HTMLButtonElement) {
  element.addEventListener("click", () => highlightTags());
}
