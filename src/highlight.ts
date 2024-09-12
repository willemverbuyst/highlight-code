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

export function highlightTags() {
  const output = HTML_STRING.replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(
      /(&lt;\/?)([\w-]+)(&gt;)/g,
      '<span class="html-symbol">$1</span><span class="html-element">$2</span><span class="html-symbol">$3</span>'
    )
    .replace(
      /(&lt;)([\w-]+\s)(class|id)(=")([a-z-]+)(")(&gt;)/g,
      '<span class="html-symbol">$1</span><span class="html-element">$2</span><span class="html-attribute">$3</span><span class="html-symbol">$4</span><span class="html-attribute">$5</span><span class="html-symbol">$6</span><span class="html-symbol">$7</span>'
    );

  const textField = document.querySelector<HTMLElement>("#html-text");
  if (textField) textField.innerHTML = output;
}
