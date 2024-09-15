export function replaceSymbolsInHTMLForDisplay(htmlString: string) {
  return htmlString.replace(/[<>]/g, (match) =>
    match === "<" ? "&lt;" : "&gt;"
  );
}

export function highlightHTML(htmlString: string) {
  const output = replaceSymbolsInHTMLForDisplay(htmlString).replace(
    /(&lt;\/?)([\w-]+)([\s\S]*?)(&gt;)/g,
    (_match, p1, p2, p3, p4) => {
      const attrHighlight = p3.replace(
        /(\b(class|id)=)(")([\w-]+)(")/g,
        '<span class="html-attribute">$2</span><span class="html-symbol">$3</span><span class="html-attribute">$4</span><span class="html-symbol">$5</span>'
      );
      return `<span class="html-symbol">${p1}</span><span class="html-element">${p2}</span>${attrHighlight}<span class="html-symbol">${p4}</span>`;
    }
  );

  const textField = document.querySelector<HTMLElement>("#code-text");
  if (textField) textField.innerHTML = output;
}
