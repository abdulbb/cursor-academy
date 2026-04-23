import test from "node:test";
import assert from "node:assert/strict";
import { requireAuth } from "../src/middleware/auth.js";

test("requireAuth returns 401 when authorization header is missing", () => {
  let statusCode: number | undefined;
  let payload: unknown;

  const request = {
    header: () => undefined,
  };

  const response = {
    status(code: number) {
      statusCode = code;
      return this;
    },
    json(body: unknown) {
      payload = body;
      return this;
    },
  };

  let nextCalled = false;

  requireAuth(
    request as never,
    response as never,
    (() => {
      nextCalled = true;
    }) as never,
  );

  assert.equal(statusCode, 401);
  assert.deepEqual(payload, { error: "Missing bearer token" });
  assert.equal(nextCalled, false);
});
