import { highlightCSS } from "./css-functions";
import { highlightHTML } from "./html-functions";

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
      highlightHTML(textareaInput?.value);
    } else {
      highlightCSS(textareaInput?.value);
    }
  });
}
