export function resetCSS(cssString: string) {
  const output = cssString;

  const textField = document.querySelector<HTMLElement>("#code-text");
  if (textField) textField.innerHTML = output;
}
