import { describe, expect, test } from "vitest";
import {
  highlightHTML,
  replaceSymbolsInHTMLForDisplay,
} from "./html-functions";

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

describe("highlightHTML", () => {
  test("highlights basic HTML tags", () => {
    const inputHTML = "<div></div>";
    const expectedOutput =
      '<span class="html-symbol">&lt;</span><span class="html-element">div</span><span class="html-symbol">&gt;</span><span class="html-symbol">&lt;/</span><span class="html-element">div</span><span class="html-symbol">&gt;</span>';

    expect(highlightHTML(inputHTML)).toBe(expectedOutput);
  });

  test("highlights HTML tags with a class attribute", () => {
    const inputHTML = '<div class="container"></div>';

    const expectedOutput =
      '<span class="html-symbol">&lt;</span>' +
      '<span class="html-element">div</span> ' +
      '<span class="html-attribute">class</span>' +
      '<span class="html-symbol">="</span>' +
      '<span class="html-attribute">container</span>' +
      '<span class="html-symbol">"</span>' +
      '<span class="html-symbol">&gt;</span>' +
      '<span class="html-symbol">&lt;/</span>' +
      '<span class="html-element">div</span>' +
      '<span class="html-symbol">&gt;</span>';

    expect(highlightHTML(inputHTML)).toBe(expectedOutput);
  });

  test("highlights HTML tags with an id attribute", () => {
    const inputHTML = '<div id="main"></div>';

    const expectedOutput =
      '<span class="html-symbol">&lt;</span>' +
      '<span class="html-element">div</span> ' +
      '<span class="html-attribute">id</span>' +
      '<span class="html-symbol">="</span>' +
      '<span class="html-attribute">main</span>' +
      '<span class="html-symbol">"</span>' +
      '<span class="html-symbol">&gt;</span>' +
      '<span class="html-symbol">&lt;/</span>' +
      '<span class="html-element">div</span>' +
      '<span class="html-symbol">&gt;</span>';

    expect(highlightHTML(inputHTML)).toBe(expectedOutput);
  });

  test("highlights HTML tags with class and id attributes", () => {
    const inputHTML = '<div class="container" id="main"></div>';

    const expectedOutput =
      '<span class="html-symbol">&lt;</span>' +
      '<span class="html-element">div</span> ' +
      '<span class="html-attribute">class</span>' +
      '<span class="html-symbol">="</span>' +
      '<span class="html-attribute">container</span>' +
      '<span class="html-symbol">"</span> ' +
      '<span class="html-attribute">id</span>' +
      '<span class="html-symbol">="</span>' +
      '<span class="html-attribute">main</span>' +
      '<span class="html-symbol">"</span>' +
      '<span class="html-symbol">&gt;</span>' +
      '<span class="html-symbol">&lt;/</span>' +
      '<span class="html-element">div</span>' +
      '<span class="html-symbol">&gt;</span>';

    expect(highlightHTML(inputHTML)).toBe(expectedOutput);
  });

  test("highlights HTML tags without attributes", () => {
    const inputHTML = "<p>Hello</p>";
    const expectedOutput =
      '<span class="html-symbol">&lt;</span><span class="html-element">p</span>' +
      '<span class="html-symbol">&gt;</span>Hello' +
      '<span class="html-symbol">&lt;/</span><span class="html-element">p</span>' +
      '<span class="html-symbol">&gt;</span>';

    expect(highlightHTML(inputHTML)).toBe(expectedOutput);
  });

  test("handles empty input string", () => {
    const inputHTML = "";

    expect(inputHTML).toBe("");
  });

  test("does not double-escape already escaped HTML", () => {
    const inputHTML = "&lt;div&gt;&lt;/div&gt;";
    const expectedOutput =
      '<span class="html-symbol">&lt;</span><span class="html-element">div</span><span class="html-symbol">&gt;</span><span class="html-symbol">&lt;/</span><span class="html-element">div</span><span class="html-symbol">&gt;</span>';

    expect(highlightHTML(inputHTML)).toBe(expectedOutput);
  });

  test("should handle nested html", () => {
    const inputHTML =
      "<body>" +
      "<header>" +
      '<h1 class="title" id="page-title">Title</h1>' +
      "</header>" +
      "<main>" +
      "<section><p>This is a paragraph!</p></section>" +
      '<section id="list"><ul><li>List item 1</li><li>List item 2</li></ul></section>' +
      "</main></body>";

    const expectedOutput =
      '<span class="html-symbol">&lt;</span>' +
      '<span class="html-element">body</span>' +
      '<span class="html-symbol">&gt;</span>' +
      '<span class="html-symbol">&lt;</span>' +
      '<span class="html-element">header</span>' +
      '<span class="html-symbol">&gt;</span>' +
      '<span class="html-symbol">&lt;</span>' +
      '<span class="html-element">h1</span> ' +
      '<span class="html-attribute">class</span>' +
      '<span class="html-symbol">="</span>' +
      '<span class="html-attribute">title</span>' +
      '<span class="html-symbol">"</span> ' +
      '<span class="html-attribute">id</span>' +
      '<span class="html-symbol">="</span>' +
      '<span class="html-attribute">page-title</span>' +
      '<span class="html-symbol">"</span>' +
      '<span class="html-symbol">&gt;</span>Title<span class="html-symbol">&lt;/</span>' +
      '<span class="html-element">h1</span>' +
      '<span class="html-symbol">&gt;</span>' +
      '<span class="html-symbol">&lt;/</span>' +
      '<span class="html-element">header</span>' +
      '<span class="html-symbol">&gt;</span>' +
      '<span class="html-symbol">&lt;</span>' +
      '<span class="html-element">main</span>' +
      '<span class="html-symbol">&gt;</span>' +
      '<span class="html-symbol">&lt;</span>' +
      '<span class="html-element">section</span>' +
      '<span class="html-symbol">&gt;</span>' +
      '<span class="html-symbol">&lt;</span>' +
      '<span class="html-element">p</span>' +
      '<span class="html-symbol">&gt;</span>This is a paragraph!<span class="html-symbol">&lt;/</span>' +
      '<span class="html-element">p</span>' +
      '<span class="html-symbol">&gt;</span>' +
      '<span class="html-symbol">&lt;/</span>' +
      '<span class="html-element">section</span><span class="html-symbol">&gt;</span>' +
      '<span class="html-symbol">&lt;</span>' +
      '<span class="html-element">section</span> ' +
      '<span class="html-attribute">id</span>' +
      '<span class="html-symbol">="</span>' +
      '<span class="html-attribute">list</span>' +
      '<span class="html-symbol">"</span>' +
      '<span class="html-symbol">&gt;</span>' +
      '<span class="html-symbol">&lt;</span>' +
      '<span class="html-element">ul</span>' +
      '<span class="html-symbol">&gt;</span>' +
      '<span class="html-symbol">&lt;</span>' +
      '<span class="html-element">li</span>' +
      '<span class="html-symbol">&gt;</span>List item 1<span class="html-symbol">&lt;/</span>' +
      '<span class="html-element">li</span>' +
      '<span class="html-symbol">&gt;</span>' +
      '<span class="html-symbol">&lt;</span>' +
      '<span class="html-element">li</span>' +
      '<span class="html-symbol">&gt;</span>List item 2<span class="html-symbol">&lt;/</span>' +
      '<span class="html-element">li</span>' +
      '<span class="html-symbol">&gt;</span>' +
      '<span class="html-symbol">&lt;/</span>' +
      '<span class="html-element">ul</span>' +
      '<span class="html-symbol">&gt;</span>' +
      '<span class="html-symbol">&lt;/</span>' +
      '<span class="html-element">section</span>' +
      '<span class="html-symbol">&gt;</span>' +
      '<span class="html-symbol">&lt;/</span>' +
      '<span class="html-element">main</span>' +
      '<span class="html-symbol">&gt;</span>' +
      '<span class="html-symbol">&lt;/</span>' +
      '<span class="html-element">body</span>' +
      '<span class="html-symbol">&gt;</span>';

    expect(highlightHTML(inputHTML)).toBe(expectedOutput);
  });
});
