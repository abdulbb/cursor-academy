import { Router } from "express";
import { listProjects } from "../services/project-service.js";
import { listTasks } from "../services/task-service.js";

export const pageRouter = Router();

pageRouter.get("/", (_request, response) => {
  const projects = listProjects();
  const tasks = listTasks();

  response.render("index.njk", {
    pageTitle: "TaskFlow Dashboard",
    stats: {
      projects: projects.length,
      tasks: tasks.length,
      inFlight: tasks.filter((task) => task.status === "inprogress").length,
    },
    projects,
    tasks,
  });
});
