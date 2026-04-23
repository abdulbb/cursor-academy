import express from "express";
import nunjucks from "nunjucks";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadRawTickets } from "./pipeline/load.js";
import { replaceTickets } from "./pipeline/store.js";
import { transformTickets } from "./pipeline/transform.js";
import { apiRouter } from "./routes/api.js";
import { pageRouter } from "./routes/pages.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = Number(process.env.PORT ?? 4300);

nunjucks.configure(path.resolve(__dirname, "../templates"), {
  autoescape: true,
  express: app,
});

replaceTickets(transformTickets(loadRawTickets()));

app.set("view engine", "njk");
app.use(express.json());
app.use("/", pageRouter);
app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`DataLens running on http://localhost:${port}`);
});
