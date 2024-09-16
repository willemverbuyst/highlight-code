import { expect, test } from "@playwright/test";

const CSS_STRING = `
header {
  width: 100%;
  text-align: center;

  h1 {
    color: orangered;
  }
}

#page-header {
  color: pink;
  font-size: 3rem;
}

.btn-section {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;
}
`;

test("highlights css", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByLabel("CSS").check();
  await page.getByPlaceholder("add your code here").click();
  await page.getByPlaceholder("add your code here").fill(CSS_STRING);
  await expect(page.locator("#output")).toContainText(
    "header { width: 100%; text-align: center; h1 { color: orangered; } } #page-header { color: pink; font-size: 3rem; } .btn-section { width: 100%; display: flex; justify-content: center; gap: 1rem; }"
  );
});
