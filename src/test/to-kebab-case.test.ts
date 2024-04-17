import * as assert from "assert";
import { toKebabCase } from "../utils/to-kebab-case";

suite("toKebabCase function", () => {
  test("should convert a string with spaces to kebab-case", () => {
    const input = "This is an Example String";
    const output = "this-is-an-example-string";
    assert.strictEqual(toKebabCase(input), output);
  });

  test("should convert a string with upper camel case to kebab-case", () => {
    const input = "ExampleFileName";
    const output = "example-file-name";
    assert.strictEqual(toKebabCase(input), output);
  });

  test("should convert a string with snake case to kebab-case", () => {
    const input = "example_file_name";
    const output = "example-file-name";
    assert.strictEqual(toKebabCase(input), output);
  });

  test("should convert a string with kebab-case to kebab-case", () => {
    const input = "example-file-name";
    const output = "example-file-name";
    assert.strictEqual(toKebabCase(input), output);
  });

  test("should convert a string with mixed case to kebab-case", () => {
    const input = "Example_File Name";
    const output = "example-file-name";
    assert.strictEqual(toKebabCase(input), output);
  });

  test("should handle empty string", () => {
    const input = "";
    const output = "";
    assert.strictEqual(toKebabCase(input), output);
  });
});
