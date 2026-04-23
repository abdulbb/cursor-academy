import type { Ticket } from "../models/ticket.js";

export interface TicketSummary {
  total: number;
  reopened: number;
  statusCounts: Record<string, number>;
  averageSlaHours: number;
}

export function summarizeTickets(tickets: Ticket[]): TicketSummary {
  const statusCounts: Record<string, number> = {};
  let reopened = 0;
  let totalSla = 0;

  for (const ticket of tickets) {
    statusCounts[ticket.status] = (statusCounts[ticket.status] ?? 0) + 1;

    if (ticket.reopened) {
      reopened += 1;
    }

    totalSla += ticket.slaHours;
  }

  return {
    total: tickets.length,
    reopened,
    statusCounts,
    averageSlaHours: tickets.length === 0 ? 0 : Math.round((totalSla / tickets.length) * 10) / 10,
  };
}
