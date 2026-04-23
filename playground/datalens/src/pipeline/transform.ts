import type { RawTicket, Ticket } from "../models/ticket.js";

export function parseTimestamp(value: string): Date {
  if (value.endsWith("Z")) {
    return new Date(value);
  }

  const sanitized = value.replace("Z", "");
  return new Date(sanitized);
}

export function transformTickets(rows: RawTicket[]): Ticket[] {
  return rows.map((row) => ({
    id: row.id,
    createdAt: parseTimestamp(row.createdAt),
    status: row.status as Ticket["status"],
    reopened: row.reopened === "true",
    slaHours: Number(row.slaHours),
  }));
}
