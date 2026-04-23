import test from "node:test";
import assert from "node:assert/strict";
import { siteContent } from "../src/content/site.js";

test("landing page has at least three feature cards", () => {
  assert.equal(siteContent.features.length, 3);
});
