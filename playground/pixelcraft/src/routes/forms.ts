import { Router } from "express";
import { addSubmission, listSubmissions } from "../utils/submissions.js";

export const formRouter = Router();

formRouter.post("/contact", (request, response) => {
  addSubmission({
    name: String(request.body.name ?? ""),
    email: String(request.body.email ?? ""),
    company: String(request.body.company ?? ""),
  });

  response.locals.lastSubmissionCount = listSubmissions().length;
});

formRouter.get("/submissions", (_request, response) => {
  response.json({ submissions: listSubmissions() });
});
