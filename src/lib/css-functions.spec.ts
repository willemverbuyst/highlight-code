import { describe, expect, test } from "vitest";
import { highlightCSS } from "./css-functions"; // Adjust the path accordingly

describe("highlightCSS", () => {
  test("highlights basic CSS selectors and properties", () => {
    const inputCSS = "div { color: red; }";
    const result = highlightCSS(inputCSS);

    const expectedOutput =
      '<span class="css-selector">div</span> <span class="css-brace">{</span> ' +
      '<span class="css-property">color</span>: ' +
      '<span class="css-value">red</span>; ' +
      '<span class="css-brace">}</span>';

    expect(result).toBe(expectedOutput);
  });

  test("highlights CSS with class and Id selectors", () => {
    const inputCSS =
      "#header { background-color: blue; } .container { margin: 10px; }";
    const result = highlightCSS(inputCSS);

    const expectedOutput =
      '<span class="css-selector">#header</span> <span class="css-brace">{</span> ' +
      '<span class="css-property">background-color</span>: ' +
      '<span class="css-value">blue</span>; ' +
      '<span class="css-brace">}</span> ' +
      '<span class="css-selector">.container</span> <span class="css-brace">{</span> ' +
      '<span class="css-property">margin</span>: ' +
      '<span class="css-value">10px</span>; ' +
      '<span class="css-brace">}</span>';

    expect(result).toBe(expectedOutput);
  });

  test("highlights multiple CSS properties", () => {
    const inputCSS = "p { font-size: 16px; line-height: 1.5; }";
    const result = highlightCSS(inputCSS);

    const expectedOutput =
      '<span class="css-selector">p</span> <span class="css-brace">{</span> ' +
      '<span class="css-property">font-size</span>: ' +
      '<span class="css-value">16px</span>; ' +
      '<span class="css-property">line-height</span>: ' +
      '<span class="css-value">1.5</span>; ' +
      '<span class="css-brace">}</span>';

    expect(result).toBe(expectedOutput);
  });

  test("handles empty string input", () => {
    const inputCSS = "";
    const result = highlightCSS(inputCSS);

    // The result should be an empty string
    expect(result).toBe("");
  });
});
