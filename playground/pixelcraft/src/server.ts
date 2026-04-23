import express from "express";
import nunjucks from "nunjucks";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { formRouter } from "./routes/forms.js";
import { pageRouter } from "./routes/pages.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = Number(process.env.PORT ?? 4200);

nunjucks.configure(path.resolve(__dirname, "../templates"), {
  autoescape: true,
  express: app,
});

app.set("view engine", "njk");
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static(path.resolve(__dirname, "../static")));
app.use("/", pageRouter);
app.use("/", formRouter);

app.listen(port, () => {
  console.log(`PixelCraft running on http://localhost:${port}`);
});
