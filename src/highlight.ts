const HTML_STRING = `
<div>
<div>
  <h1>Title</h1>
  <p>This is a paragraph.</p>
  <ul>
    <li>List item 1</li>
    <li>List item 2</li>
  </ul>
</div>
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
}

export function convertHTMLStringToDOMElementsRecursively() {
  // Function to recursively extract all elements from an HTML string
  // in order to extract all nested elements
  function extractAllElements(html: string) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const allElements: (HTMLElement | ChildNode)[] = [];

    function traverse(node: HTMLElement | ChildNode) {
      if (node.nodeType === 1) {
        // Element node
        allElements.push(node);
      }
      node.childNodes.forEach((child) => traverse(child));
    }

    traverse(doc.body); // Start traversing from the body node
    return allElements;
  }

  const allElements = extractAllElements(HTML_STRING);
  console.log(allElements);
}
