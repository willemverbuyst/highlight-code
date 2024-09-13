import { setupButtonCSS, setupButtonHTML } from "./buttons";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <header>
    <h1 id="page-header">Highlight Code</h1>
  </header>
  <section id="text-area">
    <textarea id="input"></textarea>
    <div id="output"readonly>
      <pre><code id="code-text"></code></pre>
    </div>
  </section>
  <section class="btn-section">
    <button id="btn-html" type="button">HTML</button>
    <button id="btn-css" type="button">CSS</button>
  </section>
`;

setupButtonHTML(document.querySelector<HTMLButtonElement>("#btn-html")!);

setupButtonCSS(document.querySelector<HTMLButtonElement>("#btn-css")!);
