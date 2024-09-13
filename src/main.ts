import {
  setupButtonHighlightCSS,
  setupButtonHighlightHTML,
  setupButtonRegularCSS,
  setupButtonRegularHTML,
} from "./buttons";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <header>
    <h1 id="page-header">Highlight Code</h1>
  </header>
  <section class="btn-section">
    <button id="btn-regular-html" type="button">REGULAR HTML</button>
    <button id="btn-highlight-html" type="button">HIGHLIGHTED HTML</button>
    <button id="btn-regular-css" type="button">REGULAR CSS</button>
    <button id="btn-highlight-css" type="button">HIGHLIGHT CSS</button>
  </section>
  <section id="text-area">
    <textarea id="input"></textarea>
    <div id="output"readonly>
      <pre><code id="code-text"></code></pre>
    </div>
  </section>
  <section>
    
  </section>
`;

setupButtonHighlightHTML(
  document.querySelector<HTMLButtonElement>("#btn-highlight-html")!
);
setupButtonRegularHTML(
  document.querySelector<HTMLButtonElement>("#btn-regular-html")!
);
setupButtonRegularCSS(
  document.querySelector<HTMLButtonElement>("#btn-regular-css")!
);
setupButtonHighlightCSS(
  document.querySelector<HTMLButtonElement>("#btn-highlight-css")!
);

// const textareaInput =
//   document.querySelector<HTMLTextAreaElement>("#textarea-input");
// textareaInput?.addEventListener("input", function () {
//   console.log(textareaInput.value);
// });
