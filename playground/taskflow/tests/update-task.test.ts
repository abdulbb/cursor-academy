import test from "node:test";
import assert from "node:assert/strict";
import { createTask, listTasks, updateTask } from "../src/services/task-service.js";

test("updateTask persists status changes", () => {
  const created = createTask({
    projectId: 1,
    title: `Status update test ${Date.now()}`,
    description: "Ensure status changes persist",
    status: "todo",
    priority: "medium",
    assigneeId: null,
  });

  const updated = updateTask(created.id, { status: "done" });

  assert.ok(updated);
  assert.equal(updated.status, "done");

  const storedTask = listTasks().find((task) => task.id === created.id);
  assert.ok(storedTask);
  assert.equal(storedTask.status, "done");
});
