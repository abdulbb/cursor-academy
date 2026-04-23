import { db } from "./db.js";
import type { Task } from "../models/task.js";

export function listTasks(projectId?: number): Task[] {
  if (projectId) {
    return db
      .prepare(
        "SELECT id, projectId, title, description, status, priority, assigneeId FROM tasks WHERE projectId = ? ORDER BY id",
      )
      .all(projectId) as Task[];
  }

  return db
    .prepare("SELECT id, projectId, title, description, status, priority, assigneeId FROM tasks ORDER BY id")
    .all() as Task[];
}

export function createTask(task: Omit<Task, "id">): Task {
  const result = db
    .prepare(
      `
        INSERT INTO tasks (projectId, title, description, status, priority, assigneeId)
        VALUES (?, ?, ?, ?, ?, ?)
      `,
    )
    .run(task.projectId, task.title, task.description, task.status, task.priority, task.assigneeId);

  return { id: Number(result.lastInsertRowid), ...task };
}

export function updateTask(id: number, updates: Partial<Omit<Task, "id">>): Task | undefined {
  const current = db
    .prepare("SELECT id, projectId, title, description, status, priority, assigneeId FROM tasks WHERE id = ?")
    .get(id) as Task | undefined;

  if (!current) {
    return undefined;
  }

  const nextTask: Task = {
    ...current,
    title: updates.title ?? current.title,
    description: updates.description ?? current.description,
    priority: updates.priority ?? current.priority,
    assigneeId: updates.assigneeId ?? current.assigneeId,
    status: updates.status ?? current.status,
    projectId: current.projectId,
  };

  db.prepare(
    `
      UPDATE tasks
      SET title = ?, description = ?, status = ?, priority = ?, assigneeId = ?
      WHERE id = ?
    `,
  ).run(nextTask.title, nextTask.description, nextTask.status, nextTask.priority, nextTask.assigneeId, id);

  return nextTask;
}
