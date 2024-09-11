const HTML_STRING = `
  <body>
    <header>
      <h1>Title</h1>
    </header>
    <main>
      <section>
        <p>This is a paragraph!</p>
      </section>
      <section>
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
    .replace(/(&lt;\/?[\w-]+&gt;)/g, '<span class="html-tag">$1</span>');

  const textField = document.querySelector<HTMLElement>("#html-text");
  if (textField) textField.innerHTML = output;
}
