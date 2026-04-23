import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { RawTicket } from "../models/ticket.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export function loadRawTickets(): RawTicket[] {
  const csvPath = path.resolve(__dirname, "../../data/tickets.csv");
  const csv = fs.readFileSync(csvPath, "utf8").trim();
  const [, ...lines] = csv.split("\n");

  return lines.flatMap((line) => {
    const [id, createdAt, status, reopened, slaHours] = line.split(",");

    if ([id, createdAt, status, reopened, slaHours].some((value) => value === "")) {
      return [];
    }

    return [
      {
        id,
        createdAt,
        status,
        reopened,
        slaHours,
      },
    ];
  });
}
