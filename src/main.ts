import { setupButtonAll, setupButtonTop } from "./button";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Highlighted HTML</h1>
    <div class="main">
      <button id="btn-top" type="button">TOP LEVEL HTML</button>
      <button id="btn-all" type="button">ALL HTML ELEMENTS</button>
      <pre><code id="html-text"></code></pre>
    </div>
  </div>
`;

setupButtonAll(document.querySelector<HTMLButtonElement>("#btn-all")!);
setupButtonTop(document.querySelector<HTMLButtonElement>("#btn-top")!);
