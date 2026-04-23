import test from "node:test";
import assert from "node:assert/strict";
import { summarizeTickets } from "../src/pipeline/aggregate.js";
import type { Ticket } from "../src/models/ticket.js";

test("summarizeTickets counts total tickets", () => {
  const tickets: Ticket[] = [
    {
      id: "1",
      createdAt: new Date("2026-04-01T10:00:00Z"),
      status: "open",
      reopened: false,
      slaHours: 8,
    },
    {
      id: "2",
      createdAt: new Date("2026-04-01T11:00:00Z"),
      status: "resolved",
      reopened: true,
      slaHours: 4,
    },
  ];

  const summary = summarizeTickets(tickets);

  assert.equal(summary.total, 2);
  assert.equal(summary.reopened, 1);
  assert.equal(summary.statusCounts.open, 1);
  assert.equal(summary.averageSlaHours, 6);
});
