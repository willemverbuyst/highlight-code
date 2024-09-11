const HTML_STRING = `
  <div>
    <h1>Title</h1>
    <section>
      <p>This is a paragraph.</p>
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
      </ul>
    </section>
  </div>
`;

export function highlightTags() {
  // First, escape the "<" and ">" characters
  const output = HTML_STRING.replace(/</g, "&lt;") // Escape "<"
    .replace(/>/g, "&gt;") // Escape ">"
    // Match and wrap all tags (opening and closing) with <span class="html-tag">
    .replace(/(&lt;\/?[\w-]+&gt;)/g, '<span class="html-tag">$1</span>');

  const textField = document.querySelector<HTMLElement>("#html-text");
  if (textField) textField.innerHTML = output;
}
