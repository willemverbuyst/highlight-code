const HTML_STRING = `
  <body>
    <header>
      <h1 class="title">Title</h1>
    </header>
    <main>
      <section>
        <p>This is a paragraph!</p>
      </section>
      <section id="list">
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
        </ul>
      </section>
    </main>
  </body>
`;

export function highlightHTML() {
  const output = HTML_STRING.replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/(&lt;\/?)([\w-]+)([\s\S]*?)(&gt;)/g, (_match, p1, p2, p3, p4) => {
      const attrHighlight = p3.replace(
        /(\b(class|id)=)(")([\w-]+)(")/g,
        '<span class="html-attribute">$2</span><span class="html-symbol">$3</span><span class="html-attribute">$4</span><span class="html-symbol">$5</span>'
      );
      return `<span class="html-symbol">${p1}</span><span class="html-element">${p2}</span>${attrHighlight}<span class="html-symbol">${p4}</span>`;
    });

  const textField = document.querySelector<HTMLElement>("#html-text");
  if (textField) textField.innerHTML = output;
}
