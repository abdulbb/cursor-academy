import { summarizeTickets } from "../pipeline/aggregate.js";
import { listStoredTickets } from "../pipeline/store.js";

export function getMetrics() {
  const tickets = listStoredTickets();
  return summarizeTickets(tickets);
}
