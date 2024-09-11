import { setupButton } from "./button";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <header>
      <h1>Highlighted HTML</h1>
    </header>
    <section class="btn">
      <button id="btn-highlight" type="button">HIGHLIGHT HTML</button>
    </section>
    <section>
      <pre><code id="html-text"></code></pre>
    </section>
  </div>
`;

setupButton(document.querySelector<HTMLButtonElement>("#btn-highlight")!);
