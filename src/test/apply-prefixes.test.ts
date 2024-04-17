import * as assert from "assert";
import { applyPrefixes, prefixesMap } from "../utils/apply-prefixes";

suite("applyPrefixes function", () => {
  Object.entries(prefixesMap).forEach(([prefix, replacement]) => {
    test(`should apply prefix '${prefix}' correctly`, () => {
      const input = `foo-bar${prefix}.ts`;
      const expectedOutput = `foo-bar${replacement}.ts`;
      assert.strictEqual(applyPrefixes(input), expectedOutput);
    });
  });
});
