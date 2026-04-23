import test from "node:test";
import assert from "node:assert/strict";
import { spawn } from "node:child_process";

const baseUrl = "http://127.0.0.1:4200";

async function waitForServer() {
  for (let attempt = 0; attempt < 20; attempt += 1) {
    try {
      const response = await fetch(`${baseUrl}/`);
      if (response.ok) {
        return;
      }
    } catch {
      // keep polling until the server is ready
    }

    await new Promise((resolve) => setTimeout(resolve, 150));
  }

  throw new Error("PixelCraft server did not start in time");
}

test("contact form submission redirects back with a success marker", async () => {
  const server = spawn(process.execPath, ["--import", "tsx", "src/server.ts"], {
    cwd: new URL("..", import.meta.url),
    stdio: "ignore",
  });

  try {
    await waitForServer();

    const response = await fetch(`${baseUrl}/contact`, {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        name: "Avery",
        email: "avery@example.com",
        company: "Cursor Academy",
      }),
      redirect: "manual",
      signal: AbortSignal.timeout(2000),
    });

    assert.equal(response.status, 302);
    assert.equal(response.headers.get("location"), "/?submitted=1");
  } finally {
    server.kill("SIGTERM");
  }
});
