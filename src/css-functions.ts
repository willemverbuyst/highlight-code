export function resetCSS(cssString: string) {
  const output = cssString;

  const textField = document.querySelector<HTMLElement>("#code-text");
  if (textField) textField.innerHTML = output;
}

export function highlightCSS(cssString: string) {
  const output = cssString
    .replace(/([.#]?\w[\w-]*)\s*{/g, '<span class="css-selector">$1</span> {')
    .replace(
      /([a-z-]+)(\s*:\s*)([^;]+)(;?)/g,
      '<span class="css-property">$1</span>$2<span class="css-value">$3</span>$4'
    )
    .replace(/({|})/g, '<span class="css-brace">$1</span>');

  const textField = document.querySelector<HTMLElement>("#code-text");
  if (textField) textField.innerHTML = output;
}
