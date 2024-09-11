import { setupButton } from "./button";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Highlighted HTML</h1>
    <div class="main">
      <button id="btn-highlight" type="button">HIGHLIGHT HTML</button>
      <pre><code id="html-text"></code></pre>
    </div>
    
  </div>
`;

setupButton(document.querySelector<HTMLButtonElement>("#btn-highlight")!);
