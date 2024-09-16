import { expect, test } from "@playwright/test";

const HTML_STRING = `
<body>
  <header>
    <h1 class="title">Title</h1>
  </header>
  <main>
    <section>
      <p>This is a paragraph!</p>
    </section>
    <section id="list">
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
      </ul>
    </section>
  </main>
</body>
`;

test("test", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByPlaceholder("add your code here").click();
  await page.getByPlaceholder("add your code here").fill(HTML_STRING);
  await expect(page.locator("#output")).toContainText(
    '<body> <header> <h1 class="title">Title</h1> </header> <main> <section> <p>This is a paragraph!</p> </section> <section id="list"> <ul> <li>List item 1</li> <li>List item 2</li> </ul> </section> </main> </body>'
  );
  await expect(page).toHaveScreenshot();
});
