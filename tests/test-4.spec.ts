import { expect, test } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByPlaceholder("add your code here").click();
  await page
    .getByPlaceholder("add your code here")
    .fill("<h1>hello world</h1>");
  await expect(page.locator("#code-text")).toContainText(
    "<h1>hello world</h1>"
  );
});
