const HTML_STRING = `
<body>
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
</body>
`;

export function convertHTMLStringToDOMElements() {
  function parseHTMLString(html: string) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    // Convert the child nodes of the body into an array
    // This will give us an array of top-level elements
    const elementsArray = Array.from(doc.body.children);
    return elementsArray;
  }

  const elements = parseHTMLString(HTML_STRING);
  console.log(elements);
  const textField = document.querySelector<HTMLElement>("#html-text");
  if (textField)
    textField.innerHTML = elements
      .map((e) =>
        e.innerHTML
          .toString()
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#039;")
      )
      .join("");
}

export function convertHTMLStringToDOMElementsRecursively() {
  // Function to recursively extract all elements from an HTML string
  // in order to extract all nested elements
  function extractAllElements(html: string) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const allElements: Element[] = [];

    function traverse(node: Element) {
      if (node.nodeType === 1) {
        // Element node
        allElements.push(node);
      }
      node.childNodes.forEach((child) => traverse(child as Element));
    }

    traverse(doc.body); // Start traversing from the body node
    return allElements;
  }

  const allElements = extractAllElements(HTML_STRING);
  console.log(allElements);
  const textField = document.querySelector<HTMLElement>("#html-text");
  if (textField)
    textField.innerHTML = allElements.map((e) =>
      e.innerHTML
        .toString()
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")
    ).join(`
        
        `);
}
