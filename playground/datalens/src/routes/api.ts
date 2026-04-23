import { Router } from "express";
import { getMetrics } from "../analyzers/metrics.js";
import { listStoredTickets } from "../pipeline/store.js";

export const apiRouter = Router();

apiRouter.get("/tickets", (_request, response) => {
  response.json({ tickets: listStoredTickets() });
});

apiRouter.get("/metrics", (_request, response) => {
  response.json({ metrics: getMetrics() });
});
