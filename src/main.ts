import { setupButtonHighlightHTML, setupButtonRegularHTML } from "./buttons";
import { replaceSymbolsInHTMLForDisplay } from "./html-functions";
import { HTML_STRING } from "./htmlString";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <header>
      <h1 id="page-header">Highlight Code</h1>
    </header>
    <section class="btn">
      <button id="btn-regular" type="button">REGULAR HTML</button>
      <button id="btn-highlight" type="button">HIGHLIGHTED HTML</button>
    </section>
    <section>
      <pre>
        <code id="html-text">
          ${replaceSymbolsInHTMLForDisplay(HTML_STRING)}
        </code>
      </pre>
    </section>
  </div>
`;

setupButtonHighlightHTML(
  document.querySelector<HTMLButtonElement>("#btn-highlight")!
);
setupButtonRegularHTML(
  document.querySelector<HTMLButtonElement>("#btn-regular")!
);
