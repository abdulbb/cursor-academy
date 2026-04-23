import Database from "better-sqlite3";
import type { Ticket } from "../models/ticket.js";

const db = new Database("datalens.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS tickets (
    id TEXT PRIMARY KEY,
    createdAt TEXT NOT NULL,
    status TEXT NOT NULL,
    reopened INTEGER NOT NULL,
    slaHours REAL NOT NULL
  );
`);

export function replaceTickets(tickets: Ticket[]) {
  db.prepare("DELETE FROM tickets").run();

  const insert = db.prepare(`
    INSERT INTO tickets (id, createdAt, status, reopened, slaHours)
    VALUES (?, ?, ?, ?, ?)
  `);

  for (const ticket of tickets) {
    insert.run(
      ticket.id,
      ticket.createdAt.toISOString(),
      ticket.status,
      ticket.reopened ? 1 : 0,
      ticket.slaHours,
    );
  }
}

export function listStoredTickets(): Ticket[] {
  const rows = db
    .prepare("SELECT id, createdAt, status, reopened, slaHours FROM tickets ORDER BY createdAt DESC")
    .all() as Array<{
    id: string;
    createdAt: string;
    status: Ticket["status"];
    reopened: number;
    slaHours: number;
  }>;

  return rows.map((row) => ({
    id: row.id,
    createdAt: new Date(row.createdAt),
    status: row.status,
    reopened: row.reopened === 1,
    slaHours: row.slaHours,
  }));
}
