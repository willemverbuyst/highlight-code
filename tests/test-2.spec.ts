import { expect, test } from "@playwright/test";

test("highlights html", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByPlaceholder("add your code here").click();
  await page
    .getByPlaceholder("add your code here")
    .fill(
      '<body>\n  <header>\n    <h1 class="title">Title</h1>\n  </header>\n  <main>\n    <section>\n      <p>This is a paragraph!</p>\n    </section>\n    <section id="list">\n      <ul>\n        <li>List item 1</li>\n        <li>List item 2</li>\n      </ul>\n    </section>\n  </main>\n</body>'
    );
  await expect(page.locator("#output")).toContainText(
    '<body> <header> <h1 class="title">Title</h1> </header> <main> <section> <p>This is a paragraph!</p> </section> <section id="list"> <ul> <li>List item 1</li> <li>List item 2</li> </ul> </section> </main> </body>'
  );
});
