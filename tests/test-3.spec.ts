import { expect, test } from "@playwright/test";

test("highlights css", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByLabel("CSS").check();
  await page.getByPlaceholder("add your code here").click();
  await page
    .getByPlaceholder("add your code here")
    .fill(
      "header {\n  width: 100%;\n  text-align: center;\n\n  h1 {\n    color: orangered;\n  }\n}\n\n#page-header {\n  color: pink;\n  font-size: 3rem;\n}\n\n.btn-section {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n}"
    );
  await expect(page.locator("#output")).toContainText(
    "header { width: 100%; text-align: center; h1 { color: orangered; } } #page-header { color: pink; font-size: 3rem; } .btn-section { width: 100%; display: flex; justify-content: center; gap: 1rem; }"
  );
});
