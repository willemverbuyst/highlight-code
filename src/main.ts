import "./style.css";
import { setupTextField } from "./ui/dom";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <header>
    <h1>Highlight Code</h1>
  </header>
  <section id="code-language-group" class="radio-section">
    <input type="radio" id="html" name="code-language" value="HTML" checked="checked">
    <label for="html">HTML</label><br>
    <input type="radio" id="css" name="code-language" value="CSS">
    <label for="css">CSS</label><br>
  </section>
  <section id="text-fields">
    <textarea id="input" placeholder="add your code here"></textarea>
    <div id="output" readonly>
      <pre><code id="code-text"><span class="placeholder">output</span></code></pre>
    </div>
  </section>
  
`;

setupTextField();
