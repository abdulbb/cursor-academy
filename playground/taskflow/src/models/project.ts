export interface Project {
  id: number;
  name: string;
  owner: string;
  status: "active" | "paused" | "archived";
}
