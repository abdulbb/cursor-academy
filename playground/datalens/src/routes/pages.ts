import { Router } from "express";
import { getMetrics } from "../analyzers/metrics.js";
import { listStoredTickets } from "../pipeline/store.js";

export const pageRouter = Router();

pageRouter.get("/", (_request, response) => {
  response.render("index.njk", {
    pageTitle: "DataLens",
    metrics: getMetrics(),
    tickets: listStoredTickets().slice(0, 6),
  });
});
