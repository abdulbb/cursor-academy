import test from "node:test";
import assert from "node:assert/strict";
import { listProjects } from "../src/services/project-service.js";
import { listTasks } from "../src/services/task-service.js";

test("seeded data is available for the dashboard", () => {
  const projects = listProjects();
  const tasks = listTasks();

  assert.ok(projects.length >= 2);
  assert.ok(tasks.length >= 3);
});
