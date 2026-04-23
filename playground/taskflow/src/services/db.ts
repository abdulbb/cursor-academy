import Database from "better-sqlite3";

const db = new Database("taskflow.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    owner TEXT NOT NULL,
    status TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    role TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY,
    projectId INTEGER NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    status TEXT NOT NULL,
    priority TEXT NOT NULL,
    assigneeId INTEGER,
    FOREIGN KEY(projectId) REFERENCES projects(id),
    FOREIGN KEY(assigneeId) REFERENCES users(id)
  );
`);

const projectCount = db.prepare("SELECT COUNT(*) as count FROM projects").get() as { count: number };

if (projectCount.count === 0) {
  db.prepare("INSERT INTO projects (name, owner, status) VALUES (?, ?, ?)").run(
    "Cursor Academy Launch",
    "Avery",
    "active",
  );
  db.prepare("INSERT INTO projects (name, owner, status) VALUES (?, ?, ?)").run(
    "Support Migration",
    "Morgan",
    "paused",
  );

  db.prepare("INSERT INTO users (name, role) VALUES (?, ?)").run("Avery", "engineer");
  db.prepare("INSERT INTO users (name, role) VALUES (?, ?)").run("Taylor", "designer");
  db.prepare("INSERT INTO users (name, role) VALUES (?, ?)").run("Morgan", "pm");

  const insertTask = db.prepare(`
    INSERT INTO tasks (projectId, title, description, status, priority, assigneeId)
    VALUES (?, ?, ?, ?, ?, ?)
  `);

  insertTask.run(1, "Ship onboarding flow", "Write the first guided module", "todo", "high", 1);
  insertTask.run(1, "Design landing assets", "Prepare hero copy and imagery", "inprogress", "medium", 2);
  insertTask.run(2, "Audit current tickets", "Group issues by support category", "done", "low", 3);
}

export { db };
