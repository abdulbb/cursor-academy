import { db } from "./db.js";
import type { Project } from "../models/project.js";

export function listProjects(): Project[] {
  return db.prepare("SELECT id, name, owner, status FROM projects ORDER BY id").all() as Project[];
}

export function getProject(id: number): Project | undefined {
  return db.prepare("SELECT id, name, owner, status FROM projects WHERE id = ?").get(id) as
    | Project
    | undefined;
}
