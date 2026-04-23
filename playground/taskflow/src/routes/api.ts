import { Router } from "express";
import { requireAuth } from "../middleware/auth.js";
import { getProject, listProjects } from "../services/project-service.js";
import { createTask, listTasks, updateTask } from "../services/task-service.js";

export const apiRouter = Router();

apiRouter.get("/projects", (_request, response) => {
  response.json({ projects: listProjects() });
});

apiRouter.get("/projects/:projectId", (request, response) => {
  const project = getProject(Number(request.params.projectId));

  if (!project) {
    response.status(404).json({ error: "Project not found" });
    return;
  }

  response.json({ project, tasks: listTasks(project.id) });
});

apiRouter.get("/tasks", (request, response) => {
  const projectId = request.query.projectId ? Number(request.query.projectId) : undefined;
  response.json({ tasks: listTasks(projectId) });
});

apiRouter.post("/tasks", requireAuth, (request, response) => {
  const created = createTask({
    projectId: Number(request.body.projectId),
    title: String(request.body.title),
    description: String(request.body.description ?? ""),
    status: request.body.status,
    priority: request.body.priority ?? "medium",
    assigneeId: request.body.assigneeId ? Number(request.body.assigneeId) : null,
  });

  response.status(201).json({ task: created });
});

apiRouter.put("/tasks/:taskId", requireAuth, (request, response) => {
  const updated = updateTask(Number(request.params.taskId), {
    title: request.body.title,
    description: request.body.description,
    status: request.body.status,
    priority: request.body.priority,
    assigneeId: request.body.assigneeId ? Number(request.body.assigneeId) : null,
  });

  if (!updated) {
    response.status(404).json({ error: "Task not found" });
    return;
  }

  response.json({ task: updated });
});
