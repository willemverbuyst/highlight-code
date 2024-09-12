import {
  setupButtonHighlightHTML,
  setupButtonRegularCSS,
  setupButtonRegularHTML,
} from "./buttons";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <header>
      <h1 id="page-header">Highlight Code</h1>
    </header>
    <section class="btn-section">
      <button id="btn-regular-html" type="button">REGULAR HTML</button>
      <button id="btn-highlight-html" type="button">HIGHLIGHTED HTML</button>
      <button id="btn-regular-css" type="button">REGULAR CSS</button>
    </section>
    <section>
      <pre>
        <code id="code-text">
        </code>
      </pre>
    </section>
  </div>
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
