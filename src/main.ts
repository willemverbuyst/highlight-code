import { setupButtonAll, setupButtonTop } from "./button";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Highlighted HTML</h1>
    <div class="card">
      <button id="btn-top" type="button">TOP LEVEL HTML</button>
      <button id="btn-all" type="button">ALL HTML ELEMENTS</button>
    </div>
  </div>
`;

setupButtonAll(document.querySelector<HTMLButtonElement>("#btn-all")!);
setupButtonTop(document.querySelector<HTMLButtonElement>("#btn-top")!);
