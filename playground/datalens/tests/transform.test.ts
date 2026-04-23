import test from "node:test";
import assert from "node:assert/strict";
import { parseTimestamp } from "../src/pipeline/transform.js";

test("parseTimestamp handles basic UTC strings", () => {
  const date = parseTimestamp("2026-04-01T10:15:00Z");

  assert.equal(date.toISOString(), "2026-04-01T10:15:00.000Z");
});
