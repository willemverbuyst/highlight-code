import { highlightCSS } from "../lib/css-functions";
import { highlightHTML } from "../lib/html-functions";

export function setupTextField() {
  const textareaInput = document.querySelector<HTMLTextAreaElement>("#input");

  let codeLanguage: string | undefined = "HTML";

  const radioGroup = document.querySelector<HTMLInputElement>(
    "#code-language-group"
  );

  radioGroup?.addEventListener("input", (e) => {
    codeLanguage = (e?.target as HTMLInputElement)?.value;
  });

  textareaInput?.addEventListener("input", () => {
    if (codeLanguage === "HTML") {
      const output = highlightHTML(textareaInput?.value);

      const textField = document.querySelector<HTMLElement>("#code-text");
      if (textField) textField.innerHTML = output;
    } else {
      const output = highlightCSS(textareaInput?.value);

      const textField = document.querySelector<HTMLElement>("#code-text");
      if (textField) textField.innerHTML = output;
    }
  });
}
