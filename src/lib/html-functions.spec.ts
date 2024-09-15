import { describe, expect, test } from "vitest";
import { replaceSymbolsInHTMLForDisplay } from "./html-functions";

describe("replaceSymbolsInHTMLForDisplay", () => {
  test("replaces < with &lt; and > with &gt;", () => {
    const input = "<div>Hello</div>";
    const expectedOutput = "&lt;div&gt;Hello&lt;/div&gt;";
    expect(replaceSymbolsInHTMLForDisplay(input)).toBe(expectedOutput);
  });

  test("returns the same string if no < or > is present", () => {
    const input = "Hello World!";
    const expectedOutput = "Hello World!";
    expect(replaceSymbolsInHTMLForDisplay(input)).toBe(expectedOutput);
  });

  test("handles empty string input", () => {
    const input = "";
    const expectedOutput = "";
    expect(replaceSymbolsInHTMLForDisplay(input)).toBe(expectedOutput);
  });

  test("replaces only < and > when mixed with other text", () => {
    const input = "Hello <b>world</b>!";
    const expectedOutput = "Hello &lt;b&gt;world&lt;/b&gt;!";
    expect(replaceSymbolsInHTMLForDisplay(input)).toBe(expectedOutput);
  });

  test("does not double-encode already escaped characters", () => {
    const input = "&lt;div&gt;Hello&lt;/div&gt;";
    const expectedOutput = "&lt;div&gt;Hello&lt;/div&gt;";
    expect(replaceSymbolsInHTMLForDisplay(input)).toBe(expectedOutput);
  });
});
